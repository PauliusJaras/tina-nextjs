"use client";

import Image from "next/image";
import SvgIcon from "../svgIcon";
import { tinaField } from "tinacms/dist/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SideMenu from "./sideMenu";
import clsx from "clsx";
import { routes } from "../../routes/routes";
import { formatPrice } from "../../utils/formatData";

export default function DesktopNav({ data }) {
  const buttonArray = data?.navbar?.navButtons || [];

  const [hiddenMenuStyle, setHiddenMenuStyle] = useState(" hidden");
  const [hiddenBGStyle, setHiddenBGStyle] = useState(" hidden");
  const [sublinkHeader, setSublinkHeader] = useState("");
  const [sublinkIndex, setSublinkIndex] = useState(0);
  const [menuIndex, setMenuIndex] = useState(0);
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  //Applies css classes and checks logic to see if the navbar is open or closed and based on the results opens or closes the menu
  const mouseEnterHandler = () => {
    if (menuOpen) {
      setMenuOpen(false);
      mouseLeaveHandler();
    } else {
      setMenuOpen(true);
      if (hiddenMenuStyle != " slide-in-nav") {
        setHiddenMenuStyle(" slide-in-nav");
        setHiddenBGStyle(" ");
      }
    }
  };

  //Applies css classes to the navbar that make it close
  const mouseLeaveHandler = () => {
    setMenuOpen(false);
    if (hiddenMenuStyle != " slide-out-nav") {
      setHiddenMenuStyle(" slide-out-nav");
      setHiddenBGStyle(" hidden");
    }
    const activeElement = document.querySelector(".active-nav");
    activeElement?.classList.toggle("active-nav");
  };

  //on pathName change makes the navbar to close if it's open
  useEffect(() => {
    mouseLeaveHandler();
  }, [pathName]);

  //Returns a specific url based on the case
  const returnURL = (carData) => {
    switch (carData?.__typename) {
      case "Car":
        return `${routes.cars}/` + carData?._sys?.filename;
      case "DealershipCar":
        return `${routes.dealershipCars}/` + carData?._sys?.filename;
      default:
        return `${routes.cars}`;
    }
  };

  //A function that returns a component with custom url
  const returnRedirectButton = (data) => {
    if (data?.status) {
      return (
        <div
          data-tina-field={tinaField(data, "url")}
          className="m-4 inline-block place-self-end bg-black text-sm font-bold text-white hover:opacity-50 xl:text-lg"
        >
          <Link
            className="flex items-center px-4 py-1 "
            href={data?.url || "/"}
          >
            {data?.label}
            <SvgIcon iconName={"arrowRight"} className={"h-4 w-4"} />
          </Link>
        </div>
      );
    } else {
      return null;
    }
  };

  //Returns a component that matches the case
  const returnComponent = (componentName, dataArray) => {
    switch (componentName) {
      //Returns a component with car items that show image and title of the car and redirects to selected car page
      case "Car Component":
        if (dataArray) {
          return (
            <div className="grid grid-cols-2 gap-4 p-4 lg:grid-cols-3">
              {dataArray?.map((object, index) => {
                //control the amount of cars loaded
                if (index < 6)
                  return (
                    <div
                      className="cursor-pointer bg-white mix-blend-multiply hover:opacity-80"
                      key={index}
                    >
                      {object?.object?.tag && (
                        <p
                          data-tina-field={tinaField(
                            object?.object,
                            "tagLabel",
                          )}
                          className="sm:py absolute z-10 inline-block border border-red-500 px-2 py-1 text-xs font-bold uppercase text-red-500"
                        >
                          {object?.object?.tagLabel || "new"}
                        </p>
                      )}
                      <Link
                        className="flex flex-col justify-center"
                        href={returnURL(object?.object)}
                      >
                        <Image
                          data-tina-field={
                            object?.object &&
                            tinaField(object?.object, "mainImageUrl")
                          }
                          width={160}
                          height={90}
                          src={
                            object?.object?.mainImageUrl || "/misc/default.png"
                          }
                          alt={object?.object?.mainImageAlt || "default img"}
                          className="z-0 mx-1 scale-75 mix-blend-multiply sm:mx-3 sm:scale-100"
                        />
                        {object?.object?.info?.carPrice && (
                          <h4
                            data-tina-field={tinaField(
                              object?.object?.info,
                              "carPrice",
                            )}
                            className="pb-1 text-center text-xl font-bold text-blue-500"
                          >
                            {formatPrice(object?.object?.info?.carPrice)} €
                          </h4>
                        )}
                        <h5
                          data-tina-field={
                            object?.object && tinaField(object?.object, "label")
                          }
                          className="text-center text-sm font-bold "
                        >
                          {object?.object?.label}
                        </h5>
                      </Link>
                    </div>
                  );
              })}
            </div>
          );
        } else {
          return null;
        }

      //returns a component with news items that redirect to the specific news article
      case "News Component":
        return (
          <div className="col-span-2 flex flex-col p-4 lg:col-span-3">
            {data?.newsPageConnection.edges?.map((newsItem, index) => {
              return (
                <Link
                  className="flex items-center gap-4 border-b py-4 hover:opacity-80 sm:gap-16"
                  key={index}
                  href={`${routes.news}/` + newsItem?.node?._sys.filename}
                >
                  <h4
                    data-tina-field={
                      newsItem?.node && tinaField(newsItem?.node, "date")
                    }
                    className="font-bold"
                  >
                    {newsItem?.node?.date?.split("T")[0].replaceAll("-", ".")}
                  </h4>
                  <p
                    data-tina-field={
                      newsItem?.node && tinaField(newsItem?.node, "title")
                    }
                  >
                    {newsItem?.node?.title}
                  </p>
                </Link>
              );
            })}
          </div>
        );

      //Returns a component with an image that redirects to special offers pages
      case "Basic Component":
        if (dataArray) {
          return (
            <div className="grid grid-cols-2 gap-4 p-4">
              {dataArray?.map((object, index) => {
                if (index < 4)
                  return (
                    <div className="hover:opacity-80" key={index}>
                      <Link
                        className="flex h-full flex-col justify-between"
                        href={
                          `${routes.specialOffers}/` +
                          object?.object?._sys?.filename
                        }
                      >
                        <h3 className="text-base font-bold">{object.label}</h3>
                        <Image
                          className=""
                          data-tina-field={
                            object?.object &&
                            tinaField(object?.object, "mainPageImage")
                          }
                          width={500}
                          height={500}
                          src={
                            object?.object?.mainPageImage || "/misc/default.png"
                          }
                          alt={object?.object?.title || "default img"}
                        ></Image>
                      </Link>
                    </div>
                  );
              })}
            </div>
          );
        } else {
          return null;
        }

      //Returns a component with an image and text thats wrapped around in a link and redirects to the selected page
      case "Page Component":
        if (dataArray) {
          return (
            <div>
              {dataArray?.map((object, index) => {
                if (index < 1)
                  return (
                    <div
                      className="flex flex-row justify-between gap-2 overflow-hidden"
                      key={index}
                    >
                      <div className="basis-1/3 p-4">
                        <Link
                          className="flex items-center gap-2 text-sm font-bold text-black hover:text-gray-500"
                          href={
                            `${routes.pages}/` + object?.object?._sys?.filename
                          }
                        >
                          {object?.object?.pageTitle}
                          <div className="search-bar mr-2 md:mr-5">
                            <SvgIcon
                              iconName={"arrowRight"}
                              className="h-4 w-4"
                            />
                          </div>
                        </Link>
                        <p
                          data-tina-field={
                            object?.object &&
                            tinaField(object?.object, "description")
                          }
                          className="mt-4 border-t border-black pt-4 text-xs"
                        >
                          {object?.object?.description}
                        </p>
                      </div>
                      <Link
                        data-tina-field={
                          object?.object &&
                          tinaField(object?.object, "navbarImage")
                        }
                        className="relative h-96 basis-2/3"
                        href={
                          `${routes.pages}/` + object?.object?._sys?.filename
                        }
                      >
                        <Image
                          className="max-w-full overflow-hidden object-cover object-center"
                          fill
                          src={
                            object?.object?.navbarImage || "/misc/default.png"
                          }
                          alt={object?.object?.pageTitle || "default img"}
                        ></Image>
                      </Link>
                      <div className="absolute right-0 m-4 inline-block place-self-end bg-black text-sm font-bold text-white hover:opacity-50 xl:text-lg">
                        <Link
                          className="flex items-center px-4 py-1 "
                          href={
                            `${routes.pages}/` + object?.object?._sys?.filename
                          }
                        >
                          Daugiau
                          <SvgIcon
                            iconName={"arrowRight"}
                            className={"h-4 w-4"}
                          />
                        </Link>
                      </div>
                    </div>
                  );
              })}
            </div>
          );
        } else {
          return null;
        }
      default:
        return null;
    }
  };

  //Main component that handles the full logic and returns all the navbar elements
  return (
    <nav className="sticky top-0 z-[100]">
      {/*navbar menu that is always visible with logo, sublinks and link items */}
      <div className="relative z-50 flex justify-between bg-white px-4 py-2 shadow-sm ">
        {/*logo image that redirects to homepage */}
        <Link className="mr-4" href="/">
          <Image
            data-tina-field={tinaField(data?.navbar, "logo")}
            width={125}
            height={90}
            src={data?.navbar?.logo || "/logos/subaru-logo.png"}
            alt="logo"
            className="scale-75 lg:scale-100"
          />
        </Link>

        {/*sublinks, links and images that redirect to another page or open the menu on click*/}
        <div className="menu hidden self-center md:flex">
          <div className="left">
            {/*sublinks that redirect to other pages on click */}
            <div className="sub-links flex justify-end pb-4 pt-3">
              <ul className="flex cursor-pointer gap-2 text-xs font-light text-gray-500 md:gap-5">
                {data?.navbar?.subLinks?.map((sublink, index) => {
                  if (sublink) {
                    return (
                      <li
                        data-tina-field={sublink && tinaField(sublink, "label")}
                        key={(sublink?.label || "sublink") + index}
                        className="flex flex-nowrap gap-1 px-2 md:px-4 lg:px-6"
                      >
                        <Link
                          className=" hover:text-black"
                          href={sublink?.url || "/"}
                        >
                          {sublink?.label}
                        </Link>
                        <div className="self-end">
                          <Image
                            width={11}
                            height={8}
                            src={"/icons/header_outlink_icon.png"}
                            alt="outlink icon"
                          />
                        </div>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>

            {/*navbar button items that redirect to another page or open the menu on click*/}
            <div className="nav-links  flex justify-end">
              {data?.navbar?.navLinks?.map((link, index) => {
                //if is link then redirects to another page
                if (link?.url)
                  return (
                    <div
                      key={index}
                      className={clsx(
                        "nav-link cursor-pointer border-b-4 border-transparent pb-2 text-sm font-bold hover:border-b-blue-500 hover:text-blue-500 md:text-base lg:text-lg",
                        `order-${link?.order?.toString()}`,
                      )}
                    >
                      <h3
                        onMouseEnter={mouseLeaveHandler}
                        className={clsx("px-2 md:px-4 lg:px-5 xl:px-6", {
                          "border border-transparent border-r-gray-300":
                            link?.border,
                        })}
                      >
                        <Link
                          data-tina-field={link && tinaField(link, "url")}
                          href={link?.url || "/"}
                        >
                          {link?.label}
                        </Link>
                      </h3>
                    </div>
                  );
              })}

              {data?.navbar?.navButtons?.map((button, index) => {
                //If is button then inhericts logic that on click opens menu
                if (button)
                  return (
                    <div
                      onMouseOver={(e) => {
                        const activeElement =
                          document.querySelector(".active-nav");
                        activeElement?.classList.toggle("active-nav");
                        e.currentTarget.classList.toggle("active-nav");
                      }}
                      data-tina-field={button && tinaField(button, "label")}
                      key={index}
                      className={`nav-link cursor-pointer border-b-4 border-transparent pb-2 text-sm font-bold hover:border-b-blue-500 hover:text-blue-500 md:text-base lg:text-lg order-${button?.order}`}
                    >
                      <h3
                        onClick={(e) => {
                          if (sublinkIndex != index && menuOpen) {
                            setMenuIndex(0);
                            setSublinkIndex(index);
                            setSublinkHeader(
                              button?.label ||
                                (e.target as HTMLInputElement).textContent ||
                                "Menu",
                            );
                          } else {
                            mouseEnterHandler();
                            setMenuIndex(0);
                            setSublinkIndex(index);
                            setSublinkHeader(
                              button?.label ||
                                (e.target as HTMLInputElement).textContent ||
                                "Menu",
                            );
                          }
                        }}
                        // onMouseOver={(e) => {
                        //   setSublinkIndex(index);
                        //   setSublinkHeader(
                        //     button?.label ||
                        //       (e.target as HTMLInputElement).textContent ||
                        //       "Menu",
                        //   );
                        // }}
                        className={clsx("px-2 md:px-4 lg:px-5 xl:px-6", {
                          "border border-transparent border-r-gray-300":
                            button?.border,
                        })}
                      >
                        {button?.label}
                      </h3>
                    </div>
                  );
              })}
            </div>
          </div>
          {data?.navbar?.navImages?.map((navImage, index) => {
            //If is image then inhericts logic that makes it a link
            if (navImage)
              return (
                <div key={index} className="flex">
                  <div className="mx-2 h-16 self-center border-l-4 border-l-black lg:mx-6"></div>
                  <div className="right flex self-end">
                    <div className="nav-links">
                      <Link
                        onMouseEnter={mouseLeaveHandler}
                        href={navImage?.url || "/"}
                        target="_"
                        className="nav-link flex cursor-pointer text-sm font-bold brightness-0 hover:brightness-100 md:text-base lg:text-lg"
                      >
                        <Image
                          data-tina-field={tinaField(navImage, "image")}
                          width={100}
                          height={45}
                          src={navImage?.image || "/logos/jma-logo.png"}
                          alt={navImage?.label || "logo"}
                          className="self-center pb-4"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              );
          })}
        </div>
      </div>

      {/* If menu item is not a link and has items to show 
      opens the sublink section with a sidebar on the left 
      and the main component on the right with all the items
      like cars, news or pages*/}
      <div
        className={
          "align-center fixed top-[106px] z-40 flex min-h-96 w-screen justify-center bg-white" +
          hiddenMenuStyle
        }
      >
        <div className="relative flex w-1/2 bg-gray-100">
          <div className=" sidebar basis-1/3 border-r border-transparent border-r-gray-300">
            <h2 className="p-4 text-2xl">{sublinkHeader}</h2>
            <div className="grid grid-cols-1">
              {data?.navbar?.navButtons?.map((button) => {
                if (button?.label === sublinkHeader)
                  return button?.sublinks?.map((link, index) => {
                    if (link?.link?.isLink) {
                      return (
                        <Link
                          onClick={mouseLeaveHandler}
                          className="flex cursor-pointer content-center justify-between p-4 py-4 font-semibold hover:bg-gray-200 hover:text-blue-500"
                          key={index}
                          href={link?.link?.url || "/"}
                        >
                          <h4 className="">{link?.label}</h4>
                          <SvgIcon
                            iconName={"link"}
                            className={"h-4 w-4 self-center"}
                          />
                        </Link>
                      );
                    }
                    return (
                      <div
                        onClick={(e) => {
                          const index = parseInt(
                            (e.currentTarget as HTMLDivElement).id,
                          );
                          setMenuIndex(index);
                        }}
                        id={index.toString()}
                        className={
                          index === menuIndex
                            ? "flex cursor-pointer content-center justify-between bg-gray-200 p-4 py-4 font-semibold text-blue-500"
                            : "flex cursor-pointer content-center justify-between p-4 py-4 font-semibold hover:bg-gray-200 hover:text-blue-500"
                        }
                        key={index}
                      >
                        <h4 className="">{link?.label}</h4>
                        <SvgIcon
                          iconName={"arrowRight"}
                          className={"h-4 w-4 self-center"}
                        />
                      </div>
                    );
                  });
              })}
            </div>
          </div>
          {
            <div className="flex basis-2/3 flex-col justify-between">
              {returnComponent(
                buttonArray[sublinkIndex]?.sublinks?.[menuIndex]
                  ?.renderComponent,
                buttonArray[sublinkIndex]?.sublinks?.[menuIndex]
                  ?.componentObjects,
              )}
              {returnRedirectButton(
                data?.navbar?.navButtons?.[sublinkIndex]?.sublinks?.[menuIndex]
                  ?.redirectButton,
              )}
              <div onClick={mouseLeaveHandler} className="x absolute -right-12">
                <SvgIcon
                  iconName={"x"}
                  className="h-8 w-8 cursor-pointer bg-black text-white"
                />
              </div>
            </div>
          }
        </div>
      </div>

      {/*Applies dark background when the menu is open and when cursor moves on it closes the menu*/}
      <div
        className={"fixed top-0 h-screen w-screen bg-black/50" + hiddenBGStyle}
      ></div>

      {/*If sideMenu has items loads the side menu component that appears on the right side of the window or on mobile at the bottom*/}
      {data?.navbar?.sideMenu?.items && (
        <SideMenu data={data?.navbar?.sideMenu?.items} />
      )}
    </nav>
  );
}

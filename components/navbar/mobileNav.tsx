import SvgIcon from "../svgIcon";
import Link from "next/link";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import clsx from "clsx";
import DropDownButton from "../dropdownButton";
import { useMenuStore } from "../../stores/zustandStore";
import PhoneDropDown from "./phoneDropDown";
import MapDropDown from "./mapDropDown";

//Component that controls navigation for mobile version
export default function MobileNav({ data }) {
  //Zustand store variables for controlling mobile nav states
  const menuOpen = useMenuStore((state) => state.menuOpen);
  const setMenuOpen = useMenuStore((state) => state.setMenuOpen);
  const phoneIconState = useMenuStore((state) => state.phoneIconState);
  const setPhoneIconState = useMenuStore((state) => state.setPhoneIconState);
  const mapIconState = useMenuStore((state) => state.mapIconState);
  const setMapIconState = useMenuStore((state) => state.setMapIconState);

  //On click changes menu state and additionall dropdown bar state
  const handleClick = () => {
    setMenuOpen(menuOpen);
    evaluateMapIconState();
    evaluatePhoneIconState();
  };

  //Changes map dropdown bar state
  const evaluateMapIconState = () => {
    if (mapIconState) {
      setMapIconState();
    }
  };

  //Changes phone dropdown bar state
  const evaluatePhoneIconState = () => {
    if (phoneIconState) {
      setPhoneIconState();
    }
  };

  return (
    <div className="sticky top-0 z-[70] h-1/5 w-full bg-white">
      <div className="z-[70] flex min-h-[90px] w-screen justify-between gap-4 bg-white shadow-md">
        <div className="flex items-center justify-center ">
          <Link className="" href="/">
            <Image
              data-tina-field={tinaField(data?.navbar, "logo")}
              width={125}
              height={90}
              src={data?.navbar?.logo || "/logos/subaru-logo.png.png"}
              alt="logo"
              className="scale-75"
            />
          </Link>
          {data?.navbar?.navImages?.map((navImage, index) => {
            if (navImage)
              return (
                <Link key={index} className="" href={navImage?.url}>
                  <Image
                    data-tina-field={tinaField(navImage, "image")}
                    width={125}
                    height={90}
                    src={navImage?.image || "/logos/subaru-logo.png.png"}
                    alt={navImage?.label || "logo"}
                    className="scale-75 brightness-0 hover:brightness-100"
                  />
                </Link>
              );
          })}
        </div>
        <div className="flex items-center gap-4 self-center pr-4">
          <div
            onClick={evaluateMapIconState}
            className={clsx({ hidden: menuOpen })}
          >
            <PhoneDropDown
              phoneData={data?.navbar?.dropDownMenu?.phoneNumbers}
            />
          </div>
          <div
            onClick={evaluatePhoneIconState}
            className={clsx({ hidden: menuOpen })}
          >
            <MapDropDown mapData={data?.navbar?.dropDownMenu?.addresses} />
          </div>
          <div
            className={clsx({
              "border-l-2 border-l-black pl-2": !menuOpen,
              "": menuOpen,
            })}
            onClick={handleClick}
          >
            <SvgIcon
              iconName={clsx({ hamburger: !menuOpen, x: menuOpen })}
              className="h-8 w-8 cursor-pointer hover:opacity-50"
            ></SvgIcon>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "fixed top-0 z-[60] h-[calc(100vh-160px)] w-screen overflow-auto overscroll-contain bg-white py-2 transition-all duration-500 ease-in-out ",
          {
            "-translate-y-full opacity-0 ": !menuOpen,
            "translate-y-20 opacity-100": menuOpen,
          },
        )}
      >
        <div className="flex flex-col">
          {data?.navbar?.navLinks?.map((link, index) => {
            if (link?.url)
              return (
                <div
                  className={`order-${link?.order}`}
                  key={link?.label + index}
                >
                  <Link
                    onClick={handleClick}
                    className="flex w-full items-center justify-between border-b border-b-gray-500 bg-black/90 px-8 py-6 text-lg font-semibold text-white"
                    href={link?.url || "/"}
                  >
                    {link?.label}
                    <Image
                      width={14}
                      height={10}
                      src={"/icons/header_outlink_icon.png"}
                      alt="outlink icon"
                    />
                  </Link>
                </div>
              );
          })}

          {data?.navbar?.navButtons?.map((button, index) => {
            return (
              <div
                className={`order-${button?.order}`}
                key={button?.label + index}
              >
                <DropDownButton buttonData={button} />
              </div>
            );
          })}
          <div className="order-last">
            {data?.navbar?.subLinks?.map((sublink, index) => {
              if (sublink) {
                return (
                  <Link
                    data-tina-field={tinaField(sublink, "label")}
                    key={sublink?.label + index}
                    onClick={handleClick}
                    className="flex w-full items-center justify-between border-b border-b-gray-500 bg-black/80 px-8 py-4 font-semibold text-white"
                    href={sublink?.url || "/"}
                  >
                    {sublink?.label}
                    <div>
                      <Image
                        width={14}
                        height={10}
                        src={"/icons/header_outlink_icon.png"}
                        alt="outlink icon"
                      />
                    </div>
                  </Link>
                );
              }
            })}
            <div className="h-[160px] bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

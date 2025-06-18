"use client";

import { tinaField } from "tinacms/dist/react";
import Image from "next/image";
import { Carousel } from "@material-tailwind/react";
import SvgIcon from "./svgIcon";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useWindowSize } from "@uidotdev/usehooks";
import { routes } from "../routes/routes";

//Car carousel component used in the homepage
export default function CarCarousel({ data }) {
  const block = data;
  const [carIndex, setCarIndex] = useState(0);
  const [carIndex2, setCarIndex2] = useState(0);
  const [nxtBtn, setNxtBtn] = useState("hidden");
  const [preBtn, setPreBtn] = useState("hidden");
  const [carCategory, setCarCategory] = useState("");
  const carouselSlider = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();

  useEffect(() => {
    //setting active category to initial category on page load
    block?.categories?.map((category) => {
      if (category?.category?.style === "active") {
        setCarCategory(category.category.label);
      }
    });

    setTimeout(() => {
      checkSliderOverflow();
    }, 500);
  }, []);

  const checkSliderOverflow = () => {
    if (carouselSlider.current) {
      if (
        carouselSlider.current.scrollWidth > carouselSlider.current.clientWidth
      ) {
        setNxtBtn("flex");
        setPreBtn("hidden");
      } else {
        setNxtBtn("hidden");
        setPreBtn("hidden");
      }
    }
  };

  const handleScrollPositionLeft = () => {
    if (carouselSlider.current != null) {
      const slider = carouselSlider.current;
      const sliderWidth = slider.getBoundingClientRect().width;

      const futureScrollPosition = (slider.scrollLeft += sliderWidth
        ? sliderWidth - 100
        : 1200);
      setPreBtn("flex");

      if (futureScrollPosition + sliderWidth >= slider.scrollWidth) {
        setNxtBtn("hidden");
      }
    }
  };

  const handleScrollPositionRight = () => {
    if (carouselSlider.current != null) {
      const slider = carouselSlider.current;
      const sliderWidth = slider.getBoundingClientRect().width;

      const futureScrollPosition = (slider.scrollLeft -= sliderWidth
        ? sliderWidth
        : 1200);
      setNxtBtn("flex");

      if (futureScrollPosition <= 100) {
        setPreBtn("hidden");
      }
    }
  };

  const carouselItemTransition = () => {
    const carouselMain = document.querySelectorAll(".carousel-main-item");
    carouselMain[0]?.classList.add("slide");
    setTimeout(() => {
      carouselMain[0]?.classList.remove("slide");
    }, 500);
  };

  const sliderTransition = () => {
    const carouselFooter = document.querySelector(".carousel-footer");
    carouselFooter?.classList.add("slide-out");
    setTimeout(() => {
      carouselFooter?.classList.remove("slide-out");
    }, 500);
  };

  if (windowSize.width && windowSize?.width <= 1000) {
    return (
      <div className="carousel  relative z-50 my-4">
        <h3 className="m-4 text-xl font-medium">Pasirinkite:</h3>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {block.cars.map((car, index) => {
            if (car?.car) {
              return (
                <Link
                  className="flex flex-col items-center"
                  href={
                    car?.car?.url || `${routes.cars}/` + car?.car?._sys.filename
                  }
                  key={index}
                >
                  <Image
                    data-tina-field={tinaField(car?.car, "mainImageUrl")}
                    width={190}
                    height={126}
                    src={car?.car?.mainImageUrl || "/misc/default.png"}
                    alt={car?.car?.mainImageAlt || "default img"}
                    className="z-0 "
                  />
                  <h5
                    data-tina-field={tinaField(car?.car, "label")}
                    className="text-center text-sm font-bold "
                  >
                    {car?.car?.label}
                  </h5>
                </Link>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="carousel relative z-50">
        {block.showHeader && (
          <div className="carousel-header flex flex-wrap justify-between md:flex-nowrap">
            <h2
              className="basis-1/2  text-3xl"
              data-tina-field={tinaField(block, "header")}
            >
              {block.header}
            </h2>
            <div className="mt-4 flex basis-1/2 flex-wrap justify-start sm:mt-0 sm:flex-nowrap sm:justify-end">
              <div className="carousel-categories flex items-center">
                {block?.categories?.map((category, index) => {
                  if (category) {
                    return (
                      <p
                        onClick={(e) => {
                          carouselItemTransition();
                          sliderTransition();
                          const activeElement =
                            document.querySelector(".active");
                          activeElement?.classList.toggle("active");
                          e.currentTarget.classList.toggle("active");
                          const newCategory = category.category?.label;
                          let carIndex = 0;
                          if (category.category.filter) {
                            setCarCategory("");
                          } else {
                            setCarCategory(newCategory);
                            carIndex =
                              block.cars?.findIndex(
                                (car) =>
                                  car?.car?.category?.label === newCategory,
                              ) || 0;
                          }
                          setCarIndex2(carIndex);
                          setTimeout(() => {
                            setCarIndex(carIndex);
                            checkSliderOverflow();
                          }, 500);
                        }}
                        className={
                          "mr-6 cursor-pointer whitespace-nowrap font-bold hover:text-blue-500 " +
                          category.category?.style
                        }
                        data-tina-field={
                          category.category &&
                          tinaField(category.category, "label")
                        }
                        key={index}
                      >
                        {category.category?.label}
                      </p>
                    );
                  }
                })}
              </div>
              <div className="carousel-buttons mt-4 flex gap-4 sm:mt-0">
                {block.buttons?.map((button, index) => {
                  if (button) {
                    return (
                      <Link
                        className="flex items-center whitespace-nowrap bg-black px-4 py-1 font-bold text-white hover:opacity-50"
                        data-tina-field={tinaField(button, "label")}
                        href={button.url || "#"}
                        key={index}
                        target="_blank"
                      >
                        {button.label}
                        <SvgIcon
                          iconName={"arrowRight"}
                          className={"h-4 w-4"}
                        />
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        )}

        <div className="carousel-main mt-6 grid">
          <div className="carousel-main-item z-40 col-start-1 row-start-1 flex flex-wrap">
            <div className="left md:basis-1/2">
              {block.cars?.map((car, index) => {
                if (car?.car && index === carIndex) {
                  return (
                    <div key={index} className="relative">
                      <div className="flex">
                        <ul
                          data-tina-field={tinaField(car?.car, "documents")}
                          className={
                            car.car?.showDocuments
                              ? "absolute right-0 z-10 flex flex-row"
                              : "hidden"
                          }
                        >
                          <li className="group relative">
                            <Link
                              className="ml-2 inline-block rounded-full bg-black p-2 text-white hover:opacity-50"
                              href={car?.car.documents?.doc1 || "#"}
                              target="_blank"
                            >
                              <SvgIcon
                                iconName={"doc1"}
                                className={"h-5 w-5 xl:h-7 xl:w-7"}
                              />
                            </Link>
                            <p className="absolute scale-x-0 cursor-pointer text-center text-sm opacity-0 transition duration-500 ease-in-out group-hover:scale-x-100 group-hover:opacity-100">
                              {car?.car.documents?.doc1Title}
                            </p>
                          </li>
                          <li className="group relative">
                            <Link
                              className="ml-2 inline-block rounded-full bg-black p-2 text-white hover:opacity-50 "
                              href={car?.car.documents?.doc2 || "#"}
                              target="_blank"
                            >
                              <SvgIcon
                                iconName={"doc2"}
                                className={"h-5 w-5 xl:h-7 xl:w-7"}
                              />
                            </Link>
                            <p className="absolute scale-x-0 cursor-pointer text-center text-sm opacity-0 transition duration-500 ease-in-out group-hover:scale-x-100 group-hover:opacity-100">
                              {car?.car.documents?.doc2Title}
                            </p>
                          </li>
                          <li className="group relative">
                            <Link
                              className="ml-2 inline-block rounded-full bg-black p-2 text-white hover:opacity-50"
                              href={car?.car.documents?.doc3 || "#"}
                              target="_blank"
                            >
                              <SvgIcon
                                iconName={"doc3"}
                                className={"h-5 w-5 xl:h-7 xl:w-7"}
                              />
                            </Link>
                            <p className="absolute scale-x-0 cursor-pointer text-center text-sm opacity-0 transition duration-500 ease-in-out group-hover:scale-x-100 group-hover:opacity-100">
                              {car?.car.documents?.doc3Title}
                            </p>
                          </li>
                          <li className="group relative">
                            <Link
                              className="mx-2 inline-block rounded-full bg-black p-2 text-white hover:opacity-50"
                              href={car?.car.documents?.doc4 || "#"}
                              target="_blank"
                            >
                              <SvgIcon
                                iconName={"doc4"}
                                className={"h-5 w-5 xl:h-7 xl:w-7"}
                              />
                            </Link>
                            <p className="absolute scale-x-0 cursor-pointer text-center text-sm opacity-0 transition duration-500 ease-in-out group-hover:scale-x-100 group-hover:opacity-100">
                              {car?.car.documents?.doc4Title}
                            </p>
                          </li>
                        </ul>
                        {!car?.car?.tag || (
                          <p
                            data-tina-field={tinaField(car?.car, "tagLabel")}
                            className="absolute h-6 border border-red-500 px-4 py-1 text-xs font-bold uppercase text-red-500 xl:h-8 xl:text-lg"
                          >
                            {car?.car?.tagLabel || "new"}
                          </p>
                        )}
                      </div>
                      <h3
                        data-tina-field={tinaField(car?.car, "label")}
                        className="absolute top-6 text-lg font-bold xl:top-10 xl:text-2xl"
                      >
                        {car?.car?.label}
                      </h3>
                      <div className="absolute top-12 xl:top-16">
                        {car?.car.subTags?.map((subTag, index) => {
                          return (
                            <p
                              data-tina-field={tinaField(car, "subTags")}
                              key={index}
                              className="mr-2 inline border border-black px-2 py-0 text-xs font-bold"
                            >
                              {subTag}
                            </p>
                          );
                        })}
                      </div>
                      <Link
                        className="align-center flex justify-center hover:opacity-50"
                        href={
                          car?.car?.url ||
                          `${routes.cars}/` + car?.car?._sys.filename
                        }
                      >
                        <Image
                          data-tina-field={tinaField(car?.car, "mainImageUrl")}
                          width={1280}
                          height={720}
                          src={car?.car?.mainImageUrl || "/misc/default.png"}
                          alt={car?.car?.mainImageAlt || "default img"}
                        />
                      </Link>
                      <Link
                        data-tina-field={tinaField(car?.car, "mainButton")}
                        className="absolute bottom-0 right-0 z-10 flex flex-row bg-black px-4 py-1 text-sm font-bold text-white hover:opacity-50 md:right-5 xl:text-lg"
                        href={
                          car?.car?.mainButton?.url ||
                          `${routes.cars}/` + car?.car?._sys.filename
                        }
                        key={index}
                      >
                        {car?.car.mainButton?.title}
                        <SvgIcon
                          iconName={"arrowRight"}
                          className={"h-4 w-4 self-center"}
                        />
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
            <div className="right mt-4 md:mt-0 md:basis-1/2">
              {block.cars?.map((car, index) => {
                if (car && index === carIndex) {
                  return (
                    <Carousel
                      className="max-h-[720px]"
                      autoplay={true}
                      loop={true}
                      key={index}
                    >
                      {car?.car.images?.map((image, index) => {
                        if (image) {
                          return (
                            <Image
                              data-tina-field={tinaField(image, "alt")}
                              key={index}
                              fill
                              src={image?.url || "/"}
                              alt={image?.alt || "#"}
                              className="max-w-full object-cover"
                            />
                          );
                        }
                      })}
                    </Carousel>
                  );
                }
              })}
            </div>
          </div>
          <div className="carousel-main-item z-30 col-start-1 row-start-1 flex flex-wrap">
            <div className="left md:basis-1/2">
              {block.cars?.map((car, index) => {
                if (car?.car && index === carIndex2) {
                  return (
                    <div key={index} className="relative">
                      <div className="flex">
                        <ul
                          data-tina-field={tinaField(car?.car, "documents")}
                          className={
                            car?.car.showDocuments
                              ? "absolute right-0 z-10 flex flex-row"
                              : "hidden"
                          }
                        >
                          <li className="group relative">
                            <Link
                              className="ml-2 inline-block rounded-full bg-black p-2 text-white hover:opacity-50"
                              href={car?.car.documents?.doc1 || "#"}
                            >
                              <SvgIcon
                                iconName={"doc1"}
                                className={"h-5 w-5 xl:h-7 xl:w-7"}
                              />
                            </Link>
                            <p className="absolute scale-x-0 cursor-pointer text-center text-sm opacity-0 transition duration-500 ease-in-out group-hover:scale-x-100 group-hover:opacity-100">
                              {car?.car.documents?.doc1Title}
                            </p>
                          </li>
                          <li className="group relative">
                            <Link
                              className="ml-2 inline-block rounded-full bg-black p-2 text-white hover:opacity-50 "
                              href={car?.car.documents?.doc2 || "#"}
                            >
                              <SvgIcon
                                iconName={"doc2"}
                                className={"h-5 w-5 xl:h-7 xl:w-7"}
                              />
                            </Link>
                            <p className="absolute scale-x-0 cursor-pointer text-center text-sm opacity-0 transition duration-500 ease-in-out group-hover:scale-x-100 group-hover:opacity-100">
                              {car?.car.documents?.doc2Title}
                            </p>
                          </li>
                          <li className="group relative">
                            <Link
                              className="ml-2 inline-block rounded-full bg-black p-2 text-white hover:opacity-50"
                              href={car?.car.documents?.doc3 || "#"}
                            >
                              <SvgIcon
                                iconName={"doc3"}
                                className={"h-5 w-5 xl:h-7 xl:w-7"}
                              />
                            </Link>
                            <p className="absolute scale-x-0 cursor-pointer text-center text-sm opacity-0 transition duration-500 ease-in-out group-hover:scale-x-100 group-hover:opacity-100">
                              {car?.car.documents?.doc3Title}
                            </p>
                          </li>
                          <li className="group relative">
                            <Link
                              className="mx-2 inline-block rounded-full bg-black p-2 text-white hover:opacity-50"
                              href={car?.car.documents?.doc4 || "#"}
                            >
                              <SvgIcon
                                iconName={"doc4"}
                                className={"h-5 w-5 xl:h-7 xl:w-7"}
                              />
                            </Link>
                            <p className="absolute scale-x-0 cursor-pointer text-center text-sm opacity-0 transition duration-500 ease-in-out group-hover:scale-x-100 group-hover:opacity-100">
                              {car?.car.documents?.doc4Title}
                            </p>
                          </li>
                        </ul>
                        {!car?.car?.tag || (
                          <p
                            data-tina-field={tinaField(car?.car, "tagLabel")}
                            className="absolute h-6 border border-red-500 px-4 py-1 text-xs font-bold uppercase text-red-500 xl:h-8 xl:text-lg"
                          >
                            {car?.car?.tagLabel || "new"}
                          </p>
                        )}
                      </div>
                      <h3
                        data-tina-field={tinaField(car?.car, "label")}
                        className="absolute top-6 text-lg font-bold xl:top-10 xl:text-2xl"
                      >
                        {car?.car?.label}
                      </h3>
                      <div className="absolute top-12 xl:top-16">
                        {car?.car.subTags?.map((subTag, index) => {
                          return (
                            <p
                              data-tina-field={tinaField(car, "subTags")}
                              key={index}
                              className="mr-2 inline border border-black px-2 py-0 text-xs font-bold"
                            >
                              {subTag}
                            </p>
                          );
                        })}
                      </div>
                      <Link
                        className="align-center flex justify-center hover:opacity-50"
                        href={
                          car?.car?.url ||
                          `${routes.cars}/` + car?.car?._sys.filename
                        }
                      >
                        <Image
                          data-tina-field={tinaField(car?.car, "mainImageUrl")}
                          width={1280}
                          height={720}
                          src={car?.car?.mainImageUrl || "/misc/default.png"}
                          alt={car?.car?.mainImageAlt || "default img"}
                        />
                      </Link>
                      <Link
                        data-tina-field={tinaField(car?.car, "mainButton")}
                        className="absolute bottom-0 right-0 z-10 flex flex-row bg-black px-4 py-1 text-sm font-bold text-white hover:opacity-50 md:right-5 xl:text-lg"
                        href={
                          car?.car?.mainButton?.url ||
                          `${routes.cars}/` + car?.car?._sys.filename
                        }
                        key={index}
                      >
                        {car?.car.mainButton?.title}
                        <SvgIcon
                          iconName={"arrowRight"}
                          className={"h-4 w-4 self-center"}
                        />
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
            <div className="right mt-4 md:mt-0 md:basis-1/2">
              {block.cars?.map((car, index) => {
                if (car?.car && index === carIndex2) {
                  return (
                    <Carousel
                      className="max-h-[720px]"
                      autoplay={true}
                      loop={true}
                      key={index}
                    >
                      {car?.car.images?.map((image, index) => {
                        if (image) {
                          return (
                            <Image
                              data-tina-field={tinaField(image, "alt")}
                              key={index}
                              fill
                              src={image?.url || "/"}
                              alt={image?.alt || "#"}
                              className="max-w-full object-cover"
                            />
                          );
                        }
                      })}
                    </Carousel>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <h4
          data-tina-field={tinaField(block, "sliderHeader")}
          className="mt-10 text-xl"
        >
          {block.sliderHeader}
        </h4>
        <div className="carousel-footer">
          <button
            className={"pre-btn w-[20vw] sm:w-[15vw] md:w-[10vw] " + preBtn}
            onClick={() => {
              handleScrollPositionRight();
            }}
          >
            <SvgIcon
              iconName={"arrowLeft"}
              className={"h-6 w-6 hover:opacity-50"}
            />
          </button>
          <button
            className={"nxt-btn w-[20vw] sm:w-[15vw] md:w-[10vw] " + nxtBtn}
            onClick={() => {
              handleScrollPositionLeft();
            }}
          >
            <SvgIcon
              iconName={"arrowRight"}
              className={"h-6 w-6 hover:opacity-50"}
            />
          </button>
          <div
            ref={carouselSlider}
            className="carousel-slider px-4 [scrollbar-width:none] sm:px-8 md:px-16"
          >
            <div className="slider-items relative flex flex-row">
              {block.cars?.map((car, index) => {
                if (
                  car?.car &&
                  (car.car?.category?.label === carCategory ||
                    carCategory === "")
                ) {
                  return (
                    <div
                      id={index.toString()}
                      key={index}
                      className="slider-item cursor-pointer self-end hover:opacity-80"
                      onClick={(e) => {
                        const index = parseInt(
                          (e.currentTarget as HTMLDivElement).id,
                        );
                        carouselItemTransition();
                        setCarIndex2(index);
                        setTimeout(() => {
                          setCarIndex(index);
                        }, 500);
                      }}
                    >
                      {!car?.car?.tag || (
                        <p
                          data-tina-field={tinaField(car?.car, "tagLabel")}
                          className="sm:py absolute z-10 inline-block border border-red-500 px-2 py-1 text-xs font-bold uppercase text-red-500"
                        >
                          {car?.car?.tagLabel || "new"}
                        </p>
                      )}
                      <Image
                        data-tina-field={tinaField(car?.car, "mainImageUrl")}
                        width={160}
                        height={90}
                        src={car?.car?.mainImageUrl || "/misc/default.png"}
                        alt={car?.car?.mainImageAlt || "default img"}
                        className="z-0 mx-1 scale-75 sm:mx-3 sm:scale-100"
                      />
                      <h5
                        data-tina-field={tinaField(car?.car, "label")}
                        className="text-center text-sm font-bold "
                      >
                        {car?.car?.label}
                      </h5>
                    </div>
                  );
                }
              })}
            </div>
            <div className="slider-divider"></div>
          </div>
        </div>
      </div>
    );
  }
}

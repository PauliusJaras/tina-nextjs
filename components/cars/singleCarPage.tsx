"use client";

import { useTina } from "tinacms/dist/react";
import React, { useState, useRef } from "react";
import { CarPageAndCarsQuery } from "../../tina/__generated__/types";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import EmployeeCard from "../employeeCard";
import MissingPage from "../missingPage";
import TinaBox from "../tinaBox";
import PriceCatalogue from "../tables/priceCatalogue";
import SwiperGallery from "../swiperGalerry";
import Specifications from "../tables/specifications";
import { routes } from "../../routes/routes";

//Renders selected car model page
export function SingleCarPage(props: {
  data: CarPageAndCarsQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);
  const [currentSubPage, setCurrentSubPage] = useState("default");
  const slideToDiv = useRef<null | HTMLDivElement>(null);

  if (!data) {
    return (
      <MissingPage title="Nauji automobiliai" url={routes.cars}></MissingPage>
    );
  }

  const itemClasses = {
    h1: "text-4xl py-4 break-words text-pretty",
    h2: "text-3xl py-2",
    h3: "text-2xl py-2",
    h4: "text-xl py-2",
    h5: "text-lg py-2",
    h6: "text-base py-2",
    p: "text-sm py-2",
    a: "text-blue-500 font-semibold hover:text-black cursor-pointer",
    li: "list-disc ml-6 p-1 text-sm",
  };

  const liList = ["Techniniai duomenys", "Galerija", "Kainos"];

  const onClickSetTitleAndScroll = (title) => {
    setCurrentSubPage(title || "default");
    slideToDiv?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  return (
    <>
      <header className="mb-12 w-full max-w-[1980px] self-center sm:mb-48 md:mb-32 lg:mb-16">
        <ul className="flex w-full cursor-pointer flex-col items-start justify-end gap-2 text-nowrap px-8 py-4 lg:flex-row lg:items-center lg:gap-8">
          <div className="w-full">
            <li
              data-tina-field={
                data?.carPage?.car && tinaField(data.carPage.car, "label")
              }
              onClick={() => onClickSetTitleAndScroll("default")}
              className="font-medium hover:text-blue-500"
            >
              {data?.carPage?.car?.label} apžvalga
            </li>
          </div>
          {data?.carPage?.subPages?.map((subPage, index) => {
            return (
              <li
                onClick={() => onClickSetTitleAndScroll(subPage?.title)}
                data-tina-field={subPage && tinaField(subPage, "title")}
                key={index}
                className="hover:text-blue-500"
              >
                {subPage?.title}
              </li>
            );
          })}
          {liList?.map((li) => {
            return (
              <li
                key={li}
                onClick={() => onClickSetTitleAndScroll(li)}
                className="hover:text-blue-500"
              >
                {li}
              </li>
            );
          })}
        </ul>
        <div className="relative w-full">
          <div className="relative h-[50vh] max-h-[580px] w-full overflow-hidden">
            <Image
              data-tina-field={
                data?.carPage?.car &&
                tinaField(data?.carPage?.car, "headerImageUrl")
              }
              fill
              sizes="100vw"
              src={data?.carPage?.car?.headerImageUrl || "/misc/default.png"}
              alt={data?.carPage?.car?.headerImageAlt || "Header img"}
              className="object-cover"
            />
          </div>

          {data?.carPage?.seller && (
            <EmployeeCard
              position={"absolute top-0 max-w-[160px] mx-8"}
              seller={data?.carPage?.seller}
            ></EmployeeCard>
          )}
          {data?.carPage?.car?.info?.price && (
            <div
              data-tina-field={
                data?.carPage?.car?.info?.price &&
                tinaField(data?.carPage?.car?.info, "price")
              }
              className="absolute -bottom-12 right-0 mx-8 mt-12 h-24 text-nowrap bg-black bg-opacity-60 px-8 pt-2 text-white"
            >
              <p className="text-xs">
                Nuo:{" "}
                <span className="text-lg sm:text-2xl">
                  {data?.carPage?.car?.info?.price} €
                </span>
              </p>
              <p className="text-basis mt-4 sm:text-lg">
                Kaina (su 21 proc. PVM)
              </p>
            </div>
          )}
        </div>
      </header>
      <main ref={slideToDiv} className="compact-container flex justify-center">
        {currentSubPage === "default" && (
          <div
            className="grow"
            data-tina-field={
              data?.carPage?.body && tinaField(data?.carPage, "body")
            }
          >
            <TinaBox
              updateItemClasses={itemClasses}
              data={data?.carPage}
            ></TinaBox>
          </div>
        )}
        {currentSubPage === "Kainos" && (
          <div className="">
            <PriceCatalogue model={data?.carPage?.car?.label} />
          </div>
        )}
        {currentSubPage === "Galerija" && (
          <div>
            <div className="w-screen max-w-[1920px]">
              <SwiperGallery images={data?.carPage?.car?.images} />
            </div>
          </div>
        )}
        {currentSubPage === "Techniniai duomenys" && (
          <div>
            <div>
              <h1 className="text-bold border-b border-b-gray-300 py-4 text-4xl capitalize">
                {currentSubPage}
              </h1>
              <Specifications model={data?.carPage?.car?.label} />
            </div>
          </div>
        )}
        {currentSubPage !== "default" &&
          data?.carPage?.subPages?.map((subPage, index) => {
            if (currentSubPage === subPage?.title) {
              return (
                <>
                  <div className="grow" key={index}>
                    <h1 className="text-bold border-b border-b-gray-300 py-4 text-4xl capitalize">
                      {currentSubPage}
                    </h1>
                    <TinaBox
                      updateItemClasses={itemClasses}
                      data={subPage}
                    ></TinaBox>
                  </div>
                </>
              );
            }
          })}
      </main>
    </>
  );
}

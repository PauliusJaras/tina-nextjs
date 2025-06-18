"use client";

import { useTina } from "tinacms/dist/react";
import React from "react";
import { DealershipCarQuery } from "../../tina/__generated__/types";
import TinaBox from "../tinaBox";
import { tinaField } from "tinacms/dist/react";
import MissingPage from "../missingPage";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import EmployeeCard from "../employeeCard";
import Label from "../label";
import { routes } from "../../routes/routes";
import { formatPrice } from "../../utils/formatData";
import Link from "next/link";

export function SingleDealershipCarPage(props: {
  data: DealershipCarQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);

  if (!data) {
    return (
      <MissingPage
        title="Salono ir naudoti automobiliai"
        url={routes.dealershipCars}
      ></MissingPage>
    );
  }

  return (
    <main className=" bg-black/80">
      <div className="flex flex-col justify-between gap-4 xl:flex-row">
        <h3 className="text-3xl font-semibold text-white">
          {data?.dealershipCar?.page?.title}
        </h3>
      </div>
      <div className="my-4 border-b-4 border-b-blue-500"></div>
      <div className="flex flex-col gap-4 xl:flex-row">
        <div className=" basis-2/5 bg-white">
          <div className="flex h-full items-center justify-center p-2">
            <Carousel className="h-[400px]" autoplay={true} loop={true}>
              {data.dealershipCar?.images?.map((image, index) => {
                return (
                  <div key={index} className="relative h-[400px]">
                    <Image
                      data-tina-field={image && tinaField(image, "alt")}
                      fill
                      src={image?.url || "/"}
                      alt={image?.alt || "#"}
                      className="object-cover object-center"
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
        <div className="basis-3/5">
          <div className="flex items-center justify-between bg-gray-800 p-4 text-3xl font-bold text-white">
            <h3>AUTOMOBILIO DUOMENYS</h3>
            {data?.dealershipCar?.tag && (
              <Label labelText={data?.dealershipCar?.tagLabel} />
            )}
          </div>
          <div className="flex flex-col justify-between bg-white sm:flex-row">
            <div className="w-full text-center">
              <h4
                data-tina-field={
                  data?.dealershipCar?.info &&
                  tinaField(data?.dealershipCar?.info, "carPrice")
                }
                className="pb-2 pt-8 text-3xl font-bold text-blue-500"
              >
                <span className="text-thin text-xl  text-black">Kaina:</span>
                {formatPrice(data?.dealershipCar?.info?.carPrice)} €
              </h4>
              <div className="flex justify-center ">
                <Link
                  className="flex w-[200px] justify-center bg-black/80 py-2 text-white hover:opacity-80 "
                  href={`${routes.forms}/domina/${data?.dealershipCar?._sys?.filename}`}
                >
                  Mane Domina
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-4 p-4 text-left sm:grid-cols-2">
                <div className="grid grid-cols-2">
                  <p
                    data-tina-field={
                      data?.dealershipCar?.info &&
                      tinaField(data?.dealershipCar?.info, "model")
                    }
                    className="bg-gray-100 p-2 text-base font-bold"
                  >
                    Modelis:
                  </p>
                  <p className="bg-gray-200 p-2 text-base">
                    {data?.dealershipCar?.info?.model}
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <p
                    data-tina-field={
                      data?.dealershipCar?.info &&
                      tinaField(data?.dealershipCar?.info, "workingVolume")
                    }
                    className="bg-gray-100 p-2 text-base font-bold"
                  >
                    Darbinis Tūris:
                  </p>
                  <p className="bg-gray-200 p-2 text-base">
                    {data?.dealershipCar?.info?.workingVolume}
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <p
                    data-tina-field={
                      data?.dealershipCar?.info &&
                      tinaField(data?.dealershipCar?.info, "engine")
                    }
                    className="bg-gray-100 p-2 text-base font-bold"
                  >
                    Variklis:
                  </p>
                  <p className="bg-gray-200 p-2 text-base">
                    {data?.dealershipCar?.info?.engine}
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <p
                    data-tina-field={
                      data?.dealershipCar?.info &&
                      tinaField(data?.dealershipCar?.info, "power")
                    }
                    className="bg-gray-100 p-2 text-base font-bold"
                  >
                    Galia:
                  </p>
                  <p className="bg-gray-200 p-2 text-base">
                    {data?.dealershipCar?.info?.power}
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <p
                    data-tina-field={
                      data?.dealershipCar?.info &&
                      tinaField(data?.dealershipCar?.info, "gearbox")
                    }
                    className="bg-gray-100 p-2 text-base font-bold"
                  >
                    Transmisija:
                  </p>
                  <p className="bg-gray-200 p-2 text-base">
                    {data?.dealershipCar?.info?.gearbox}
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <p
                    data-tina-field={
                      data?.dealershipCar?.info &&
                      tinaField(data?.dealershipCar?.info, "registerDate")
                    }
                    className="bg-gray-100 p-2 text-base font-bold"
                  >
                    Registracijos Data:
                  </p>
                  <p className="bg-gray-200 p-2 text-base">
                    {data?.dealershipCar?.info?.registerDate
                      ?.toString()
                      .slice(0, 7)}
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <p
                    data-tina-field={
                      data?.dealershipCar?.info &&
                      tinaField(data?.dealershipCar?.info, "mileage")
                    }
                    className="bg-gray-100 p-2 text-base font-bold"
                  >
                    Rida:
                  </p>
                  <p className="bg-gray-200 p-2 text-base">
                    {data?.dealershipCar?.info?.mileage}
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <p
                    data-tina-field={
                      data?.dealershipCar?.info &&
                      tinaField(data?.dealershipCar?.info, "fuelType")
                    }
                    className="bg-gray-100 p-2 text-base font-bold"
                  >
                    Degalų Tipas:
                  </p>
                  <p className="bg-gray-200 p-2 text-base">
                    {data?.dealershipCar?.info?.fuelType}
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-full sm:basis-1/4">
              <EmployeeCard
                seller={data?.dealershipCar?.page?.seller}
              ></EmployeeCard>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 basis-full border-y border-y-white bg-gray-800 p-8 text-white">
        <div
          data-tina-field={
            data?.dealershipCar?.page &&
            tinaField(data?.dealershipCar?.page, "body")
          }
        >
          <div className=" text-3xl font-bold text-white"></div>
          <TinaBox data={data?.dealershipCar?.page}></TinaBox>
        </div>
      </div>
    </main>
  );
}

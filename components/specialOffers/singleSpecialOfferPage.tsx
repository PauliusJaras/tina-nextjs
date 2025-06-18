"use client";

import { useTina } from "tinacms/dist/react";
import React from "react";
import { SpecialOfferAndDealershipCarsQuery } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import TinaBox from "../tinaBox";
import MissingPage from "../missingPage";
import { routes } from "../../routes/routes";
import HeaderImageContainer from "./headerImageContainer";
import Link from "next/link";
import { formatPrice } from "../../utils/formatData";
import Label from "../label";
import Image from "next/image";

//Renders selected special offer page
export function SingleSpecialOfferPage(props: {
  data: SpecialOfferAndDealershipCarsQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);

  if (!data) {
    return (
      <MissingPage
        title="Specialūs pasiūlymai"
        url={routes.specialOffers}
      ></MissingPage>
    );
  }

  const itemClasses = {
    h1: "text-4xl py-6",
    h2: "text-3xl py-4",
    h3: "text-2xl py-2",
    h4: "text-xl py-2",
    h5: "text-lg py-2",
    h6: "text-xs py-2",
    p: "text-sm py-2",
    a: "text-blue-500 font-semibold hover:text-black cursor-pointer",
    li: "list-disc ml-6 p-1 text-xs",
    td: "break-all border border-gray-300 p-2 text-xs hover:bg-gray-300 md:text-sm lg:text-xs",
    string: "text-red-500",
  };

  return (
    <>
      <HeaderImageContainer data={data} />
      <main className="compact-container">
        <div>
          <h2
            data-tina-field={
              data?.specialOffer?.title &&
              tinaField(data?.specialOffer, "title")
            }
            className="text-3xl"
          >
            {data?.specialOffer?.title}
          </h2>
        </div>
        <TinaBox
          updateItemClasses={itemClasses}
          data={data?.specialOffer}
        ></TinaBox>
      </main>

      {data?.specialOffer?.model && (
        <div className="p-4">
          {data?.dealershipCarConnection?.edges?.map((edge, index) => {
            if (
              edge?.node?.model == data?.specialOffer?.model &&
              !edge?.node?.carStatus
            ) {
              return (
                <div
                  key={index}
                  className="flex flex-col gap-4 bg-white sm:gap-8 lg:flex-row"
                >
                  <div className="grid basis-1 place-items-center lg:basis-3/5">
                    <Image
                      data-tina-field={
                        edge?.node?.label && tinaField(edge?.node, "label")
                      }
                      src={
                        (edge?.node?.images && edge?.node?.images[0]?.url) ||
                        "/misc/default.png"
                      }
                      alt={
                        (edge?.node?.images && edge?.node?.images[0]?.alt) ||
                        "Main Image"
                      }
                      width={1280}
                      height={720}
                      className="p-2"
                    />
                  </div>
                  <div className="flex basis-1 flex-col justify-between p-4 lg:basis-3/5">
                    <div className="flex flex-col gap-2 pr-2 2xl:gap-4">
                      <div className="flex flex-col justify-between gap-2 border-b border-b-gray-400 pb-4 sm:flex-row">
                        <div>
                          <Link
                            className="no-underline hover:underline"
                            href={
                              `${routes.dealershipCars}/` +
                              edge?.node?._sys?.filename
                            }
                          >
                            <h3
                              data-tina-field={
                                edge?.node?.label &&
                                tinaField(edge?.node, "label")
                              }
                              className="text-2xl font-bold text-gray-800"
                            >
                              {edge?.node?.label}
                            </h3>
                          </Link>
                          {edge?.node?.tag && (
                            <Label labelText={edge?.node?.tagLabel} />
                          )}
                        </div>
                        <div>
                          {edge?.node?.info?.oldPrice && (
                            <p className="text-sm">
                              Buvo {formatPrice(edge?.node?.info?.oldPrice)} €
                            </p>
                          )}
                          <p
                            data-tina-field={
                              edge?.node?.info &&
                              tinaField(edge?.node?.info, "carPrice")
                            }
                            className=""
                          >
                            Kaina{" "}
                            <span className="text-2xl font-bold text-blue-500">
                              {formatPrice(edge?.node?.info?.carPrice)} €
                            </span>
                          </p>
                          {edge?.node?.info?.oldPrice && (
                            <p className="text-red-500">
                              Sutaupote{" "}
                              <span className="text-2xl font-bold">
                                {formatPrice(
                                  edge?.node?.info?.oldPrice -
                                    (edge?.node?.info?.carPrice || 0),
                                )}{" "}
                                €
                              </span>
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="grid grid-cols-2 ">
                          <p
                            data-tina-field={
                              edge?.node?.info &&
                              tinaField(edge?.node?.info, "model")
                            }
                            className="bg-gray-100 p-2 text-base font-bold"
                          >
                            Modelis:
                          </p>
                          <p className="bg-gray-200 p-2 text-base">
                            {edge?.node?.info?.model}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 ">
                          <p
                            data-tina-field={
                              edge?.node?.info &&
                              tinaField(edge?.node?.info, "workingVolume")
                            }
                            className="bg-gray-100 p-2 text-base font-bold"
                          >
                            Darbinis Tūris:
                          </p>
                          <p className="bg-gray-200 p-2 text-base">
                            {edge?.node?.info?.workingVolume}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 ">
                          <p
                            data-tina-field={
                              edge?.node?.info &&
                              tinaField(edge?.node?.info, "engine")
                            }
                            className="bg-gray-100 p-2 text-base font-bold"
                          >
                            Variklis:
                          </p>
                          <p className="bg-gray-200 p-2 text-base">
                            {edge?.node?.info?.engine}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 ">
                          <p
                            data-tina-field={
                              edge?.node?.info &&
                              tinaField(edge?.node?.info, "power")
                            }
                            className="bg-gray-100 p-2 text-base font-bold"
                          >
                            Galia:
                          </p>
                          <p className="bg-gray-200 p-2 text-base">
                            {edge?.node?.info?.power}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 ">
                          <p
                            data-tina-field={
                              edge?.node?.info &&
                              tinaField(edge?.node?.info, "gearbox")
                            }
                            className="bg-gray-100 p-2 text-base font-bold"
                          >
                            Transmisija:
                          </p>
                          <p className="bg-gray-200 p-2 text-base">
                            {edge?.node?.info?.gearbox}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 ">
                          <p
                            data-tina-field={
                              edge?.node?.info &&
                              tinaField(edge?.node?.info, "registerDate")
                            }
                            className="bg-gray-100 p-2 text-base font-bold"
                          >
                            Registracijos Data:
                          </p>
                          <p className="bg-gray-200 p-2 text-base">
                            {edge?.node?.info?.registerDate
                              ?.toString()
                              .slice(0, 7)}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 ">
                          <p
                            data-tina-field={
                              edge?.node?.info &&
                              tinaField(edge?.node?.info, "mileage")
                            }
                            className="bg-gray-100 p-2 text-base font-bold"
                          >
                            Rida:
                          </p>
                          <p className="bg-gray-200 p-2 text-base">
                            {edge?.node?.info?.mileage}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 ">
                          <p
                            data-tina-field={
                              edge?.node?.info &&
                              tinaField(edge?.node?.info, "fuelType")
                            }
                            className=" bg-gray-100 p-2 text-base font-bold"
                          >
                            Degalų Tipas:
                          </p>
                          <p className="bg-gray-200 p-2 text-base">
                            {edge?.node?.info?.fuelType}
                          </p>
                        </div>
                        <p className="col-span-1 text-xs sm:col-span-2">
                          Ši mašina yra{" "}
                          <span className="font-bold">
                            {edge?.node?.info?.carLocation}
                          </span>{" "}
                          salone, prašome kreiptis dėl daugiau informacijos.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-4">
                      <Link
                        target="_blank"
                        className="flex min-w-[200px] justify-center bg-black/80 py-2 text-white hover:opacity-80"
                        href={`${routes.forms}/domina/${edge?.node?._sys?.filename}`}
                      >
                        Mane Domina
                      </Link>
                      <Link
                        className="flex min-w-[200px] justify-center bg-blue-500  py-2 text-white hover:opacity-80"
                        href={
                          `${routes.dealershipCars}/` +
                          edge?.node?._sys?.filename
                        }
                      >
                        Daugiau
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}
    </>
  );
}

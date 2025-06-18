"use client";


import { AutopliusQuery } from "../../tina/__generated__/types";
import { DealershipCarConnectionQuery } from "../../tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { tinaField } from "tinacms/dist/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { validateData } from "../../utils/validateData";
import Label from "../label";
import { routes } from "../../routes/routes";
import { formatPrice } from "../../utils/formatData";
import clsx from "clsx";
import { modelOptions } from "../../tina/collections/dealershipCar";

//Returns a component that renders a list of used and new cars which you can filter and sort out
export default function MainDealershipCarPage(props: {
  data: DealershipCarConnectionQuery;
  autopliusData: AutopliusQuery;
  variables: object;
  query: string;
  filter: boolean | null;
}) {
 
 const { data } = useTina(props);
 const autopliusURL = props.autopliusData.autoplius.url ?? undefined;


 
  console.log("Data:", data);

  console.log("autopliusData:", autopliusURL);

  
  const [sortedData, setSortedData] = useState([
    ...(data?.dealershipCarConnection?.edges || []),
  ]);
  const [sortOrder, setSortOrder] = useState("price-desc");
  const [carFilter, setCarFilter] = useState<boolean | null>(props.filter);
  const [modelFilter, setModelFilter] = useState<string | null>(null);

  //Changes the sort order based on the selection
  useEffect(() => {
    let sortedCars = [...(data?.dealershipCarConnection?.edges || [])];

    if (sortOrder === "price-desc") {
      sortedCars.sort(
        (a, b) =>
          (b?.node?.info?.carPrice || 0) - (a?.node?.info?.carPrice || 0),
      );
    } else {
      sortedCars.sort(
        (a, b) =>
          (a?.node?.info?.carPrice || 0) - (b?.node?.info?.carPrice || 0),
      );
    }

    setSortedData(sortedCars);
  }, [data, sortOrder]);

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const returnTrueOrFalse = (condition) => {
    if (condition != null && condition > 0) {
      return true;
    }
    return false;
  };

  validateData(data);

  //Based on the car filter will either not return a component or return a component with text about used or new cars
  const TextComponent = () => {
    if (carFilter == null) return null;

    if (carFilter) {
      return (
        <div className="pb-8 pt-4">
          <p className="text-sm font-light text-gray-200 md:text-base">
            Nauji automobiliai yra idealūs vertinantiems modernumą, patikimumą
            ir naujas technologijas. Jie pasižymi gamintojo garantija,
            mažesnėmis emisijomis, efektyvesnėmis degalų sąnaudomis ir
            pažangiomis saugumo funkcijomis. Be to, pirkėjai gali rinktis
            individualias konfigūracijas, užtikrinančias komfortą ir
            atitinkančias jų poreikius.
          </p>
        </div>
      );
    } else {
      return (
        <div className="pb-8 pt-4">
          <p className="text-sm font-light text-gray-200 md:text-base">
            Naudoti Subaru automobiliai išsiskiria legendine visų varančiųjų ratų sistema ir ilgaamžiškumu, 
            aukšta išliekamąja verte, todėl yra idealus pasirinkimas ieškantiems kokybės už prieinamą kainą.
          </p>
        </div>
      );
    }
  };

  return (
    <main className="bg-black/80">
      <div className="flex flex-col justify-between gap-4 xl:flex-row">
        <h2 className="text-3xl font-semibold text-white">
          {clsx({
            "Nauji automobiliai salone": carFilter === true,
            "Naudoti automobiliai salone": carFilter === false,
            "Automobiliai salone": carFilter === null,
          })}
        </h2>
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex flex-row flex-wrap items-center gap-4 sm:flex-nowrap">
            <label className="font-semibold text-white">Filtrai:</label>
            <div className="flex gap-4 divide-x rounded-md bg-white p-2">
              <div className="flex items-center justify-center gap-2 px-2">
                <input
                  id="new-car-checkbox"
                  type="checkbox"
                  checked={carFilter == null ? false : carFilter}
                  onChange={() => {
                    if (carFilter) {
                      setCarFilter(null);
                    } else {
                      setCarFilter(true);
                    }
                  }}
                  className="h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                ></input>
                <label className="text-gray-700" htmlFor="new-car-checkbox">
                  Nauji
                </label>
              </div>
              <div className="flex items-center justify-center gap-2 px-2">
                <input
                  id="used-car-checkbox"
                  type="checkbox"
                  checked={carFilter == null ? false : !carFilter}
                  onChange={() => {
                    if (carFilter === false) {
                      setCarFilter(null);
                    } else {
                      setCarFilter(false);
                    }
                  }}
                  className="h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                ></input>
                <label className="text-gray-700" htmlFor="used-car-checkbox">
                  Naudoti
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
            <label className="font-semibold text-white">
              Modelis:
            </label>
            <select
              name="modelFilter"
              id="modelFilter"
              className="rounded-md border border-gray-700 bg-white p-2 text-gray-700"
              onChange={(event) => {
                setModelFilter(event?.target?.value);
              }}
            >
              <option value={""}>Visi Modeliai</option>;
              {modelOptions?.map((option, index) => {
                return (
                  <option key={index} value={option}>
                    {option?.toUpperCase()}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
            <label className="font-semibold text-white">Rikiuoti:</label>
            <select
              name="sort"
              id="sort"
              className="rounded-md border border-gray-700 bg-white p-2 text-gray-700"
              value={sortOrder}
              onChange={handleSortChange}
            >
              <option value="price-desc">Kaina (Didžiausia)</option>
              <option value="price-asc">Kaina (Mažiausia)</option>
            </select>
          </div>

	    <div className="rounded-md border border-gray-700 bg-white p-1">
		<a href={autopliusURL} target="_blank" rel="noopener noreferrer">
    		    <Image
        		src="/autoplius/logo.jpg" 
        		alt="Autoplius logo"
        		width={140} 
        		height={72}
    		    />
    		</a>        
	    </div>      

        </div>
      </div>
      <div className="my-4 border-b-4 border-b-blue-500"></div>
      <TextComponent />
      <div className="grid grid-cols-1 gap-8 3xl:grid-cols-2">
        {sortedData?.map((edge, index) => {
          if (carFilter !== null) {
            if (edge?.node?.carStatus === carFilter) {
              return null;
            }
          }

          if (modelFilter !== null && modelFilter !== "") {
            if (edge?.node?.model !== modelFilter) {
              return null;
            }
          }

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
                  className="p-4"
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
                            edge?.node?.label && tinaField(edge?.node, "label")
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
                      {returnTrueOrFalse(
                        edge?.node?.info?.oldPrice &&
                          edge?.node?.info?.oldPrice > 0 &&
                          edge?.node?.info?.oldPrice -
                            (edge?.node?.info?.carPrice || 0) >
                            0,
                      ) && (
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
                      {returnTrueOrFalse(
                        edge?.node?.info?.oldPrice &&
                          edge?.node?.info?.oldPrice > 0 &&
                          edge?.node?.info?.oldPrice -
                            (edge?.node?.info?.carPrice || 0) >
                            0,
                      ) && (
                        <p className="text-red-500">
                          Sutaupote{" "}
                          <span className="text-2xl font-bold">
                            {formatPrice(
                              (edge?.node?.info?.oldPrice || 0) -
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
                        {edge?.node?.info?.registerDate?.toString().slice(0, 7)}
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
                    <p className="col-span-1 text-base sm:col-span-2">
                      Šis automobilis yra{" "}
                      <span className="font-bold">
                        {edge?.node?.info?.carLocation}
                      </span>{" "}
                      salone, prašome kreiptis dėl daugiau informacijos.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  <Link
                    className="flex min-w-[200px] justify-center bg-black/80 py-2 text-white hover:opacity-80"
                    href={`${routes.forms}/domina/${edge?.node?._sys?.filename}`}
                  >
                    Mane Domina
                  </Link>
                  <Link
                    className="flex min-w-[200px] justify-center bg-blue-500  py-2 text-white hover:opacity-80"
                    href={
                      `${routes.dealershipCars}/` + edge?.node?._sys?.filename
                    }
                  >
                    Daugiau
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

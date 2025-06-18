"use client";

import { useState } from "react";
import SvgIcon from "./svgIcon";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { routes } from "../routes/routes";

//Car comparison component that is used in the car comparison page
export default function CarComparison({ carData }) {
  const [selectCarOneIndex, setSelectCarOneIndex] = useState(-1);
  const [selectCarTwoIndex, setSelectCarTwoIndex] = useState(-2);
  const [selectedField, setSelectedField] = useState(0);
  const [modalState, setModalState] = useState(false);

  const onClickToggleModal = () => {
    setModalState((s) => !s);
  };

  const changeSelectedCarId = (index) => {
    if (selectedField === 1) {
      setSelectCarOneIndex(index);
    } else {
      setSelectCarTwoIndex(index);
    }
  };

  return (
    <div className="">
      <div className=" py-4">
        <h4 className="text-xl font-extralight">
          Pasirinkite automobilių modelius, kuriuos norite palyginti
        </h4>
      </div>
      <div>
        <div className="flex flex-col justify-center gap-16 md:flex-row">
          <div className="w-full max-w-[640px]">
            <div
              onClick={() => {
                onClickToggleModal();
                setSelectedField(1);
              }}
              className="first-select flex basis-1/2 cursor-pointer items-center justify-between border-b border-b-gray-300 hover:opacity-80"
            >
              {carData?.edges[selectCarOneIndex]?.node?.label && (
                <h5 className="py-2 text-xl font-medium">
                  {carData?.edges[selectCarOneIndex]?.node?.label}
                </h5>
              )}
              {!carData?.edges[selectCarOneIndex]?.node?.label && (
                <h5 className="py-2 text-xl font-medium">Pasirinkite modelį</h5>
              )}
              <SvgIcon
                iconName={"arrowDown"}
                className="h-8 w-8 text-blue-500"
              ></SvgIcon>
            </div>
            <div>
              {carData?.edges[selectCarOneIndex]?.node?.mainImageUrl && (
                <Image
                  width={640}
                  height={360}
                  src={
                    carData?.edges[selectCarOneIndex]?.node?.mainImageUrl || "/"
                  }
                  alt={
                    carData?.edges[selectCarOneIndex]?.node?.mainImageAlt || "#"
                  }
                />
              )}
              <p className="text-center">
                {carData?.edges[selectCarOneIndex]?.node?.label}
              </p>
            </div>
            <div className="pt-4 text-center">
              <p className="py-2 text-sm font-light">
                Numatoma gamintojo kaina prasideda nuo: (21% PVM įskaičiuotas)
              </p>
              <p className="text-lg font-bold text-blue-500">
                {carData?.edges[selectCarOneIndex]?.node?.info?.price} €
              </p>
              <p className="py-2 text-sm font-light">
                Mašinos tipas:{" "}
                <span className="font-bold">
                  {carData?.edges[selectCarOneIndex]?.node?.info?.carType}
                </span>
              </p>
              <div className="pt-2">
                <Link
                  className="text-nowrap bg-blue-500 px-8 py-2 text-xs text-white shadow-md hover:opacity-80 sm:text-base"
                  href={`${routes.forms}/registracija-bandomajam-vaziavimui`}
                >
                  Bandomasis Važiavimas
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[640px]">
            <div
              onClick={() => {
                onClickToggleModal();
                setSelectedField(2);
              }}
              className="second-select flex basis-1/2 cursor-pointer items-center justify-between border-b border-b-gray-300 hover:opacity-80"
            >
              {carData?.edges[selectCarTwoIndex]?.node?.label && (
                <h5 className="py-2 text-xl font-medium">
                  {carData?.edges[selectCarTwoIndex]?.node?.label}
                </h5>
              )}
              {!carData?.edges[selectCarTwoIndex]?.node?.label && (
                <h5 className="py-2 text-xl font-medium">Pasirinkite modelį</h5>
              )}
              <SvgIcon
                iconName={"arrowDown"}
                className="h-8 w-8 text-blue-500"
              ></SvgIcon>
            </div>
            <div>
              {carData?.edges[selectCarTwoIndex]?.node?.mainImageUrl && (
                <Image
                  width={640}
                  height={360}
                  src={
                    carData?.edges[selectCarTwoIndex]?.node?.mainImageUrl || "/"
                  }
                  alt={carData?.edges[selectCarTwoIndex]?.node?.alt || "#"}
                />
              )}
              <p className="text-center">
                {carData?.edges[selectCarTwoIndex]?.node?.label}
              </p>
            </div>
            <div className="pt-4 text-center">
              <p className="py-2 text-sm font-light">
                Numatoma gamintojo kaina prasideda nuo: (21% PVM įskaičiuotas)
              </p>
              <p className="text-lg font-bold text-blue-500">
                {carData?.edges[selectCarTwoIndex]?.node?.info?.price} €
              </p>
              <p className="py-2 text-sm font-light">
                Mašinos tipas:{" "}
                <span className="font-bold">
                  {carData?.edges[selectCarTwoIndex]?.node?.info?.carType}
                </span>
              </p>
              <div className="pt-2">
                <Link
                  className="text-nowrap bg-blue-500 px-8 py-2 text-xs text-white shadow-md hover:opacity-80 sm:text-base"
                  href={`${routes.forms}/registracija-bandomajam-vaziavimui`}
                >
                  Bandomasis Važiavimas
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-black/80 text-center">
          <h3 className="text-semibold py-2 text-xl text-white">
            Pagrindiniai Techniniai Parametrai
          </h3>
        </div>
        <div>
          <div>
            <div className="py-4">
              <p>Matmenys</p>
              <div className="flex py-2">
                <div className="basis-1/2 border border-r-0 border-gray-400 p-2 text-center">
                  <p className="text-xs">
                    {carData?.edges[selectCarOneIndex]?.node?.info?.bodySize}
                  </p>
                </div>
                <div className="basis-1/2 border border-gray-400 p-2 text-center">
                  <p className="text-xs">
                    {carData?.edges[selectCarTwoIndex]?.node?.info?.bodySize}
                  </p>
                </div>
              </div>
            </div>
            <div className="py-4">
              <p>Variklis</p>
              <div className="flex py-2">
                <div className="basis-1/2 border border-r-0 border-gray-400 p-2 text-center">
                  <p className="text-xs">
                    {carData?.edges[selectCarOneIndex]?.node?.info?.engine}
                  </p>
                </div>
                <div className="basis-1/2 border border-gray-400 p-2 text-center">
                  <p className="text-xs">
                    {carData?.edges[selectCarTwoIndex]?.node?.info?.engine}
                  </p>
                </div>
              </div>
            </div>
            <div className="py-4">
              <p>Darbinis Tūris</p>
              <div className="flex py-2">
                <div className="basis-1/2 border border-r-0 border-gray-400 p-2 text-center">
                  <p className="text-xs">
                    {
                      carData?.edges[selectCarOneIndex]?.node?.info
                        ?.workingVolume
                    }
                  </p>
                </div>
                <div className="basis-1/2 border border-gray-400 p-2 text-center">
                  <p className="text-xs">
                    {
                      carData?.edges[selectCarTwoIndex]?.node?.info
                        ?.workingVolume
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="py-4">
              <p>Didžiausias Galingumas</p>
              <div className="flex py-2">
                <div className="basis-1/2 border border-r-0 border-gray-400 p-2 text-center">
                  <p className="text-xs">
                    {carData?.edges[selectCarOneIndex]?.node?.info?.maxPower}
                  </p>
                </div>
                <div className="basis-1/2 border border-gray-400 p-2 text-center">
                  <p className="text-xs">
                    {carData?.edges[selectCarTwoIndex]?.node?.info?.maxPower}
                  </p>
                </div>
              </div>
            </div>
            <div className="py-4">
              <p>Didžiausias Sukimo Momentas</p>
              <div className="flex py-2">
                <div className="basis-1/2 border border-r-0 border-gray-400 p-2 text-center">
                  <p className="text-xs">
                    {carData?.edges[selectCarOneIndex]?.node?.info?.maxRotation}
                  </p>
                </div>
                <div className="basis-1/2 border border-gray-400 p-2 text-center">
                  <p className="text-xs">
                    {carData?.edges[selectCarTwoIndex]?.node?.info?.maxRotation}
                  </p>
                </div>
              </div>
            </div>
            <div className="py-4">
              <p>Transmisija</p>
              <div className="flex py-2">
                <div className="basis-1/2 border border-r-0 border-gray-400 p-2 text-center">
                  <p className="text-xs">
                    {carData?.edges[selectCarOneIndex]?.node?.info?.gearbox}
                  </p>
                </div>
                <div className="basis-1/2 border border-gray-400 p-2 text-center">
                  <p className="text-xs">
                    {carData?.edges[selectCarTwoIndex]?.node?.info?.gearbox}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "fixed left-0 top-0 z-[100] h-screen w-screen overflow-y-auto bg-black/50",
          {
            hidden: !modalState,
          },
        )}
      >
        <div className="flex h-auto items-center justify-center self-center sm:h-full">
          <div className="flex flex-col bg-white">
            <div
              onClick={onClickToggleModal}
              className="cursor-pointer self-end hover:opacity-80"
            >
              <SvgIcon
                iconName="x"
                className="h-12 w-12 text-blue-500"
              ></SvgIcon>
            </div>
            <div className="grid grid-cols-2 divide-x p-4">
              {carData.edges?.map((edge, index) => {
                if (edge?.node?.delete) {
                  return null;
                }

                return (
                  <button
                    onClick={() => {
                      changeSelectedCarId(index);
                      onClickToggleModal();
                    }}
                    className="flex flex-wrap content-center justify-center gap-4 border-b py-4 hover:opacity-80 disabled:opacity-30 sm:flex-nowrap sm:gap-8 md:justify-normal"
                    key={index}
                    disabled={
                      index === selectCarOneIndex || index === selectCarTwoIndex
                    }
                  >
                    <div className="flex-start m-4 flex flex-col items-center">
                      <Image
                        width={160}
                        height={90}
                        src={edge?.node?.mainImageUrl || "/misc/default.png"}
                        alt={edge?.node?.mainImageAlt || "default img"}
                        className="z-0  mix-blend-multiply sm:mx-3"
                      />
                      <h4 className="text-xs font-semibold">
                        {edge?.node?.label}
                      </h4>
                    </div>
                    <div className="m-4 mt-4 items-center text-nowrap sm:mt-8 ">
                      <p className="mb-4 flex flex-col text-xs">
                        Mašinos tipas:{" "}
                        <span className="text-sm font-semibold">
                          {edge?.node?.info?.carType}
                        </span>
                      </p>
                      <p className="flex flex-col text-xs">
                        Kaina prasideda nuo:{" "}
                        <span className="text-2xl">
                          {edge?.node?.info?.price} €
                        </span>
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { CarConnectionQuery } from "../../tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { tinaField } from "tinacms/dist/react";
import Image from "next/image";
import PageTitle from "../pageTitle";
import Link from "next/link";
import { validateData } from "../../utils/validateData";
import { routes } from "../../routes/routes";

//Renders main car page with car list
export default function MainCarPage(props: {
  data: CarConnectionQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);

  validateData(data);

  return (
    <main className="">
      <PageTitle title="Nauji automobiliai" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-5">
        {data?.carConnection?.edges?.map((edge, index) => {
          if (edge?.node?.delete) {
            return null;
          }

          return (
            <div
              className="flex flex-wrap content-center justify-center gap-4 border-b border-r py-4"
              key={index}
            >
              <div className="flex-start m-4 flex flex-col items-center text-center">
                <Image
                  data-tina-field={
                    edge?.node && tinaField(edge?.node, "mainImageUrl")
                  }
                  width={640}
                  height={360}
                  src={edge?.node?.mainImageUrl || "/misc/default.png"}
                  alt={edge?.node?.mainImageAlt || "Main img"}
                  className="z-0 mx-1 mix-blend-multiply sm:mx-3"
                />
                <h4
                  data-tina-field={edge?.node && tinaField(edge?.node, "label")}
                  className="mb-4 text-2xl font-semibold"
                >
                  {edge?.node?.label}
                </h4>
                <p
                  data-tina-field={
                    edge?.node?.info && tinaField(edge?.node?.info, "carType")
                  }
                  className="mb-4 flex flex-col text-xs"
                >
                  Mašinos tipas:{" "}
                  <span className="text-sm font-semibold">
                    {edge?.node?.info?.carType}
                  </span>
                </p>
                <p
                  data-tina-field={
                    edge?.node?.info && tinaField(edge?.node?.info, "price")
                  }
                  className="mb-4 flex flex-col text-xl"
                >
                  Nuo {edge?.node?.info?.price} €
                </p>
                <Link
                  className="text-md bg-blue-500 px-8 py-2 font-medium text-white hover:opacity-50"
                  href={
                    edge?.node?.url ||
                    `${routes.cars}/` + edge?.node?._sys.filename
                  }
                >
                  Daugiau
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

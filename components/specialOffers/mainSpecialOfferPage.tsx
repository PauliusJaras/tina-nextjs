"use client";

import { SpecialOfferConnectionQuery } from "../../tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { tinaField } from "tinacms/dist/react";
import Image from "next/image";
import SvgIcon from "../svgIcon";
import PageTitle from "../pageTitle";
import Link from "next/link";
import { validateData } from "../../utils/validateData";
import { routes } from "../../routes/routes";

//Renders all special offers in one page
export default function MainSpecialOfferPage(props: {
  data: SpecialOfferConnectionQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);

  validateData(data);

  return (
    <main className="">
      <PageTitle title="Specialūs pasiūlymai" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-5">
        {data.specialOfferConnection.edges?.map((offer, index) => {
          return (
            <div
              className="flex flex-col justify-between border-2 border-solid border-gray-300"
              key={index}
            >
              <div className="">
                <Image
                  data-tina-field={
                    offer?.node?.cardImage &&
                    tinaField(offer?.node, "cardImage")
                  }
                  width={800}
                  height={360}
                  src={offer?.node?.cardImage || "/misc/default.png"}
                  alt={offer?.node?.title || "Card title " + index}
                ></Image>

                <div className="flex flex-col items-start gap-2 p-4">
                  <h3
                    data-tina-field={
                      offer?.node?.title && tinaField(offer?.node, "title")
                    }
                    className="text-lg font-medium"
                  >
                    {offer?.node?.title}
                  </h3>
                  <p
                    data-tina-field={
                      offer?.node?.cardText &&
                      tinaField(offer?.node, "cardText")
                    }
                    className="text-sm"
                  >
                    {offer?.node?.cardText}
                  </p>
                </div>
              </div>
              <div className="m-4 place-self-start bg-black text-sm font-bold text-white hover:opacity-50 xl:text-lg">
                <Link
                  className="flex items-center px-4 py-1 "
                  href={
                    `${routes.specialOffers}/` + offer?.node?._sys.filename ||
                    routes.specialOffers
                  }
                >
                  Daugiau
                  <SvgIcon iconName={"arrowRight"} className={"h-4 w-4"} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

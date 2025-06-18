"use client";

import SvgIcon from "./svgIcon";
import { tinaField } from "tinacms/dist/react";
import Link from "next/link";
import { routes } from "../routes/routes";

//News section component for the homepage.
export default function NewsSection({ news }) {
  return (
    <div className="my-8 flex flex-col gap-16 md:my-20 md:flex-row">
      <div className="flex flex-col justify-center gap-4 border-b border-b-black py-8 pr-0 md:border-0 md:border-r md:border-r-black md:py-16 md:pr-16">
        <h2 className="text-center text-5xl font-extralight">Naujienos</h2>
        <div className="flex justify-center bg-black px-4 py-1 text-sm font-bold text-white hover:opacity-50 xl:text-lg">
          <Link className="flex items-center" href={routes.news}>
            Visos naujienos
            <SvgIcon iconName={"arrowRight"} className={"h-4 w-4"} />
          </Link>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center">
        {news?.map((newsItem, index) => {
          return (
            <Link
              className="flex flex-col-reverse items-start gap-4 border-b border-b-gray-300 py-4 hover:opacity-80 sm:flex-row sm:items-center sm:gap-16"
              key={index}
              href={`${routes.news}/` + newsItem?.node?._sys.filename}
            >
              <h4
                data-tina-field={
                  newsItem?.node && tinaField(newsItem?.node, "date")
                }
                className="font-bold"
              >
                {newsItem?.node?.date.split("T")[0].replaceAll("-", ".")}
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
    </div>
  );
}

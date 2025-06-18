"use client";

import Image from "next/image";
import { FooterQuery } from "../tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import SvgIcon from "./svgIcon";
import Link from "next/link";

//Returns footer component with links and image
export default function Footer(props: {
  data: FooterQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);

  return (
    <footer>
      <div className="flex justify-center bg-black/90">
        <div className="flex w-full justify-center md:w-11/12">
          <div className="image-container relative mr-16 hidden w-full basis-2/5 overflow-hidden md:block">
            <Image
              data-tina-field={tinaField(data?.footer, "mainImage")}
              fill
              src={data?.footer?.mainImage || "/footerImg.jpg"}
              alt={data?.footer?.alt || "footer image"}
              className="object-cover object-bottom"
            />
          </div>
          <div className="grid grow grid-cols-1 gap-8 px-8 py-16 text-xs text-white sm:grid-cols-2 md:grid-cols-3 md:px-0 lg:gap-12">
            {data?.footer?.linkSections?.map((section, index) => {
              return (
                <div key={index}>
                  <h5
                    data-tina-field={section && tinaField(section, "header")}
                    className="pb-6"
                  >
                    {section?.header}
                  </h5>
                  <div className="border-b border-b-gray-700"></div>
                  <ul className="pt-6">
                    {section?.links?.map((link, index) => {
                      return (
                        <li
                          data-tina-field={link && tinaField(link, "label")}
                          key={index}
                          className="flex cursor-pointer content-center pb-4 hover:text-white/50"
                        >
                          {link?.sociolMediaIcon && (
                            <SvgIcon
                              iconName={link?.sociolMediaIcon}
                              className="h-7 w-7 pr-2 text-white"
                            ></SvgIcon>
                          )}
                          <Link
                            target={link?.target ? "_blank" : ""}
                            className="flex self-center"
                            href={link?.url || "/"}
                          >
                            {link?.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-black/95">
        <div className="mt-4 flex flex-col text-center text-[9px] text-white">
          <ul className="mx-5 flex flex-wrap justify-center gap-10">
            {data?.footer?.sublinkSection?.sublinks?.map((sublink, index) => {
              return (
                <li
                  data-tina-field={sublink && tinaField(sublink, "label")}
                  key={index}
                >
                  <Link
                    target={sublink?.target ? "_blank" : ""}
                    className="hover:text-white/50"
                    href={sublink?.url || "/"}
                  >
                    {sublink?.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p
            data-tina-field={tinaField(data?.footer, "copyright")}
            className="my-4 pb-20 text-gray-700 md:pb-0"
          >
            {data?.footer?.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

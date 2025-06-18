"use client";

import { useTina } from "tinacms/dist/react";
import { NewsPageQuery } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import MissingPage from "../missingPage";
import Image from "next/image";
import TinaBox from "../tinaBox";
import { routes } from "../../routes/routes";

export function SingleNewsPage(props: {
  data: NewsPageQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);

  if (!data) {
    return (
      <MissingPage title="Visos naujienos" url={routes.news}></MissingPage>
    );
  }

  const itemClasses = {
    p: "text-sm py-2",
  };

  return (
    <>
      {data?.newsPage?.headerImage && (
        <header
          data-tina-field={
            data?.newsPage?.headerImage &&
            tinaField(data?.newsPage, "headerImage")
          }
          className="flex justify-center overflow-hidden"
        >
          <div className="relative h-[50vh] max-h-[580px] w-full max-w-[1920px]">
            <Image
              fill
              src={data?.newsPage?.headerImage || "/misc/default.png"}
              alt={
                data?.newsPage?.headerImageAlt ||
                data?.newsPage?.title ||
                "header img"
              }
              className="object-cover"
            />
          </div>
        </header>
      )}

      <main className="compact-container">
        <div className="blog-header border-b border-b-gray-300">
          <h3
            data-tina-field={
              data?.newsPage && tinaField(data?.newsPage, "title")
            }
            className="py-2 text-3xl font-bold"
          >
            {data?.newsPage?.title}
          </h3>
          <h5
            data-tina-field={
              data?.newsPage && tinaField(data?.newsPage, "subtitle")
            }
            className="text-lg text-gray-700"
          >
            {data?.newsPage?.subtitle}
          </h5>
          <p
            className="py-2 font-medium"
            data-tina-field={
              data?.newsPage && tinaField(data?.newsPage, "date")
            }
          >
            {data?.newsPage?.date?.split("T")[0].replaceAll("-", ".")}
          </p>
        </div>
        <div
          data-tina-field={tinaField(data?.newsPage, "body")}
          className="blog-content"
        >
          <TinaBox
            data={data?.newsPage}
            updateItemClasses={itemClasses}
          ></TinaBox>
        </div>
      </main>
    </>
  );
}

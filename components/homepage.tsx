"use client";

import { HomepageAndNewsQuery } from "../tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import React from "react";
import MainSlider from "./mainSlider";
import CarCarousel from "./carCarousel";
import NewsSection from "./newsSection";

//Renders the homepage with different components based on the md file data
export function Homepage(props: {
  data: HomepageAndNewsQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);

  return (
    <>
      <header className="flex w-screen justify-center">
        {data.homepage?.blocks?.map((block, index) => {
          switch (block?.__typename) {
            case "HomepageBlocksMainslider": {
              if (block) {
                return (
                  <MainSlider key={index} images={block.images}></MainSlider>
                );
              }
            }
          }
        })}
      </header>
      <main className="align-center flex justify-center md:px-0">
        <div className="w-full max-w-[1980px] self-center md:w-11/12">
          {data.homepage?.blocks?.map((block, index) => {
            switch (block?.__typename) {
              case "HomepageBlocksCarousel": {
                if (block) {
                  return <CarCarousel key={index} data={block}></CarCarousel>;
                }
              }
              case "HomepageBlocksNewsSection": {
                if (block && data.newsPageConnection?.edges) {
                  return (
                    <NewsSection
                      key={index}
                      news={data.newsPageConnection.edges}
                    ></NewsSection>
                  );
                }
              }
            }
          })}
        </div>
      </main>
    </>
  );
}

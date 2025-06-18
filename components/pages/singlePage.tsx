"use client";

import { useTina } from "tinacms/dist/react";
import React from "react";
import { PageQuery } from "../../tina/__generated__/types";
import TinaBox from "../tinaBox";
import { tinaField } from "tinacms/dist/react";
import MissingPage from "../missingPage";
import Image from "next/image";
import PageTitle from "../pageTitle";
import Accordion from "../accordion";
import EmployeeContactInfo from "./employeeContactInfo";
import IntroCard from "../introCard";
import { routes } from "../../routes/routes";

export function SinglePage(props: {
  data: PageQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);

  if (!data) {
    return <MissingPage title="Puslapiai" url={routes.pages}></MissingPage>;
  }

  const itemClasses = {
    h1: "text-4xl py-6",
    h2: "text-3xl py-4",
    h3: "text-2xl py-2",
    h4: "text-xl py-2",
    h5: "text-lg py-2",
    h6: "text-base py-2",
    p: "text-sm py-2",
    a: "text-blue-500 font-semibold hover:text-black cursor-pointer",
    li: "list-disc ml-6 p-1 text-sm",
  };

  return (
    <>
      <header>
        {data.page?.blocks?.map((block, index) => {
          switch (block?.__typename) {
            case "PageBlocksHeaderImage": {
              if (block) {
                return (
                  <div
                    className="relative h-[50vh] max-h-[500px] w-full overflow-hidden"
                    data-tina-field={tinaField(block, "image")}
                    key={index}
                  >
                    <Image
                      fill
                      src={block?.image || "/misc/default.png"}
                      alt={
                        block?.imageAlt ||
                        data?.page?.pageTitle ||
                        "subaru automobiliu puslapis"
                      }
                      className={"object-cover " + block?.imagePosition}
                    ></Image>
                  </div>
                );
              }
            }
            // case "PageBlocksNavMenu": {
            //   if (block) {
            //     return (
            //       <div
            //         className="flex flex-wrap content-center justify-center gap-2 bg-black px-8 md:justify-start"
            //         key={index}
            //       >
            //         {block.links?.map((link, index) => {
            //           return (
            //             <div
            //               data-tina-field={link && tinaField(link, "url")}
            //               className={
            //                 index + 1 == block.links?.length
            //                   ? "m-2 self-center text-center "
            //                   : "md:border-1 m-2 self-center text-nowrap border-0 border-r border-white pr-4 text-center "
            //               }
            //               key={index}
            //             >
            //               <Link
            //                 className={
            //                   link?.active
            //                     ? "pointer-events-none text-sm font-bold text-blue-500"
            //                     : "text-sm text-white hover:text-blue-500"
            //                 }
            //                 href={link?.url || "/pages/"}
            //               >
            //                 {link?.label}
            //               </Link>
            //             </div>
            //           );
            //         })}
            //       </div>
            //     );
            //   }
            // }
          }
        })}
      </header>

      <main className="compact-container ">
        {data.page?.blocks?.map((block, index) => {
          switch (block?.__typename) {
            case "PageBlocksPageTitle": {
              if (block) {
                return (
                  <div key={index} data-tina-field={tinaField(block, "title")}>
                    <PageTitle title={block?.title || "Puslapis"}></PageTitle>
                  </div>
                );
              }
            }
            case "PageBlocksTextField": {
              if (block) {
                return (
                  <div
                    key={index}
                    data-tina-field={tinaField(block, "body")}
                    className="page-tina-box"
                  >
                    <TinaBox
                      data={block}
                      updateItemClasses={itemClasses}
                    ></TinaBox>
                  </div>
                );
              }
            }
            case "PageBlocksAccordion": {
              if (block) {
                return (
                  <div data-tina-field={tinaField(block, "title")} key={index}>
                    <h3 className="font-bold uppercase">{block.title}</h3>
                    {block?.list?.map((item, index) => {
                      return (
                        <div key={index}>
                          <Accordion data={item}></Accordion>
                        </div>
                      );
                    })}
                  </div>
                );
              }
            }
          }
        })}
      </main>

      <div className="flex justify-center px-8 py-4 md:px-12">
        {data.page?.blocks?.map((block, index) => {
          switch (block?.__typename) {
            case "PageBlocksEmployeeContacts": {
              if (block) {
                return (
                  <div className="py-4" key={index}>
                    <h3 className="py-2 text-2xl">Jus aptarnaus:</h3>
                    <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {block?.employees?.map((employee, index) => {
                        return (
                          <div
                            data-tina-field={
                              employee?.employee &&
                              tinaField(employee, "employee")
                            }
                            className="grid content-stretch"
                            key={index}
                          >
                            <EmployeeContactInfo
                              employee={employee?.employee}
                            ></EmployeeContactInfo>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }
            }

            case "PageBlocksIntroCards": {
              if (block) {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-3/5 pb-16">
                      <h2
                        data-tina-field={
                          block?.header && tinaField(block, "header")
                        }
                        className="pb-8 text-3xl font-bold"
                      >
                        {block?.header}
                      </h2>
                      <p
                        data-tina-field={
                          block?.text && tinaField(block, "text")
                        }
                        className="text-sm font-light text-gray-700"
                      >
                        {block?.text}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4">
                      {block?.cards?.map((card, index) => {
                        if (card) {
                          return (
                            <div
                              data-tina-field={
                                card && tinaField(card, "header")
                              }
                              key={index}
                              className="grid content-stretch"
                            >
                              <IntroCard data={card} />
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                );
              }
            }
          }
        })}
      </div>
    </>
  );
}

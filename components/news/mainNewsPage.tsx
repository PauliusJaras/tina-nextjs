"use client";

import { useTina } from "tinacms/dist/react";
import { tinaField } from "tinacms/dist/react";
import Link from "next/link";
import PageTitle from "../pageTitle";
import { validateData } from "../../utils/validateData";
import { routes } from "../../routes/routes";
import { useState } from "react";
import { NewsPageConnectionQuery } from "../../tina/__generated__/types";
import Pagination from "../pagination";

export default function MainNewsPage(props: {
  data: NewsPageConnectionQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);

  validateData(data);

  //variables that control pagination and how many items to show
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 5;
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews =
    data?.newsPageConnection?.edges?.slice(indexOfFirstNews, indexOfLastNews) ||
    [];

  //on page list number click sets different page number
  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <main className="">
      <PageTitle title="Naujienos" />
      <div>
        {currentNews?.map((edge, index) => {
          const date = edge?.node?.date?.split("T")[0].replaceAll("-", ".");

          return (
            <Link
              className="flex flex-col-reverse items-start gap-4 border-b border-b-gray-300 py-8 hover:opacity-80 sm:flex-row sm:items-center sm:gap-16"
              key={index}
              href={`${routes.news}/` + edge?.node?._sys.filename}
            >
              <h4
                data-tina-field={edge?.node && tinaField(edge?.node, "date")}
                className="font-bold"
              >
                {date}
              </h4>
              <p data-tina-field={edge?.node && tinaField(edge?.node, "title")}>
                {edge?.node?.title}
              </p>
            </Link>
          );
        })}
      </div>
      <Pagination
        itemsPerPage={newsPerPage}
        totalItems={data?.newsPageConnection?.edges?.length || 0}
        paginate={paginate}
      />
    </main>
  );
}

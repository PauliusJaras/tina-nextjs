"use client";

import { PageConnectionQuery } from "../../tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { tinaField } from "tinacms/dist/react";
import PageTitle from "../pageTitle";
import Link from "next/link";
import { validateData } from "../../utils/validateData";
import { routes } from "../../routes/routes";

export default function Pages(props: {
  data: PageConnectionQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);

  validateData(data);

  return (
    <main className="">
      <PageTitle title="Puslapiai" />
      <div className="grid grid-cols-1 gap-4">
        {data.pageConnection?.edges?.map((edge, index) => {
          return (
            <Link
              data-tina-field={edge?.node && tinaField(edge?.node, "pageTitle")}
              key={index}
              className="capitalize hover:opacity-80"
              href={
                `${routes.pages}/` + edge?.node?._sys.filename || routes.pages
              }
            >
              {edge?.node?.pageTitle}
            </Link>
          );
        })}
      </div>
    </main>
  );
}

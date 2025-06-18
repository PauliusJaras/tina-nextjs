"use client";

import { useTina } from "tinacms/dist/react";
import { CarConnectionQuery } from "../../tina/__generated__/types";
import PageTitle from "../pageTitle";
import CarComparison from "../carComparison";
import { validateCarConnection } from "../../utils/validateData";

//Renders car comparison page
export default function MainCarComparisonsPage(props: {
  data: CarConnectionQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);

  validateCarConnection(data);

  return (
    <main className="flex flex-col justify-center">
      <PageTitle title="Modelių palyginimas" />
      <CarComparison carData={data.carConnection}></CarComparison>
    </main>
  );
}

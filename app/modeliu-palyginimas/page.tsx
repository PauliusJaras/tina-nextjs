import MainCarComparisonsPage from "../../components/carComparisons/mainCarComparisonsPage";
import { client } from "../../tina/__generated__/databaseClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modelių Palyginimas",
};

//Car comparison server component that loads client component
export default async function CarComparisons() {
  const res = await client.queries.carConnection();

  return (
    <MainCarComparisonsPage
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    ></MainCarComparisonsPage>
  );
}

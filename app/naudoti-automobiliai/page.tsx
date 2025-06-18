import MainDealershipCarPage from "../../components/dealershipCars/mainDealershipCarPage";
import { client } from "../../tina/__generated__/databaseClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Naudoti automobiliai",
};

//Used car server component that loads dealership car client component with filter updated to select only used cars
export default async function DealershipCars() {
  const res = await client.queries.dealershipCarConnection();
  const res2 = await client.queries.autoplius({ relativePath: 'url.md' });

  return (
    <MainDealershipCarPage
      data={JSON.parse(JSON.stringify(res.data))}
      autopliusData= {JSON.parse(JSON.stringify(res2.data))}
      query={res.query}
      variables={res.variables}
      filter={false}
    ></MainDealershipCarPage>
  );
}

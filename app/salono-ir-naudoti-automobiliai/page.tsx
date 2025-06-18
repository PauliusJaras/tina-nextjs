import MainDealershipCarPage from "../../components/dealershipCars/mainDealershipCarPage";
import { client } from "../../tina/__generated__/databaseClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automobiliai salone",
};

//Used and new car server component that sends data to the client component
export default async function DealershipCars() {
  const res = await client.queries.dealershipCarConnection();
  const res2 = await client.queries.autoplius({ relativePath: 'url.md' });

  return (
    <MainDealershipCarPage
      data={JSON.parse(JSON.stringify(res.data))}
      autopliusData= {JSON.parse(JSON.stringify(res2.data))}
      query={res.query}
      variables={res.variables}
      filter={null}
    ></MainDealershipCarPage>
  );
}

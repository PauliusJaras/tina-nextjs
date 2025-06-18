import MainCarPage from "../../components/cars/mainCarPage";
import { client } from "../../tina/__generated__/databaseClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nauji automobiliai",
};

//Ca page server component that loads client component with data
export default async function Cars() {
  const res = await client.queries.carConnection();

  return (
    <MainCarPage
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    ></MainCarPage>
  );
}

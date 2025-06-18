import MainSpecialOfferPage from "../../components/specialOffers/mainSpecialOfferPage";
import { client } from "../../tina/__generated__/databaseClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specialūs pasiūlymai",
};

//Special offer server component that sends data to the client component
export default async function SpecialOffers() {
  const res = await client.queries.specialOfferConnection({
    sort: "order",
  });

  return (
    <MainSpecialOfferPage
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    ></MainSpecialOfferPage>
  );
}

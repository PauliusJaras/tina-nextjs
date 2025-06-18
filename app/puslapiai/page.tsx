import Pages from "../../components/pages/pages";
import { client } from "../../tina/__generated__/databaseClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Puslapiai",
};

//Pages server component that sends data to the client component
export default async function UsedCars() {
  const res = await client.queries.pageConnection();

  return (
    <Pages
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    ></Pages>
  );
}

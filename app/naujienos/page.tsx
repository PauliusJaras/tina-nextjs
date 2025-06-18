import MainNewsPage from "../../components/news/mainNewsPage";
import { client } from "../../tina/__generated__/databaseClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Naujienos",
};

//News server component that sends data to the client component
export default async function News() {
  const res = await client.queries.newsPageConnection({
    sort: "date",
    last: 50,
  });

  return (
    <MainNewsPage
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    ></MainNewsPage>
  );
}

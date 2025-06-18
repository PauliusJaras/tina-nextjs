import { Homepage } from "../components/homepage";
import { client } from "../tina/__generated__/databaseClient";

//homepage server component that renders homepage client component
export default async function Home() {
  //gets homepage and latest 5 news data
  const res = await client.queries.homepageAndNews({
    relativePath: "home.md",
    sort: "date",
    last: 5,
  });
  return (
    <Homepage
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  );
}

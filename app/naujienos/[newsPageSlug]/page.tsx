import { SingleNewsPage } from "../../../components/news/singleNewsPage";
import { client } from "../../../tina/__generated__/databaseClient";

export async function generateMetadata({ params }) {
  return {
    title:
      `Naujienos - ` +
      (params?.newsPageSlug?.charAt(0).toUpperCase() +
        params?.newsPageSlug?.slice(1)),
  };
}

export async function generateStaticParams() {
  const slugArray: string[] = [];
  try {
    const res = await client.queries.newsPageConnection();

    res?.data?.newsPageConnection?.edges?.forEach((edge) => {
      const slug = edge?.node?._sys.relativePath.split(".")[0];
      if (slug) {
        slugArray.push(slug);
      }
    });
  } catch (err) {
    console.log(err);
  }

  return slugArray.map((pageUrl) => ({
    newsPageSlug: pageUrl,
  }));
}
//Signle News server component that sends data to the client component
export default async function NewsPage({ params }) {
  const res = await client.queries.newsPage({
    relativePath: `${params.newsPageSlug}.mdx`,
  });

  return (
    <SingleNewsPage
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    ></SingleNewsPage>
  );
}

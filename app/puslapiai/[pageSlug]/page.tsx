import { SinglePage } from "../../../components/pages/singlePage";
import { client } from "../../../tina/__generated__/databaseClient";

export async function generateMetadata({ params }) {
  return {
    title:
      params?.pageSlug?.charAt(0).toUpperCase() + params?.pageSlug?.slice(1),
  };
}

export async function generateStaticParams() {
  const slugArray: string[] = [];
  try {
    const res = await client.queries.pageConnection();

    res?.data?.pageConnection?.edges?.forEach((edge) => {
      const slug = edge?.node?._sys.relativePath.split(".")[0];
      if (slug) {
        slugArray.push(slug);
      }
    });
  } catch (err) {
    console.log(err);
  }

  return slugArray.map((pageUrl) => ({
    pageSlug: pageUrl,
  }));
}
//Single page server component that sends data to the client component
export default async function Page({ params }) {
  const res = await client.queries.page({
    relativePath: `${params.pageSlug.toLowerCase()}.mdx`,
  });

  return (
    <SinglePage
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    ></SinglePage>
  );
}

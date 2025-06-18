import { SingleCarPage } from "../../../components/cars/singleCarPage";
import { client } from "../../../tina/__generated__/databaseClient";
import "./style.css";
export async function generateMetadata({ params }) {
  return {
    title:
      `Nauji Automobiliai - ` +
      (params?.carPageSlug?.charAt(0).toUpperCase() +
        params?.carPageSlug?.slice(1)),
  };
}

export async function generateStaticParams() {
  const slugArray: string[] = [];
  try {
    const res = await client.queries.carPageConnection();

    res?.data?.carPageConnection?.edges?.forEach((edge) => {
      const slug = edge?.node?._sys.relativePath.split(".")[0];
      if (slug) {
        slugArray.push(slug);
      }
    });
  } catch (err) {
    console.log(err);
  }

  return slugArray.map((pageUrl) => ({
    carPageSlug: pageUrl,
  }));
}
//Single car page server component that loads client component with data
export default async function CarPage({ params }) {
  const res = await client.queries.carPage({
    relativePath: `${params.carPageSlug.toLowerCase()}.mdx`,
  });

  return (
    <SingleCarPage
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    ></SingleCarPage>
  );
}

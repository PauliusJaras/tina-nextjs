import { SingleDealershipCarPage } from "../../../components/dealershipCars/singleDealershipCarPage";
import { client } from "../../../tina/__generated__/databaseClient";

export async function generateMetadata({ params }) {
  return {
    title:
      `Automobiliai salone - ` +
      (params?.carPageSlug?.charAt(0).toUpperCase() +
        params?.carPageSlug?.slice(1)),
  };
}

export async function generateStaticParams() {
  const slugArray: string[] = [];
  try {
    const res = await client.queries.dealershipCarConnection();

    res?.data?.dealershipCarConnection?.edges?.forEach((edge) => {
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

//Single used or new car server component that sends data to the client component
export default async function DealershipCarPage({ params }) {
  const res = await client.queries.dealershipCar({
    relativePath: `${params.carPageSlug}.md`,
  });

  return (
    <SingleDealershipCarPage
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    ></SingleDealershipCarPage>
  );
}

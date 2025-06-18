import { SingleSpecialOfferPage } from "../../../components/specialOffers/singleSpecialOfferPage";
import { client } from "../../../tina/__generated__/databaseClient";
export async function generateMetadata({ params }) {
  return {
    title:
      `Specialūs pasiūlymai - ` +
      (params?.specialOfferPageSlug?.charAt(0).toUpperCase() +
        params?.specialOfferPageSlug?.slice(1)),
  };
}

export async function generateStaticParams() {
  const slugArray: string[] = [];
  try {
    const res = await client.queries.specialOfferConnection();

    res?.data?.specialOfferConnection?.edges?.forEach((edge) => {
      const slug = edge?.node?._sys.relativePath.split(".")[0];
      if (slug) {
        slugArray.push(slug);
      }
    });
  } catch (err) {
    console.log(err);
  }

  return slugArray.map((pageUrl) => ({
    specialOfferPageSlug: pageUrl,
  }));
}
//Single Special offer server component that sends data to the client component
export default async function SpecialOfferPage({ params }) {
  const res = await client.queries.specialOfferAndDealershipCars({
    relativePath: `${params.specialOfferPageSlug.toLowerCase()}.mdx`,
  });

  return (
    <SingleSpecialOfferPage
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    ></SingleSpecialOfferPage>
  );
}

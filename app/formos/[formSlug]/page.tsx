import SingleFormPage from "../../../components/forms/singleFormPage";
import { client } from "../../../tina/__generated__/databaseClient";
export async function generateMetadata({ params }) {
  return {
    title:
      `Formos - ` +
      (params?.formSlug?.charAt(0).toUpperCase() + params?.formSlug?.slice(1)),
  };
}

export async function generateStaticParams() {
  const slugArray: string[] = [];
  try {
    const res = await client.queries.formConnection();

    res?.data?.formConnection?.edges?.forEach((edge) => {
      const slug = edge?.node?._sys.relativePath.split(".")[0];
      if (slug) {
        slugArray.push(slug);
      }
    });
  } catch (err) {
    console.log(err);
  }

  return slugArray.map((pageUrl) => ({
    formSlug: pageUrl,
  }));
}

//Single form server component that returns selected forms client component
export default async function Form({ params }) {
  const res = await client.queries.form({
    relativePath: `${params.formSlug.toLowerCase()}.mdx`,
  });

  return (
    <SingleFormPage
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    ></SingleFormPage>
  );
}

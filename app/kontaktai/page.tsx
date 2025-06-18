import MainContactsPage from "../../components/contacts/mainContactsPage";
import { client } from "../../tina/__generated__/databaseClient";
import "./contacts.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontaktai",
};

//Contact server component that loads client component
export default async function Contacts() {
  const res = await client.queries.contactsPage({
    relativePath: "Kontaktai.md",
  });

  return (
    <MainContactsPage
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    ></MainContactsPage>
  );
}

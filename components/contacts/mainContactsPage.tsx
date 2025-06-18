"use client";

import { useTina } from "tinacms/dist/react";
import { ContactsPageQuery } from "../../tina/__generated__/types";
import Map from "../map";
import InfoCard from "./infoCard";
import { tinaField } from "tinacms/dist/react";
import MiniMap from "./miniMap";
import ImageContainer from "./imageContainer";
import PageTitle from "../pageTitle";
import { validateData } from "../../utils/validateData";

//Renders contacts page
export default function MainContactsPage(props: {
  data: ContactsPageQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);

  validateData(data);

  return (
    <main className="">
      <PageTitle title="Kontaktai" />
      <div className="contact-container">
        {data.contactsPage.blocks?.map((block, index) => {
          switch (block?.__typename) {
            case "ContactsPageBlocksGoogleMaps": {
              if (block)
                return (
                  <div
                    key={index}
                    className="py-4"
                    data-tina-field={
                      block?.marker && tinaField(block?.marker, "locationTitle")
                    }
                  >
                    <Map marker={block?.marker}></Map>
                  </div>
                );
            }
            case "ContactsPageBlocksLocationCard": {
              if (block)
                return (
                  <div
                    key={index}
                    className="grid grid-cols-1 content-stretch py-4 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4"
                  >
                    {block.cards?.map((card, index) =>
                      card ? (
                        <InfoCard key={index} infoData={card}></InfoCard>
                      ) : null,
                    )}
                  </div>
                );
            }
            // case "ContactsPageBlocksMiniMap": {
            //   if (block)
            //     return (
            //       <div key={index} className="py-4 ">
            //         <MiniMap mapData={block}></MiniMap>
            //       </div>
            //     );
            // }
            // case "ContactsPageBlocksImageContainer": {
            //   if (block)
            //     return (
            //       <div key={index} className="py-4 ">
            //         <ImageContainer containerData={block}></ImageContainer>
            //       </div>
            //     );
            // }
          }
        })}
      </div>
    </main>
  );
}

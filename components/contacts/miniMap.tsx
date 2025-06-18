import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import Map from "../map";

const infoComponents = {
  InfoCardComponent: (props) => {
    return (
      <div>
        <TinaMarkdown content={props.children}></TinaMarkdown>
      </div>
    );
  },
};

export default function MiniMap({ mapData }) {
  return (
    <div
      data-tina-field={mapData && tinaField(mapData, "body")}
      className="flex flex-col gap-4 border  md:flex-row md:gap-8"
    >
      <div className="basis-full md:basis-2/5">
        <Map marker={mapData?.marker} sizeSmall></Map>
      </div>
      <div className=" flex basis-full flex-col justify-center gap-2 px-4 md:basis-3/5">
        <TinaMarkdown
          content={mapData?.body}
          components={infoComponents}
        ></TinaMarkdown>
      </div>
    </div>
  );
}

import Image from "next/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";

const infoComponents = {
  InfoCardComponent: (props) => {
    return <TinaMarkdown content={props.children}></TinaMarkdown>;
  },
};

export default function ImageContainer({ containerData }) {
  return (
    <div
      data-tina-field={containerData && tinaField(containerData, "image")}
      className="relative overflow-hidden bg-white"
    >
      <div className="relative flex justify-center">
        <div className="relative h-[50vh] max-h-[800px] w-full max-w-[1980px]">
          <Image
            fill
            src={containerData?.image || "/"}
            alt={"#"}
            className="object-cover"
          ></Image>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-center overflow-hidden bg-black/50 py-4 text-center text-white">
        <TinaMarkdown
          content={containerData?.body}
          components={infoComponents}
        ></TinaMarkdown>
      </div>
    </div>
  );
}

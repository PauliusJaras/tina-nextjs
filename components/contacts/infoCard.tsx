import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";

const infoComponents = {
  InfoCardComponent: (props) => {
    return (
      <div>
        <TinaMarkdown content={props.children}></TinaMarkdown>
      </div>
    );
  },
};

export default function InfoCard({ infoData }) {
  return (
    <div
      data-tina-field={infoData && tinaField(infoData, "label")}
      className="text-pretty border border-gray-300 p-8 text-center"
    >
      <h3 className="pb-4 text-3xl font-semibold text-gray-800">
        {infoData?.label}
      </h3>
      <TinaMarkdown
        content={infoData?.body}
        components={infoComponents}
      ></TinaMarkdown>
    </div>
  );
}

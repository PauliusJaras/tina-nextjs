import * as React from "react";
import { Html, Text } from "@react-email/components";
import { TinaMarkdown } from "tinacms/dist/rich-text";

//Email template that loops through formData and returns each objects data
export default function ResponseEmailTemplate({ replyEmailData, formData }) {
  console.log(replyEmailData.topText);

  return (
    <Html lang="en">
      {replyEmailData?.topText?.split("\n")?.map((str, index) => {
        return <Text key={index}>{str}</Text>;
      })}
      <>
        {Object.keys(formData)?.map((objectKey, index) => {
          if (objectKey === "field" || objectKey === "Forma") {
            return null;
          }
          return (
            <Text key={index}>
              {objectKey}: {formData[objectKey]}
            </Text>
          );
        })}
      </>
      {replyEmailData?.bottomText?.split("\n")?.map((str, index) => {
        return <Text key={index}>{str}</Text>;
      })}
    </Html>
  );
}

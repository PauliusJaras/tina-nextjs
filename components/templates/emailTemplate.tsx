import * as React from "react";
import { Html, Text } from "@react-email/components";

//Email template that loops through formData and returns each objects data
export default function EmailTemplate({ formData }) {
  return (
    <Html lang="en">
      <>
        {Object.keys(formData)?.map((objectKey, index) => {
          if (objectKey === "field") {
            return null;
          }
          return (
            <Text key={index}>
              {objectKey}: {formData[objectKey]}
            </Text>
          );
        })}
      </>
    </Html>
  );
}

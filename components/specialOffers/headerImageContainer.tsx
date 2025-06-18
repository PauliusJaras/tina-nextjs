"use client";

import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import { useWindowSize } from "@uidotdev/usehooks";

//Based on the width of the users screen renders different version of the header image
export default function HeaderImageContainer({ data }) {
  const windowSize = useWindowSize();

  if (windowSize.width && windowSize?.width <= 1023) {
    return (
      <header className="flex justify-center">
        <div className="">
          <Image
            data-tina-field={
              data?.specialOffer?.mainPageImage &&
              tinaField(data?.specialOffer, "mainPageImage")
            }
            width={964}
            height={1000}
            src={data?.specialOffer?.cardImage || "/misc/default.png"}
            alt={data?.specialOffer?.cardImageAlt || "header img"}
          />
        </div>
      </header>
    );
  } else {
    return (
      <header className="flex justify-center">
        <div className="relative h-[50vh] max-h-[800px] w-full max-w-[1920px] xl:h-[65vh]">
          <Image
            data-tina-field={
              data?.specialOffer?.mainPageImage &&
              tinaField(data?.specialOffer, "mainPageImage")
            }
            fill
            src={data?.specialOffer?.mainPageImage || "/misc/default.png"}
            alt={data?.specialOffer?.mainPageImageAlt || "header img"}
            className="object-cover"
          />
        </div>
      </header>
    );
  }
}

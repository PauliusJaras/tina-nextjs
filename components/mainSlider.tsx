"use client";

import { Carousel } from "@material-tailwind/react";
import { tinaField } from "tinacms/dist/react";
import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";
import Link from "next/link";

//Based on the screen width renders different version of slider with different images
export default function MainSlider({ images }) {
  const windowSize = useWindowSize();

  if (windowSize.width && windowSize?.width <= 963) {
    return (
      <Carousel className="overflow-hidden" loop={true} autoplay={true}>
        {images?.map((image, index) => {
          if (image.mobileImage) {
            return (
              <Link key={index} href={image?.url || "/"}>
                <Image
                  data-tina-field={tinaField(image, "alt")}
                  width={964}
                  height={1000}
                  src={image?.mobileImage || "/"}
                  alt={image?.mobileImageAlt || "Subaru car image"}
                />
              </Link>
            );
          }
        })}
      </Carousel>
    );
  } else {
    return (
      <Carousel
        className="max-w-[1980px] overflow-hidden [&>button]:right-2 md:[&>button]:right-10"
        loop={true}
        autoplay={true}
      >
        {images?.map((image, index) => {
          return (
            <Link
              className="hover:opacity-90"
              key={index}
              href={image?.url || "/"}
            >
              <Image
                data-tina-field={tinaField(image, "alt")}
                key={index}
                width={1980}
                height={800}
                src={image?.image || "/"}
                alt={image?.alt || "Subaru car image"}
                className="object-cover object-bottom"
              />
            </Link>
          );
        })}
      </Carousel>
    );
  }
}

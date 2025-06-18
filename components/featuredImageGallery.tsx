import React from "react";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";

//Car image gallery used to show used and new cars
export function FeaturedImageGallery({ data }) {
  const [active, setActive] = React.useState(
    data?.[0]?.url || "/misc/default.png",
  );

  return (
    <div className="grid max-w-[1280px] gap-4 pb-4">
      <div
        data-tina-field={data?.[0] && tinaField(data[0], "url")}
        className="flex overflow-hidden"
      >
        <Image
          src={active}
          alt={"Used car image"}
          width={1280}
          height={720}
          className="h-[240px] max-w-full object-cover object-center sm:h-[360px] md:h-[480px]"
        ></Image>
      </div>
      <div className="grid grid-cols-5 justify-start gap-4 sm:grid-cols-7">
        {data &&
          data.map((image, index) => (
            <div
              data-tina-field={tinaField(image, "url")}
              className="overflow-hidden"
              key={index}
            >
              <Image
                width={180}
                height={180}
                onClick={() => setActive(image.url)}
                src={image.url}
                alt={"Used car image " + index}
                className="h-10 max-w-full cursor-pointer object-cover object-center opacity-50 hover:opacity-100 sm:h-20"
              ></Image>
            </div>
          ))}
      </div>
    </div>
  );
}

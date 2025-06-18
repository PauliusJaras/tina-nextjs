"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";

//Swiper Gallery for the car pages. Allows to select category and see the selected category images
export default function SwiperGallery({ images }) {
  const [type, setType] = useState("interior");

  return (
    <div className="bg- flex flex-col items-center justify-center py-16">
      <div className="flex gap-4 pb-8">
        <p
          onClick={() => setType("interior")}
          className={clsx("cursor-pointer font-medium  text-black", {
            " text-gray-700": type !== "interior",
          })}
        >
          Interjeras
        </p>
        <p className="text-gray-700">|</p>
        <p
          onClick={() => setType("exterior")}
          className={clsx("cursor-pointer font-medium  text-black", {
            " text-gray-700": type !== "exterior",
          })}
        >
          Exterjeras
        </p>
      </div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={0}
        style={
          {
            "--swiper-navigation-size": "1rem",
            "--swiper-navigation-sides-offset": "5%",
            "--swiper-navigation-top-offset": "50%",
            "--swiper-navigation-color": "white",
            "--swiper-pagination-top": "auto",
            "--swiper-pagination-bottom": "0",
          } as any
        }
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        rewind={true}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Pagination, Navigation]}
        className={clsx("mb-8 h-full w-full")}
      >
        {images?.map((image, index) => {
          if (image.imageType === type)
            return (
              <SwiperSlide className="h-full w-full" key={index}>
                <div className="min-h-[450px]">
                  <Image
                    key={index}
                    fill
                    src={image?.url || "/"}
                    alt={image?.alt || "swipper image"}
                    className=" max-w-full object-cover"
                  />
                </div>
              </SwiperSlide>
            );
        })}
      </Swiper>
    </div>
  );
}

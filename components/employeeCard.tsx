import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import Link from "next/link";

//Returns employee card with image, text and info
export default function EmployeeCard({ seller, position = "" }) {
  if (seller) {
    return (
      <div className={"bg-black bg-opacity-80 text-white " + position}>
        {seller?.image && (
          <Image
            data-tina-field={seller && tinaField(seller, "image")}
            width={500}
            height={500}
            src={seller?.image || "/misc/default.png"}
            alt={seller?.name || "default img"}
            className="max-w-full object-cover object-top"
          ></Image>
        )}
        <div>
          <h6 className="border-b py-2 text-center text-base">
            {seller?.name}
          </h6>
          {seller.number?.map((numb, index) => {
            return (
              <Link
                href={"tel:" + numb.replace(/\s/g, "")}
                key={index}
                data-rel="external"
                className="text-white hover:text-gray-500"
              >
                <p className="p-2 text-xs">{numb}</p>
              </Link>
            );
          })}
          <Link
            href={"mailto:" + seller?.email}
            data-rel="external"
            className="text-white hover:text-gray-500"
          >
            <p className="break-words p-2 pb-4 text-xs">{seller?.email}</p>
          </Link>
        </div>
      </div>
    );
  }

  return null;
}

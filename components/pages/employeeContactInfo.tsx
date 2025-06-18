import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import Link from "next/link";

export default function EmployeeContactInfo({ employee }) {
  if (employee) {
    return (
      <div className="max-w-[500px] border">
        {employee?.image && (
          <Image
            data-tina-field={employee && tinaField(employee, "image")}
            width={500}
            height={500}
            src={employee?.image || "/misc/default.png"}
            alt={employee?.name || "default img"}
            className="max-w-full object-cover object-top"
          ></Image>
        )}
        <div className="p-2 ">
          <h6 className="py-2 text-base font-medium">{employee?.name}</h6>
          <p className="py-2">{employee.position}</p>
          <p className="py-2">{employee.department}</p>
          <div className="text- flex flex-wrap">
            <p className="py-2 text-xs">Tel.:</p>
            {employee.number?.map((numb, index) => {
              return (
                <Link
                  key={index}
                  href={"tel:" + numb.replace(/\s/g, "")}
                  data-rel="external"
                  className="font-semibold text-blue-500"
                >
                  <p className="p-2 text-xs">{numb}</p>
                </Link>
              );
            })}
          </div>
          <div className="flex">
            <p className="py-2 text-xs">Email:</p>
            <Link
              href={"mailto:" + employee?.email}
              data-rel="external"
              className="font-semibold text-blue-500"
            >
              <p className="break-words p-2 pb-4 text-xs">{employee?.email}</p>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

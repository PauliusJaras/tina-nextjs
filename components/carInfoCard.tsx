import EmployeeCard from "./employeeCard";
import { tinaField } from "tinacms/dist/react";
import Label from "./label";

//New and used Car card info with different options
export default function CardInforCard({ data }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
      <div className="basis-2/3 pb-4 lg:basis-1">
        <div className="flex flex-col gap-2 2xl:gap-4">
          <div className="pb-4">
            <h3
              data-tina-field={
                data?.car?.label && tinaField(data?.car, "label")
              }
              className="p-0 py-2 text-xl font-bold"
            >
              {data?.car?.label}
            </h3>

            {data?.car?.tag && <Label labelText={data?.car?.tagLabel} />}
          </div>
          <p
            data-tina-field={
              data?.car?.info && tinaField(data?.car?.info, "model")
            }
            className="border-t-2 border-t-gray-300 pb-1 pt-2 text-sm"
          >
            Modelis: {data?.car?.info?.model}
          </p>
          <p
            data-tina-field={
              data?.car?.info && tinaField(data?.car?.info, "workingVolume")
            }
            className="border-t-2 border-t-gray-300 pb-1 pt-2 text-sm"
          >
            Darbinis Tūris: {data?.car?.info?.workingVolume}
          </p>
          <p
            data-tina-field={
              data?.car?.info && tinaField(data?.car?.info, "engine")
            }
            className="border-t-2 border-t-gray-300 pb-1 pt-2 text-sm"
          >
            Variklis: {data?.car?.info?.engine}
          </p>
          <p
            data-tina-field={
              data?.car?.info && tinaField(data?.car?.info, "power")
            }
            className="border-t-2 border-t-gray-300 pb-1 pt-2 text-sm"
          >
            Galia: {data?.car?.info?.power}
          </p>
          <p
            data-tina-field={
              data?.car?.info && tinaField(data?.car?.info, "gearbox")
            }
            className="border-t-2 border-t-gray-300 pb-1 pt-2 text-sm"
          >
            Transmisija: {data?.car?.info?.gearbox}
          </p>
          <p
            data-tina-field={
              data?.car?.info && tinaField(data?.car?.info, "registerDate")
            }
            className="border-t-2 border-t-gray-300 pb-1 pt-2 text-sm"
          >
            Pirmoji registracija:{" "}
            {data?.car?.info?.registerDate?.toString().slice(0, 7)}
          </p>
          <p
            data-tina-field={
              data?.car?.info && tinaField(data?.car?.info, "mileage")
            }
            className="border-t-2 border-t-gray-300 pb-1 pt-2 text-sm"
          >
            Rida: {data?.car?.info?.mileage}
          </p>
          <p
            data-tina-field={
              data?.car?.info && tinaField(data?.car?.info, "fuelType")
            }
            className="border-t-2 border-t-gray-300 pb-1 pt-2 text-sm"
          >
            Degalų Tipas: {data?.car?.info?.fuelType}
          </p>
          <p
            data-tina-field={
              data?.car?.info && tinaField(data?.car?.info, "fuelType")
            }
            className="border-t-2 border-t-gray-300 pb-1 pt-2 text-sm"
          >
            Kaina: {data?.car?.info?.price}
          </p>
        </div>
      </div>
      <div className="basis-1/3 lg:basis-1">
        <EmployeeCard
          seller={data?.seller}
          position={" max-w-fit"}
        ></EmployeeCard>
      </div>
    </div>
  );
}

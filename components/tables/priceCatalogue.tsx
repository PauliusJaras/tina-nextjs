import PriceCatalogueTableBody from "./priceCatalogueTableBody";
import PriceCatalogueTableHead from "./priceCatalogueTableHead";

//Returns price catalogue used in the car pages. First renders the selected cars info.
export default function PriceCatalogue({ model }) {
  if (model == null) {
    return null;
  }
  return (
    <div className="mt-4 flex flex-col justify-center">
      <h3 className="text-nowrap bg-blue-900 py-4 text-center text-xl font-medium text-white sm:text-3xl">
        SUBARU kainynas
      </h3>
      <div className="w-[90vw] overflow-x-auto md:w-[85vw] 3xl:w-[50vw]">
        <table className="mt-4 w-full">
          <PriceCatalogueTableHead />
          {catalogueData?.map((catalogue, index) => {
            if (catalogue.model === model.split(" ")[0].toLowerCase()) {
              return (
                <PriceCatalogueTableBody
                  key={catalogue.model + index}
                  tableData={catalogue}
                />
              );
            }
          })}
          {catalogueData?.map((catalogue, index) => {
            if (catalogue.model !== model.split(" ")[0].toLowerCase()) {
              return (
                <PriceCatalogueTableBody
                  key={catalogue.model + index}
                  tableData={catalogue}
                />
              );
            }
          })}
        </table>
        <div
          id="explanations"
          className="mt-4 w-full border-t border-t-gray-300 pt-4"
        >
          <p className="mb-2 font-bold text-green-500">
            Visi SUBARU modeliai atitinka ekologijos EURO 6 emisijos standartus.
          </p>
          <p>
            * Degalų sąnaudos ir CO2 emisija pagal: EC 715/2007 - 2018/1832AP
          </p>
          <p>
            ** Kainos nurodytosais su PVM. Gamintojas pasilieka sau teisę
            keisti komplektacijas ir kainas be išankstinio įspėjimo.{" "}
          </p>
          <p>Kainos galioja nuo 2024 12 17</p>
          <p className="mt-2 font-bold">
            Automobiliams suteikiama 5 metų/100 000 km ridos garantija
          </p>
        </div>
      </div>
    </div>
  );
}

const catalogueData = [
  {
    model: "crosstrek",
    header: "CROSSTREK",
    rows: [
      [
        "Adventure",
        "benzinas / elektra",
        "100 kW",
        "7,7",
        "174",
        "33 900",
        "2 200",
        "31 700",
      ],
      ["Limited", "benzinas / elektra", "100 kW",  "7,7", "174", "35 900", "2 200", "33 700",],
      ["Touring", "benzinas / elektra", "100 kW",  "7,7", "174", "36 900", "2 200", "34 700",],
    ],
    pText: "„Metallic“ dažų danga – 500 €.",
  },
  {
    model: "solterra",
    header: "SOLTERRA",
    rows: [
      [
        "Solterra Limited",
        "elektra",
        "218(160 (AG(kW)",
        "WLTP iki 465 km",
        "0",
        "49 900",
        "6 000",
        "43 900",
      ],
      [
        "Solterra Touring",
        "elektra",
        "218(160 (AG(kW)",
        "WLTP iki 465 km",
        "0",
        "52 400",
        "6 000",
        "46 400",
      ],
      [
        "Solterra Touring +",
        "elektra",
        "218(160 (AG(kW)",
        "WLTP iki 465 km",
        "0",
        "53 400",
        "6 000",
        "47 400",
      ],
    ],
    pText:
      "„Metallic“ dažų danga – 500 €. Dviejų atspalvių kėbulas Touring/Touring+1 000 €.",
    pText2:
      "WLTP - maksimalus nuvažiuojamas atstumas vienu įkrovimu kilometrais.",
      
  },
  {
    model: "outback",
    header: "OUTBACK MY25",
    rows: [
      [
        "Adventure 2.5i",
        "benzinas",
        "124 kW",
        "7,1 - 12,2",
        "161 - 276",
        "38 990",
      ],
      [
        "Limited 2.5i",
        "benzinas",
        "124 kW",
        "7,1 - 12,2",
        "161 - 276",
        "41 490",
      ],
      [
        "Touring 2.5i ",
        "benzinas",
        "124 kW",
        "7,1 - 12,2",
        "161 - 276",
        "44 490",
      ],
      [
        "Field 2.5i",
        "benzinas",
        "124 kW",
        "7,1 - 12,2",
        "161 - 276",
        "40 990",

      ],
    ],
    pText: "„Metallic“ dažų danga – 500 €. Rudos Nappa odos sėdynės – 390 €",
  },
  {
    model: "naujasis",
    header: "FORESTER MY25",
    rows: [
      [
        "Adventure 2.0i",
        "benzinas / elektra",
        "110kW/ 12,3kW",
        "8,1",
        "183",
        "35 900",
      ],
      [
        "Limited 2.0i",
        "benzinas / elektra",
        "110kW/ 12,3kW",
        "8,1",
        "183",
        "39 900",
      ],
      [
        "Touring 2.0i",
        "benzinas / elektra",
        "110kW/ 12,3kW",
        "8,1",
        "183",
        "41 900",
      ],

    ],
    pText: "„Metallic“ dažų danga – 500 €.",
  }, 
  {
    model: "forester",
    header: "FORESTER MY24",
    rows: [
      [
        "Active 2.0i",
        "benzinas / elektra",
        "110kW/ 12,3kW",
        "6,7 - 9,5",
        "153 - 215",
        "38 400",
        "4 500",
        "33 900",
      ],
      [
        "Ridge 2.0i",
        "benzinas / elektra",
        "110kW/ 12,3kW",
        "6,7 - 9,5",
        "153 - 215",
        "40 400",
        "4 500",
        "35 900",
      ],
      
    ],
    pText: "„Metallic“ dažų danga – 500 €.",
  },
 
];

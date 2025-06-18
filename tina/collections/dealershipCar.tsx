import { Collection } from "tinacms";
import { slugify as slgf } from "transliteration";

export const modelOptions: string[] = [
  "crosstrek",
  "forester-e-boxer",
  "outback",
  "solterra",
  "xv",
  "kiti automobiliai",
];

export const DealershipCarCollection: Collection = {
  name: "dealershipCar",
  label: "Salono ir naudoti automobiliai",
  path: "content/dealershipCars",
  defaultItem: () => {
    return {
      carStatus: false,
    };
  },
  ui: {
    filename: {
      slugify: (values) => {
        return `${slgf(values?.label)}`;
      },
    },
  },
  format: "md",
  fields: [
    {
      type: "string",
      name: "label",
      label: "Label",
      description: "Automobilio pavadinimas",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "model",
      label: "Model",
      description: "Automobilio modelis",
      options: modelOptions,
    },
    {
      type: "boolean",
      name: "carStatus",
      description: "Automobilio statusas: Naujas / Naudotas",
      label: "Used car?",
    },
    {
      name: "tag",
      type: "boolean",
      label: "Tag",
      description: "Ar naudoti papildomą etiketę?",
    },
    {
      name: "tagLabel",
      type: "string",
      label: "Tag Label",
      description: "Papildoma etiketė pagal pasirinkimą",
      options: ["Parduota", "Rezervuota", "Akcija", "Naujiena", "Dovanos"],
    },
    {
      type: "image",
      name: "mainImageUrl",
      label: "Main Image",
      description: "Pagrindinė nuotrauka naudojama meniu",
    },
    {
      type: "string",
      name: "mainImageAlt",
      label: "Main Image Alt",
      description: "Pagrindinės nuotraukos alt",
    },
    {
      type: "object",
      name: "images",
      label: "Additional Images",
      description: "Papildomos nuotraukos atvaizduojamas galerijoje",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.alt };
        },
      },
      fields: [
        {
          type: "string",
          name: "alt",
          label: "Alt",
          description: "Nuotraukos alt",
        },
        {
          type: "image",
          name: "url",
          label: "Additional Image",
          description: "Nuotrauka",
        },
      ],
    },
    {
      type: "object",
      name: "info",
      label: "Car Info Details",
      description: "Automobilio duomenys",
      fields: [
        {
          type: "string",
          name: "model",
          label: "Car Model",
          description: "Automobilio modelis",
        },
        {
          type: "datetime",
          name: "registerDate",
          label: "Register Date",
          description: "Registracijos data",
        },
        {
          type: "string",
          name: "mileage",
          label: "Mileage",
          description: "Nuvažiuotas atstumas",
        },
        {
          type: "string",
          name: "engine",
          label: "Engine",
          description: "Variklis",
        },
        {
          type: "string",
          name: "fuelType",
          label: "Fuel Type",
          description: "Kuro tipas",
        },
        {
          type: "string",
          name: "gearbox",
          label: "Gearbox",
          description: "Pavarų dežė",
        },
        {
          type: "string",
          name: "vehicleBodyType",
          label: "Vehicle Body Type",
          description: "Automobilio kėbulo tipas",
        },
        {
          type: "string",
          name: "drivingWheels",
          label: "Driving Wheels",
          description: "Varomieji ratai",
        },
        { type: "string", name: "power", label: "Power", description: "Galia" },
        {
          type: "string",
          name: "workingVolume",
          label: "Working Volume",
          description: "Darbinis tūris",
        },
        {
          type: "number",
          name: "oldPrice",
          label: "Old Price",
          description: "Sena kaina",
        },
        {
          type: "number",
          name: "carPrice",
          label: "Current Price",
          description: "Dabartinė kaina",
        },
        {
          type: "string",
          name: "carLocation",
          label: "Current Car Location",
          description: "Kur randasi mašina?",
        },
      ],
    },
    {
      type: "object",
      name: "page",
      label: "Page Info",
      description: "Puslapio informacija",
      fields: [
        {
          name: "title",
          label: "Title",
          description: "Puslapio pavadinimas",
          type: "string",
          required: true,
        },
        {
          name: "seller",
          label: "Seller",
          type: "reference",
          description: "Pardavėjas",
          collections: ["employee"],
        },
        {
          type: "rich-text",
          label: "Post Body",
          name: "body",
          isBody: true,
          description: "Papildoma informacija",
        },
      ],
    },
  ],
};

import { Collection, tinaTableTemplate } from "tinacms";
import { modelOptions } from "./dealershipCar";
import { slugify as slgf } from "transliteration";

export const SpecialOfferCollection: Collection = {
  name: "specialOffer",
  label: "Specialūs pasiūlymai",
  path: "content/specialOffer",
  defaultItem: () => {
    return { date: new Date().toISOString() };
  },
  format: "mdx",
  ui: {
    router: ({ document }) => `/specialus-pasiulymai/${document._sys.filename}`,
    filename: {
      slugify: (values) => {
        return `${slgf(values?.title)}`;
      },
    },
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
      description: "Specialaus pasiūlymo pavadinimas",
      isTitle: true,
      required: true,
    },
    {
      name: "order",
      label: "Card order",
      type: "number",
      required: true,
      description: "Kortelių išdėstymo seka",
    },
    {
      name: "date",
      label: "Date",
      type: "datetime",
      required: false, // Allows the field to be nullable
      description: "Pasiūlymo sukūrimo data",
    },
    {
      name: "cardImage",
      label: "Card Image",
      description: "Kortelės paveikslėlis",
      type: "image",
    },
    {
      name: "cardImageAlt",
      label: "Card Image Alt",
      description: "Kortelės paveikslėlio alt",
      type: "string",
    },
    {
      name: "cardText",
      label: "Card Text",
      description: "Kortelės tekstas",
      type: "string",
      ui: {
        component: "textarea",
      },
    },
    {
      name: "mainPageImage",
      label: "Main Page Image",
      description: "Pagrindinis puslapio paveikslėlis",
      type: "image",
    },
    {
      name: "mainPageImageAlt",
      label: "Main Page Image Alt",
      description: "Pagrindinio puslapio paveikslėlio alt",
      type: "string",
    },
    {
      type: "rich-text",
      label: "Page Body Text",
      description: "Puslapio informacija",
      name: "body",
      isBody: true,
      templates: [
        {
          name: "VideoComponent",
          label: "Video Component",
          fields: [{ name: "id", label: "Video Id", type: "string" }],
        },
        tinaTableTemplate,
      ],
    },
    {
      type: "string",
      name: "model",
      label: "Model",
      description: "Modelis pagal kurį bus sugeneruojamas automobilių sąrašas",
      options: modelOptions,
    },
  ],
  indexes: [
    {
      name: "order-date",
      fields: [{ name: "order" }, { name: "date" }],
    },
  ],
};

//Merged with dealershipCar collection for simpler setup

import { Collection } from "tinacms";
import { slugify as slgf } from "transliteration";

export const DealershipCarPageCollection: Collection = {
  name: "dealershipCarPage",
  label: "Salono ir naudotų auto puslapiai",
  path: "content/dealershipCarPages",
  format: "mdx",
  ui: {
    router: ({ document }) =>
      `/salono-ir-naudoti-automobiliai/${document._sys.filename}`,
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
      description: "Puslapio pavadinimas",
      type: "string",
      isTitle: true,
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
      name: "car",
      label: "Car",
      type: "reference",
      description: "Automobilis",
      collections: ["dealershipCar"],
      required: true,
    },
    {
      type: "rich-text",
      label: "Post Body",
      name: "body",
      isBody: true,
      description: "Papildoma informacija",
      templates: [
        {
          name: "VideoComponent",
          label: "Video Component",
          fields: [
            {
              name: "id",
              label: "Video Id",
              type: "string",
              description: "Youtube video id",
            },
          ],
        },
      ],
    },
  ],
};

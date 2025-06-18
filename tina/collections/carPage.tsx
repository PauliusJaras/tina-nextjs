import { Collection, tinaTableTemplate } from "tinacms";
import { slugify as slgf } from "transliteration";

export const CarPageCollection: Collection = {
  name: "carPage",
  label: "Modelių puslapiai",
  path: "content/carPages",
  format: "mdx",
  ui: {
    router: ({ document }) => `/modeliai/${document._sys.filename}`,
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
      description: "Modelis",
      collections: ["car"],
      required: true,
    },
    {
      name: "subPages",
      label: "Sub Pages",
      description: "Papildomi puslapiai",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.title };
        },
      },
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
          description: "Papildomo puslapio pavadiniams",
        },
        {
          type: "rich-text",
          label: "Post Body",
          description: "Papildomo puslapio informacija",
          name: "body",
          isBody: true,
          templates: [
            {
              name: "VideoComponent",
              label: "Video Component",
              fields: [{ name: "id", label: "Video Id", type: "string" }],
            },
            tinaTableTemplate,
            {
              name: "ImageBoxComponent",
              label: "Image Box Component",
              ui: {
                itemProps: (item) => {
                  return { label: item.label };
                },
              },
              fields: [
                { name: "label", label: "Label", type: "string" },
                { name: "image", label: "Image", type: "image" },
                { name: "imageAlt", label: "Image Alt", type: "string" },
                {
                  name: "imagePosition",
                  label: "Image Position",
                  type: "string",
                  options: ["top", "bottom", "left", "right"],
                },
                {
                  name: "imageWidth",
                  label: "Image Width",
                  type: "string",
                  options: ["min", "medium", "max"],
                },
                {
                  name: "textAlignment",
                  label: "Text Alignment",
                  type: "string",
                  options: ["center", "left", "right"],
                },
                {
                  name: "textField",
                  label: "Text Field",
                  type: "rich-text",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "rich-text",
      label: "Post Body",
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
        {
          name: "ImageBoxComponent",
          label: "Image Box Component",
          fields: [
            {
              name: "label",
              label: "Label",
              type: "string",
              isTitle: true,
              required: true,
            },
            { name: "image", label: "Image", type: "image" },
            { name: "imageAlt", label: "Image Alt", type: "string" },
            {
              name: "imagePosition",
              label: "Image Position",
              type: "string",
              options: ["top", "bottom", "left", "right"],
            },
            {
              name: "imageWidth",
              label: "Image Width",
              type: "string",
              options: [
                "basis-12",
                "basis-24",
                "basis-36",
                "basis-72",
                "basis-96",
                "basis-1/6",
                "basis-2/6",
                "basis-3/6",
                "basis-4/6",
                "basis-5/6",
                "basis-full",
              ],
            },
            {
              name: "imageHeight",
              label: "Image Height",
              type: "string",
              options: ["h-96", "h-64", "h-auto"],
            },
            {
              name: "textAlignment",
              label: "Text Alignment",
              type: "string",
              options: ["center", "left", "right"],
            },
            {
              name: "textField",
              label: "Text Field",
              type: "rich-text",
            },
          ],
        },
      ],
    },
  ],
};

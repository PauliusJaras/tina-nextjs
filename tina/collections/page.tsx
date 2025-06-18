import { Collection, tinaTableTemplate } from "tinacms";
import { slugify as slgf } from "transliteration";

export const PageCollection: Collection = {
  name: "page",
  label: "Kiti puslapiai",
  path: "content/pages",
  format: "mdx",
  ui: {
    router: ({ document }) => `/puslapiai/${document._sys.filename}`,
    filename: {
      slugify: (values) => {
        return `${slgf(values?.pageTitle)}`;
      },
    },
  },
  defaultItem: () => {
    return {
      imageHeight: "h-auto",
    };
  },
  fields: [
    {
      name: "pageTitle",
      label: "Title",
      description: "Puslapio pavadinimas",
      type: "string",
    },
    {
      name: "description",
      label: "Navbar Description",
      description:
        "Meniu juostos aprašymas. Nebūtina pildyti jeigu nenaudojamas pagrindiniame meniu.",
      type: "string",
    },
    {
      name: "navbarImage",
      label: "Navbar Image",
      description:
        "Meniu juostoje naudojamas paveikslėlis. Nebūtina pildyti jeigu nenaudojamas pagrindiniame meniu.",
      type: "image",
    },
    {
      name: "navbarImageAlt",
      label: "Navbar Image Alt",
      description:
        "Meniu juostoje naudojamo paveikslėlio alt. Nebūtina pildyti jeigu nenaudojamas pagrindiniame meniu.",
      type: "string",
    },
    {
      name: "blocks",
      label: "Block",
      description: "Blokai",
      type: "object",
      list: true,
      templates: [
        {
          name: "headerImage",
          label: "Pagrindinis paveikslėlis",
          fields: [
            {
              name: "image",
              type: "image",
              label: "Image",
              description: "Paveikslėlis",
            },
            {
              name: "imageAlt",
              type: "string",
              label: "Image Alt",
              description: "Paveikslėlio alt",
            },
            {
              name: "imagePosition",
              type: "string",
              label: "Image Position",
              description: "Paveikslėlio pozicija",
              options: ["object-bottom", "object-center", "object-top"],
            },
          ],
        },
        {
          name: "navMenu",
          label: "Papildoma meniu juosta",
          fields: [
            {
              name: "links",
              type: "object",
              label: "Links",
              description: "Nuorodos",
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: item.label };
                },
              },
              fields: [
                {
                  name: "url",
                  label: "Url",
                  type: "string",
                  description: "Nuorodos url",
                },
                {
                  name: "label",
                  label: "Label",
                  type: "string",
                  description: "Pavadinimas",
                },
                {
                  name: "active",
                  label: "Active Link?",
                  type: "boolean",
                  description: "Ar nuoroda priklauso šiam puslapiui?",
                },
              ],
            },
          ],
        },
        {
          name: "introCards",
          label: "Informacinės kortelės",
          fields: [
            {
              name: "header",
              label: "Block Header",
              type: "string",
              description: "Bloko antraštė",
            },
            {
              name: "text",
              label: "Block Text",
              description: "Bloko tekstas",
              type: "string",
              ui: {
                component: "textarea",
              },
            },
            {
              name: "cards",
              label: "Cards",
              description: "Kortelės",
              type: "object",
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: item.header };
                },
              },
              fields: [
                {
                  name: "header",
                  label: "Card Header",
                  type: "string",
                  description: "Kortelės antraštė",
                },
                {
                  name: "icon",
                  label: "Icon",
                  type: "string",
                  description: "Ikona pagal pasirinkimą",
                  options: ["Shield", "Hands", "Client", "Idea"],
                },
                {
                  name: "text",
                  label: "Card Text",
                  description: "Kortelės tekstas",
                  type: "string",
                  ui: {
                    component: "textarea",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "pageTitle",
          label: "Puslapio titulinis",
          fields: [{ name: "title", type: "string", label: "Title" }],
        },
        {
          name: "textField",
          label: "Informacinis blokas",
          fields: [
            {
              name: "body",
              label: "text body",
              description: "Informacinis blokas",
              type: "rich-text",
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
                      description: "Paveikslėlio plotis. Default 100%",
                    },
                    {
                      name: "imageHeight",
                      label: "Image Height",
                      type: "string",
                      description: "Paveikslėlio aukštis. Default 100%",
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
          name: "accordion",
          label: "Išsiskleidžiantys elementai",
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
              description: "Pavadinimas",
            },
            {
              name: "list",
              label: "List",
              type: "object",
              description: "Elementai",
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: item.question };
                },
              },
              fields: [
                {
                  name: "question",
                  label: "Question",
                  type: "string",
                  description: "Klausimas",
                },
                {
                  name: "answer",
                  label: "Answer",
                  type: "string",
                  description: "Atsakymas",
                },
              ],
            },
          ],
        },
        {
          name: "employeeContacts",
          label: "Darbuotojų/įmonės kontaktai",
          fields: [
            {
              name: "employees",
              label: "Employees",
              description: "Darbuotojai",
              type: "object",
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: item.employee };
                },
              },
              fields: [
                {
                  name: "employee",
                  label: "Employee",
                  description: "Darbuotojas",
                  type: "reference",
                  collections: ["employee"],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

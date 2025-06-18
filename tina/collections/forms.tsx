import { Collection } from "tinacms";
import { slugify as slgf } from "transliteration";

export const FormCollection: Collection = {
  name: "form",
  label: "Formos",
  path: "content/forms",
  format: "mdx",
  ui: {
    router: ({ document }) => `/formos/${document._sys.filename}`,
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
      description: "Formos pavadinimas",
      isTitle: true,
      required: true,
    },
    {
      name: "img",
      label: "Image",
      description: "Formos nuotrauka",
      type: "image",
      required: true,
    },
    {
      name: "imgAlt",
      label: "Image Alt",
      description: "Formos nuotraukos alt",
      type: "string",
    },
    {
      name: "body",
      label: "Text Body",
      description: "Papildoma tekstinė informacija",
      type: "rich-text",
    },
    {
      name: "form",
      label: "Form",
      description: "Forma",
      type: "object",
      fields: [
        {
          name: "fields",
          label: "Fields",
          description: "Formos laukai",
          type: "object",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item.name };
            },
          },
          fields: [
            {
              name: "name",
              label: "Field Name",
              description: "Laukelio pavadinimas",
              type: "string",
              required: true,
            },
            {
              name: "label",
              label: "Field Label",
              description:
                "Laukelio etiketės pavadinimas. Galima palikti tusčią.",
              type: "string",
            },
            {
              name: "type",
              label: "Field Type",
              type: "string",
              description: "Laukelio informacijos surinkimo tipas",
              required: true,
              options: [
                "text",
                "tel",
                "number",
                "email",
                "checkbox",
                "date",
                "time",
                "textarea",
                "select",
              ],
            },
            {
              name: "customValidity",
              label: "Custom Validity Message",
              description: "Laukelio validacijos žinutė",
              type: "string",
            },
            {
              name: "options",
              label: "Select Options",
              description:
                "Select laukelio pasirinkimai. Pildyti tik select tipo laukeliui.",
              type: "object",
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: item.label };
                },
              },
              fields: [
                {
                  name: "label",
                  label: "label",
                  description: "Pasirinkimo pavadinimas",
                  type: "string",
                },
                {
                  name: "option",
                  type: "string",
                  label: "Option Value",
                  description: "Pasirinkimo reikšmė",
                },
              ],
            },
            {
              name: "required",
              label: "Required",
              type: "boolean",
              description: "Ar būtina užpildyti laukelį?",
            },
            {
              name: "placeholder",
              label: "Field Placeholder Text",
              type: "string",
              description: "Laukelio užvedamasis tekstas",
            },
            {
              name: "pattern",
              label: "Validation Pattern",
              type: "string",
              description: "Laukelio validacija naudojant regular expressions",
            },
            {
              name: "min",
              label: "Min",
              type: "string",
              description: "Vertė turi būti didesne arba lygi",
            },
            {
              name: "max",
              label: "Max",
              type: "string",
              description: "Vertė turi mažesnė arba lygi",
            },
            {
              name: "step",
              label: "Step",
              type: "string",
              description: "Intervalas tarp numerių",
            },
            {
              name: "minlength",
              label: "Min Length",
              type: "number",
              description: "Privalomas kiekis simbolių",
            },
            {
              name: "maxLength",
              label: "Max Length",
              type: "number",
              description: "Maksimalus kiekis simbolių",
            },
          ],
        },
        {
          name: "warningText",
          label: "Warning Text",
          description: "Įspėjamasis tekstas",
          type: "string",
          ui: {
            component: "textarea",
          },
        },
        {
          name: "buttonText",
          label: "Button Text",
          description: "Mygtuko nuorodos tekstas",
          type: "string",
        },
      ],
    },
    {
      name: "emailDetails",
      label: "Email Details",
      description: "El. pašto informacija",
      type: "object",
      fields: [
        {
          name: "subject",
          label: "Email Subject",
          description: "El. pašto tema",
          type: "string",
        },
        {
          name: "completionMessage",
          label: "Completion Message",
          description: "Formos sėkmingo užpildymo ir išsiuntimo žinutė",
          type: "object",
          fields: [
            {
              name: "header",
              label: "Header Text",
              type: "string",
              description: "Default: Žinutė išsiųsta",
            },
            {
              name: "message",
              label: "Message Text",
              type: "string",
              description:
                "Default: Ačiū, kad naudojates JMA Centras paslaugomis...",
            },
            {
              name: "button",
              label: "Button Text",
              type: "string",
              description: "Default: Atgal",
            },
            {
              name: "url",
              label: "Redirect Url",
              type: "string",
              description: "Default: /",
            },
          ],
        },
        {
          name: "replyEmailMessage",
          label: "Reply Email Message",
          type: "object",
          description: "Atsakymo laiškas vartotojui, kuris užpildo formą",
          fields: [
            {
              type: "string",
              name: "topText",
              ui: {
                component: "textarea",
              },
              label: "Top Text",
              description:
                "Laiško viršuje atvaizduojama žinutė. Pvz.: Jūsų žinutė užregistruota",
            },
            {
              type: "string",
              ui: {
                component: "textarea",
              },
              name: "bottomText",
              label: "Bottom Text",
              description:
                "Laiško apačioje atvaizduojama žinutė. Pvz.: Kontaktai",
            },
          ],
        },
        {
          name: "cc",
          label: "CC List",
          description:
            "CC sąrašas kuris taip pat gaus laišką su duomenimis po sėkmingo formos užpildymo",
          type: "string",
          list: true,
        },
      ],
    },
  ],
};

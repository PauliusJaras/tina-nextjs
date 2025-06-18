import { Collection } from "tinacms";
import React from "react";
import { slugify as slgf } from "transliteration";

const generateUUID = () => {
  let uuid = crypto.randomUUID();
  return uuid;
};

export const CarCollection: Collection = {
  name: "car",
  label: "Modeliai",
  path: "content/cars",
  format: "md",
  defaultItem: () => {
    return { carId: generateUUID() };
  },
  ui: {
    filename: {
      slugify: (values) => {
        return `${slgf(values?.label)}`;
      },
    },
  },
  fields: [
    {
      type: "string",
      name: "label",
      label: "Label",
      description: "Modelio pavadinimas",
      isTitle: true,
      required: true,
    },
    {
      type: "object",
      name: "info",
      label: "Car Info Details",
      description: "Automobilio duomenys",
      fields: [
        {
          type: "string",
          name: "carType",
          label: "Car Type",
          description: "Hybrid, diesel, t.t.",
        },
        {
          type: "string",
          name: "price",
          label: "Price",
          description: "Kainą prasideda nuo",
        },
        {
          type: "string",
          name: "bodySize",
          label: "Body Size",
          description: "Matmenys ir masė",
        },
        {
          type: "string",
          name: "engine",
          label: "Engine",
          description: "Variklis",
        },
        {
          type: "string",
          name: "workingVolume",
          label: "Working Volume",
          description: "Darbinis tūris",
        },
        {
          type: "string",
          name: "maxPower",
          label: "Max Power",
          description: "Didžiausias galingumas",
        },
        {
          type: "string",
          name: "maxRotation",
          label: "Max Rotation",
          description: "Didžiausias sukimo momentas",
        },
        {
          type: "string",
          name: "gearbox",
          label: "Gearbox",
          description: "Pavarų dežė",
        },
      ],
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
      description: "Papildoma etiketę pvz.: Nauja",
    },
    {
      type: "string",
      name: "url",
      label: "Car Page Url",
      description: "Nurodyti modelio puslapio url arba palikti tusčią",
    },
    {
      type: "string",
      name: "subTags",
      label: "Sub Tags",
      description: "Priklauso prie?",
      list: true,
      options: ["SUV", "EV", "ICE"],
    },
    {
      type: "image",
      name: "mainImageUrl",
      label: "Main Image",
      description: "Pagrindinė nuotrauka atvaizduojama menu ir karuselėje",
    },
    {
      type: "string",
      name: "mainImageAlt",
      label: "Main Image Alt",
      description: "Pagrindinės nuotraukos alt",
    },
    {
      type: "image",
      name: "headerImageUrl",
      label: "Header Image",
      description:
        "Pagrindinė viršelio nuotrauka atvaizduojama modelio puslapyje",
    },
    {
      type: "string",
      name: "headerImageAlt",
      label: "Header Image Alt",
      description: "Pagrindinės viršelios nuotraukos alt",
    },
    {
      type: "reference",
      name: "category",
      label: "Category",
      description: "Modelių karuselės kategorija",
      collections: ["category"],
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
        {
          type: "string",
          name: "imageType",
          label: "Image Type",
          description:
            "Pasirinkti kuriai kategorijai priklauso: interjeras arba eksterjeras",
          options: ["interior", "exterior"],
        },
      ],
    },
    {
      type: "object",
      name: "documents",
      label: "Documents",
      description: "Papildomi dokumentai",
      fields: [
        { name: "doc1", type: "string", label: "Doc 1 Url", required: true },
        { name: "doc1Title", type: "string", label: "Doc 1 Title" },
        { name: "doc2", type: "string", label: "Doc 2 Url" },
        { name: "doc2Title", type: "string", label: "Doc 2 Title" },
        { name: "doc3", type: "string", label: "Doc 3 Url" },
        { name: "doc3Title", type: "string", label: "Doc 3 Title" },
        { name: "doc4", type: "string", label: "Doc 4 Url" },
        { name: "doc4Title", type: "string", label: "Doc 4 Title" },
      ],
    },
    {
      type: "boolean",
      name: "showDocuments",
      label: "Document Icons",
      description: "Ar rodyti papildomus dokumentus?",
    },
    {
      type: "object",
      name: "mainButton",
      label: "Main Button",
      description:
        "Tekstas rodomas ant pagrindinio mygtuko nuotraukų karuselėje",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "url", label: "Url" },
      ],
    },
    {
      type: "boolean",
      name: "delete",
      label: "Remove item",
      description: "Ar norite išiimti modelį iš pasirinkimų meniu?",
    },
  ],
};

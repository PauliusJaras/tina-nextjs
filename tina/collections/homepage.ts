import { Collection } from "tinacms";
import { slugify as slgf } from "transliteration";

export const HomepageCollection: Collection = {
  name: "homepage",
  label: "Pagrindinis puslapis",
  path: "content/homepages",
  format: "md",
  ui: {
    router: () => "/",
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
      description: "Pavadinimas",
      type: 'string'
    },
    {
      name: "blocks",
      label: "Blocks",
      type: "object",
      description: "Puslapio blokai",
      list: true,
      templates: [
        {
          name: 'carousel',
          label: 'Modelių karuselė',
          fields: [
            {
              name: 'header',
              label: 'Header',
              description: "Viršutinis meniu",
              type: 'string'
            },
            {name: 'showHeader', label: 'Show Header?', type:'boolean', description: "Ar rodyti viršutinį meniu"},
            {
              name: 'categories',
              label: 'Categories',
              description: "Kategorijos",
              type: 'object',
              list: true,
              ui: {
                itemProps: (item) => {
                  return {label: item.label}
                }
              },
              fields: [
                {type: 'reference', name: 'category', label: 'Category', description: "Pasirinkite kategoriją", collections: ['category']},
                {type: 'string', name: 'label', label: 'Label', description: "Kategorijos pavadinimas"},
              ]
            },
            {
              name: 'buttons',
              label: "Buttons",
              description: "Mygtukai",
              type: 'object',
              list: true,
              ui: {
                itemProps: (item) => {
                  return {label: item.label}
                }
              },
              fields: [
                {type: 'string', name: 'url', label: 'Url'},
                {type: 'string', name: 'label', label: 'Label', description: "Pavadinimas"},
              ]
            },
            {
              name: 'cars',
              label: 'Cars',
              type: 'object',
              description: "Modeliai",
              list: true,
              ui: {
                itemProps: (item) => {
                  return {label: item.label}
                }
              },
              fields: [
                  {type: 'reference', name: 'car', label: 'Car', description: "Pasirinkite modelį", collections: ['car']},
                  {type: 'string', name: 'label', label: 'Label', description: "Pavadinimas"},
                
              ]
            },
            {
              type: 'string',
              name: 'sliderHeader',
              label: 'Slider Header'
            }
          ]
        },
        {
          name: 'mainslider',
          label: 'Pagrindinis nuotraukų slideris',
          fields: [
            {name: 'images', label: 'Images', type: 'object', list: true, description: "Nuotraukos", 
            ui: {
              itemProps: (item) => {
                return {label: item.alt}
              }
              },
            fields: [
              {name: 'image', label: 'Image', type: 'image', description: "Nuotrauka"},
              {name: 'alt', label: 'Image Alt', type: 'string', description: "Nuotraukos alt"},
              {name: 'mobileImage', label: 'Mobile Version Image', type: 'image', description: "Mobilios versijos nuotrauka"},
              {name: 'mobileImagealt', label: 'Mobile Image Alt', type: 'string', description: "Mobilios versijos nuotraukos alt"},
              {name: 'url', label: 'Url', type: 'string', description: "Url kur nuotrauka nuveda kai ant jos paspaudi"}
            ]}
          ]
        },
        {
          name: 'newsSection',
          label: 'Naujienų blokas',
          fields: [
            {name: 'title', label: 'title', type: 'string', description: "Pavadinimas"}
          ]
        }
      ]
    },
  ]
};

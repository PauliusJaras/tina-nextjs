import { Collection } from "tinacms";
import { slugify as slgf } from "transliteration";

export const ContactsPageCollection: Collection = {
  name: "contactsPage",
  label: "Kontaktai",
  path: "content/contacts",
  format: "md",
  ui: {
		allowedActions: {
			create: false,
			delete: false,
		},
		global: true,
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
        isTitle: true,
        required: true,
    },
	{
		name: 'blocks',
		label: 'Blocks',
		type: 'object',
		list: true,
		templates: [
      {
        name: 'googleMaps',
        label: 'Google žemėlapis',
        fields: [
          {
            name: 'marker',
            label: 'Vietovė',
            type: 'object',
            fields: [
              {name: 'lat', label: 'Latitude', type: 'string', required: true, description: "Platuma. Reikalinga žemėlapio konfiguravimui."},
              {name: 'lng', label: 'Longitude', type: 'string', required: true, description: "Ilguma. Reikalinga žemėlapio konfiguravimui."},
              {name: 'markerImg', label: 'Marker Image', type: 'image', description: "Nuorodos ikona"},
              {name: 'locationTitle', label: 'Location Title', type: 'string', description: "Vietovės pavadinimas"},
              {name: 'street', label: 'Street Address', type: 'string', description: "Vietovės adresas"},
              {name: 'workTime', label: 'Work Time', type: 'string', description: "Darbo laikas"},

            ]
          }
        ]
      },
      {
        name: 'locationCard',
        label: 'Adresų kortelės',
        fields: [
          {
            name: 'cards',
            label: 'Cards',
            description: "Kortelės",
            type: 'object',
            list: true,
            ui: {
              itemProps: (item) => {
                return {label: item.label}
              }
            },
            fields: [
              {name: 'label', label: 'Label', type: 'string', description: "Pavadinimas"},
              {name: 'body', label: 'Info Body', type: 'rich-text', isBody: true, description: "Likusi informacija"},
            ]
          }
        ]
      },
      {
        name: 'miniMap',
        label: 'Mini Map',
        fields: [
          {
            name: 'marker',
            label: 'Marker',
            type: 'object',
            fields: [
              {name: 'lat', label: 'Latitude', type: 'string', required: true},
              {name: 'lng', label: 'Longitude', type: 'string', required: true},
              {name: 'markerImg', label: 'Marker Image', type: 'image'},
              {name: 'locationTitle', label: 'Location Title', type: 'string'},
              {name: 'street', label: 'Street Address', type: 'string'},
              {name: 'workTime', label: 'Work Time', type: 'string'},

            ]
          },
          {
            name: 'body',
            label: 'Text Body',
            type: 'rich-text',
            isBody: true
          }
        ]
      },
      {
        name: 'imageContainer',
        label: 'Image Container',
        fields: [
          {
            name: 'image',
            label: 'Image',
            type: 'image',
          },
          {
            name: 'body',
            label: 'Text Body',
            type: 'rich-text',
            isBody: true
          }
        ]
      },
    ]
	}
  ],
};

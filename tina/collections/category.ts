import { Collection } from "tinacms";
import { slugify as slgf } from "transliteration";

export const CategoryCollection: Collection = {
  name: "category",
  label: "Kategorijos",
  path: "content/categories",
  format: "md",
  ui: {
    filename: {
      slugify: (values) => {
        return `${slgf(values?.label)}`;
      },
    },
  },
  fields: [
    {
      name: "label",
      label: "Label",
      description: "Kategorijos pavadinimas",
      type: "string",
	  isTitle: true,
	  required: true,
    },
	{
		name: "style",
		label: "Style",
		type: "string",
    description: "Stilius",
		options: ['active', 'simple', 'divided', 'divided active']
	},
  {
    name: 'filter',
    label: 'Filter All?',
    type: 'boolean',
    description: 'Aktyvuoti jeigu norite, kad filtruotu visus objektus'
  }
  ],
};

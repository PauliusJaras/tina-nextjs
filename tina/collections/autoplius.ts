import { Collection } from "tinacms";
import { slugify as slgf } from "transliteration";

export const AutopliusCollection: Collection = {
  name: "autoplius",
  label: "Autoplius",
  path: "content/autoplius",
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
      name: "url",
      label: "Url",
      description: "Nuoroda",
      type: 'string'
    },    
  ]
};

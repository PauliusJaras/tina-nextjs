import { Collection } from "tinacms";
import { slugify as slgf } from "transliteration";

export const NewsPageCollection: Collection = {
  name: "newsPage",
  label: "Naujienos",
  path: "content/news",
  format: "mdx",
  defaultItem: () => {
    return { date: new Date().toISOString()};
  },
  ui: {
    router: ({ document }) => `/naujienos/${document._sys.filename}`,
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
        type: "string",
        isTitle: true,
        required: true,
    },
    {
      name: "subtitle",
      label: "Subtitle",
      description: "Paantraštė",
      type: "string",
    },
    {
      name: "headerImage",
      label: 'Header Image',
      description: "Pagrindinis paveikslėlis",
      type: 'image'
    },
    {
      name: "headerImageAlt",
      label: 'Header Image Alt',
      description: "Pagrindinio paveikslėlio alt",
      type: 'string'
    },
    {
      name: 'date',
      label: 'Release Date',
      description: "Straipsnio/naujienos data",
      type: 'datetime',
      ui: {
        //@ts-ignore
        utc: true,
      },
    },
    {
      type: 'rich-text',
      label: 'Post Body',
      description:"Informacijos blokas",
      name: 'body',
      isBody: true,
      templates: 
      [
        {
          name: 'AuthorComponent',
          label: 'Author Component',
          fields: [
            {
              name: 'name',
              label: 'Author Name',
              type: 'string',
            },
            {
              name: 'image',
              label: 'Author Image',
              type: 'image',
            },
          ]
        },
        {
          name: 'VideoComponent',
          label: 'Video Component',
          fields: [
            {name: 'id', label: 'Video Id', type: 'string'}
          ]
        }
      ],
    },
  ],
};

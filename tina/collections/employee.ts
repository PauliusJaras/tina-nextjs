import { Collection } from "tinacms";
import { slugify as slgf } from "transliteration";

export const EmployeeCollection: Collection = {
  name: "employee",
  label: "Darbuotojai",
  path: "content/employees",
  format: "md",
  ui: {
    filename: {
      slugify: (values) => {
        return `${slgf(values?.name)}`;
      },
    },
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "string",
	  description: "Darbuotojo vardas ir pavardė",
	  isTitle: true,
	  required: true,
    },
	{
		name: "position",
		label: "Position",
		description: "Pozicija pvz.: pardavėjas, skyriaus vadovas",
		type: "string",
	},
	{
		name: "department",
		label: "Department",
		description: "Skyrius pvz.: pardavimai, servisas",
		type: "string",
	},
	{ 
		name: "number", 
		label: "Phone Number", 
		description: "Tel. numeris",
		type: "string", 
		list: true 
	},
	{ 
		name: "email", 
		label: "Email", 
		description: "El. paštas",
		type: "string" 
	},
	{ 
		name: "image", 
		label: "Employee Image", 
		description: "Darbuotojo nuotrauka",
		type: "image" 
	},
  ],
};

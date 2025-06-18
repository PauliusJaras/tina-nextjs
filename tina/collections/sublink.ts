import { Collection } from "tinacms";
import { slugify as slgf } from "transliteration";

export const SublinkCollection: Collection = {
	name: "sublink",
	label: "Papildomi meniu pasirinkimai",
	path: "content/sublinks",
	format: "md",
	ui: {
		filename: {
			  slugify: (values) => {
				return `${slgf(values?.header)}`;
			  },
			},
	  },
	fields: [
		{name: 'header', label: 'Header', type: 'string', isTitle: true, required: true},

		{
			name: 'cars',
			label: 'Cars',
			type: 'object',
			list: true,
			ui: {
			  itemProps: (item) => {
				return {label: item.label}
			  }
			},
			fields: [
				{type: 'reference', name: 'car', label: 'Car', collections: ['car', 'dealershipCar']},
				{type: 'string', name: 'label', label: 'Label'},	  
			]
		  },
		  {type: 'string', name: 'renderComponent', label: 'Component To Render', description: 'Choose which component to render', options: ['Car Component', 'News Component', 'Basic Component'] },
		  {type: 'object', name: 'redirectButton', label: 'Redirect Button', fields: [
			{type: 'string', name: 'label', label: 'Label'},
			{type: 'string', name: 'url', label: 'Url'},
			{type: 'boolean', name: 'status', label: 'Off/On'},
		  ]}		
	]
}
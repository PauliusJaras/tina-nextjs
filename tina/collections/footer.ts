import { Collection } from "tinacms";

export const FooterCollection: Collection = {
	name: 'footer',
	label: 'Puslapio poraštė',
	path: 'content/footer',
	format: 'md',
	ui: {
		allowedActions: {
			create: false,
			delete: false,
		},
		global: true
	  },

	fields: [
		{type: 'image', name: 'mainImage', label: 'Main Image', description: "Pagrindinė nuotrauka"},
		{type: 'string', name: 'alt', label: 'Main Image Alt', description: "Pagrindinės nuotraukos alt"},
		{
			name: 'linkSections',
			label: 'Link Sections',
			description: "Nuorodų juosta",
			type: 'object',
			list: true,
			ui: {
				itemProps: (item) => {
				  return {label: item.header}
				},
			},
			fields: [
			  {name: 'header', label: 'Header', type: 'string', description: "Juostos pavadinimas"},
			  {
				name: 'links', label: 'Links', type: 'object', description: "Juostos nuorodos", list: true,
				ui: {
					itemProps: (item) => {
					  return {label: item.label}
					},
				},
				fields: [
					{name: 'label', label: 'Label', type: 'string', description: "Nuorodos pavadinimas"},
					{name: 'url', label: 'url', type: 'string', description: "Nuorodos url"},
					{description: "Soc. tinklų ikona", name: 'sociolMediaIcon', label: 'Social Media Icon', type: 'string', options: ['facebook', 'twitter', 'instagram', 'linkedin', 'youtube', 'tik tok']},
					{name: 'target', label: 'Open In New Window?', type: 'boolean', description: "Ar atidaryti nuoroda naujame naršyklės lauke?"},
				]
			  }
			]
		},
		{
			name: 'sublinkSection', label: 'Sublink Section', description: "Papildoma nuorodų juosta", type: 'object', fields: [
				{name: 'sublinks', label: 'Sublinks', description: "Nuorodos", type: 'object',list: true, 
				ui: {
					itemProps: (item) => {
					  return {label: item.label}
					},
				},
				fields: [
					{name: 'label', label: 'Label', type: 'string', description: "Nuorodos pavadinimas"},
					{name: 'url', label: 'Url', type: 'string', description: "Nuorodos url"},
					{name: 'target', label: 'Open In New Window?', type: 'boolean', description: "Ar atidaryti nuoroda naujame naršyklės lauke?"},
				]},
			]
		},
		{type: 'string' , name: 'copyright', label: 'Copyright', description: "Autorių teisės"}
	]
}
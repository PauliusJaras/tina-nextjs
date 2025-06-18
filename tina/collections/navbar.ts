import { Collection } from "tinacms";

export const NavbarCollection: Collection = {
  name: "navbar",
  label: "Viršutinis meniu",
  path: "content/navbar",
  format: "md",
  ui: {
	allowedActions: {
		create: false,
		delete: false,
	},
	global: true,
  },
  fields: [

    {type: 'image', name: 'autoplius', label: 'Autoplius', description: "Autoplius nuoroda"},
    {type: 'image', name: 'logo', label: 'Logo', description: "Logotipo paveikslėlis"},
    {
      name: "subLinks",
      label: "Sub Links",
      description: "Nuorodos",
      type: "object",
      list: true,
	  ui: {
		itemProps: (item) => {
		  return {label: item.label}
		}
	  },
      fields: [
        {name: 'label', label: 'Label', type: 'string', description: "Pavadinimas"},
        {name: 'url', label: 'Url', type: 'string', description: "Nuorodos url"},
      ]
    },
    {
      name: "navButtons",
      label: "Nav Buttons",
      description: "Meniu mygtukai",
      type: "object",
      list: true,
	  ui: {
		itemProps: (item) => {
		  return {label: item.label}
		}
	  },
      fields: [
        {name: 'label', label: 'Label', type: 'string', description: "Pavadinimas"},
        {name: 'sublinks', label: 'Nav Sublinks', type: 'object', list: true, description: "Meniu mygtukų pasirinkimai/nuorodos",
        ui: {
          itemProps: (item) => {
            return {label: item.label}
          }},
        fields: [
          {type: 'string', name: 'label', label: 'Label', description: "Pavadinimas"},
            {
              name: 'componentObjects',
              label: 'Component Objects',
              description: "Komponento objektai kurie bus atvaizduojami meniu. Turi atitikti komponento tipą.",
              type: 'object',
              list: true,
              ui: {
                itemProps: (item) => {
                return {label: item.label}
                }
              },
              fields: [
                {type: 'reference', name: 'object', label: 'Object', description: "Komponento objektai kurie bus atvaizduojami meniu. Turi atitikti komponento tipą.", collections: ['page', 'car', 'dealershipCar', 'newsPage', 'specialOffer']},
                {type: 'string', name: 'label', label: 'Label', description: "Pavadinimas"},	  
              ]
              },
              {type: 'string', name: 'renderComponent', label: 'Component To Render', description: 'Komponento tipas', options: ['Car Component', 'News Component', 'Basic Component', 'Page Component'] },
              {type: 'object', name: 'redirectButton', label: 'Redirect Button', description: "Nuorodos mygtukas", fields: [
              {type: 'string', name: 'label', label: 'Label', description: "Pavadiniams"},
              {type: 'string', name: 'url', label: 'Url', description: "Mygtuko url"},
              {type: 'boolean', name: 'status', label: 'Off/On', description: "Slėpti/naudoti mygtuką?"},
              ]},
              {
                type: 'object', name: 'link', label: 'Link', description: "Nuoroda. Naudoti kai mygtukas neturi objektų atvaizduoti", fields: [
                  {type: 'boolean', name: 'isLink', label: 'Is Link?', description: "Ar šis mygtukas nuoroda?"},
                  {type: 'string', name: 'url', label: 'Url', description: "Mygtuko nuorodos url"}
                ]
              }	
        ]},
        {name: 'border', type: 'boolean', label: 'Border Style', description: 'Ar pridėti šoninių kraštinių stilistiką?'},
        {name: 'order',  label: 'Order', type: 'number', description: 'Išdėstymo pozicija', required: true},
      ]
    },
    {
      name: "navLinks",
      label: "Nav Links",
      description: "Meniu nuorodos",
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => {
          return {label: item.label}
        }
        },
      fields: [
        {name: 'label', label: 'Label', type: 'string', description: "Pavadinimas"},
        {name: 'url',  label: 'Url', type: 'string', required: true, description: "Nuorodos url"},
        {name: 'border', type: 'boolean', label: 'Border Style', description: 'Ar pridėti šoninių kraštinių stilistiką?', },
        {name: 'order',  label: 'Order', type: 'number', description: 'Išdėstymo pozicija', required: true},
      ]
    },
    {
      name: "navImages",
      label: "Nav Images",
      description: "Meniu paveikslėliai",
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => {
          return {label: item.label}
        }
        },
      fields: [
        {name: 'image', label: 'Image', type: 'image', required: true, description: "Paveikslėlis"},
        {name: 'url',  label: 'Url', type: 'string', required: true, description: "Paveikslėlio nuoroda"},
        {name: 'label', label: 'Label', type: 'string', description: "Paveikslėlio pavadinimas"},
      ]
    },
    {
      name: 'sideMenu',
      label: "Side Menu",
      description: "Šoninis/apatinis meniu",
      type: 'object',
      fields: [
        {
          name: 'items',
          label: 'Items',
          description: "Nuorodos",
          type: 'object',
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item.label };
            },
          },
          fields: [
            {
              name: 'label', label: 'Label', type: 'string', description: "Pavadinimas"
            },
            {
              name: 'url', label: 'Url', type: 'string', description: "Nuorodos url"
            },
            {
              name: 'icon', label: 'Icon', type: 'string', options: ["newsletter", "drive", "service", "register"], description: "Nuorodos ikona pagal pasirinkimą"
            }
          ]
        }
      ]
    },
    {
      name: 'dropDownMenu',
      label: "Mobile Drop Down Menu",
      description: "Mobilios versijos kontaktų ir adreso meniu",
      type: 'object',
      fields: [
        {
          name: 'phoneNumbers',
          label: "Phone Numbers",
          description: "Tel. numeriai",
          type: 'object',
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item.label };
            },
          },
          fields: [
            {label: 'Label', name: 'label', type: 'string', required: true, description: "Pavadinimas"},
            {label: 'Phone Number', name: 'number', type: 'string', required: true, description: "Numeris"},
            {label: 'Button label', name: 'buttonLabel', type: 'string', description: "Mygtuko tekstas"},
          ]
        },
        {
          name: 'addresses',
          label: 'Addresses',
          description: "Adresas",
          type: 'object',
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item.label };
            },
          },
          fields: [
            {label: 'Label', name: 'label', type: 'string', required: true, description: "Pavadinimas"},
            {label: 'Map link', name: 'mapLink', type: 'string', required: true, description: "Nuoroda į žemėlapį"},
            {label: 'Button label', name: 'buttonLabel', type: 'string', required: true, description: "Mygtuko tekstas"},
          ]
        }
      ]
    }
  ],
};

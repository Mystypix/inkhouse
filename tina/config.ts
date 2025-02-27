import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "homepage",
        label: "Uvodní stránka",
        path: "content/homepage",
        fields: [
          {
            label: "Tatérky",
            name: "tattooers",
            type: "object",
            list: true,
            ui: {
              component: "group-list",
              itemProps: (item) => {
                // Field values are accessed by item?.<Field name>
                return { label: item?.name };
              },
            },
            fields: [
              {
                label: 'Fotka úvod',
                name: 'photoIntro',
                type: 'image',
                required: true,
              },
              {
                label: 'Fotka detail',
                name: 'photoDetail',
                type: 'image',
                required: true,
              },
              {
                label: "Portfolio",
                name: "portfolio",
                type: "object",
                list: true,
                ui: {
                  component: "group-list",
                },
                fields: [
                  {
                    label: 'Fotka',
                    name: 'portforlioPhoto',
                    type: 'image',
                    required: true,
                  },
                ],
              },
              {
                type: "string",
                name: "name",
                label: "Jméno",
                required: true,
              },
              {
                type: "rich-text",
                name: "text",
                label: "Popis",
                required: true,
              },
              {
                type: "string",
                name: "instagram",
                label: "Instagram",
              },
              {
                type: "string",
                name: "email",
                label: "Email",
              },
              {
                type: "string",
                name: "facebook",
                label: "Facebook",
              },
            ],
          },
        ],
      },
      {
        name: "aboutUs",
        label: "O nás",
        path: "content/aboutUs",
        fields: [
          {
            type: "rich-text",
            name: "introText",
            label: "Úvodní text",
            required: true,
          },
          {
            type: "rich-text",
            name: "address",
            label: "Adresa",
            required: true,
          },
          {
            type: "rich-text",
            name: "searchIntro",
            label: "Hledáme text",
          },
          {
            type: "rich-text",
            name: "searchInfo",
            label: "Hledáme informace",
          },
          {
            type: "rich-text",
            name: "searchContact",
            label: "Hledáme kontakt",
          },
        ],
      },
      {
        name: "tattoo",
        label: "Tetování",
        path: "content/tattoo",
        fields: [
          {
            label: "Kroky",
            name: "steps",
            type: "object",
            list: true,
            ui: {
              component: "group-list",
              itemProps: (item) => {
                // Field values are accessed by item?.<Field name>
                return { label: item?.step };
              },
            },
            fields: [
              {
                type: "string",
                name: "step",
                label: "Krok",
                required: true,
              },
              {
                type: "rich-text",
                name: "description",
                label: "Text",
                required: true,
              },
            ],
          },
        ],
      },
      {
        name: "pricing",
        label: "Ceník",
        path: "content/pricing",
        fields: [
          {
            type: "rich-text",
            name: "text",
            label: "Text",
            required: true,
          },
        ],
      },
      {
        name: "faq",
        label: "FAQ",
        path: "content/faq",
        fields: [
          {
            label: "Položky",
            name: "items",
            type: "object",
            list: true,
            ui: {
              component: "group-list",
              itemProps: (item) => {
                // Field values are accessed by item?.<Field name>
                return { label: item?.question };
              },
            },
            fields: [
              {
                type: "string",
                name: "question",
                label: "Otázka",
                required: true,
              },
              {
                type: "rich-text",
                name: "answer",
                label: "Odpověď",
                required: true,
              },
            ],
          },
        ],
      },
      {
        name: "contact",
        label: "Kontakt",
        path: "content/contact",
        fields: [
          {
            type: "string",
            name: "address",
            label: "Adresa",
            required: true,
          },
          {
            type: "rich-text",
            name: "text",
            label: "Text",
            required: true,
          },
        ],
      },
    ],
  },
});

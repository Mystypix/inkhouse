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
            type: "rich-text",
            name: "introText",
            label: "Úvodní text",
            required: true,
          },
          {
            type: "rich-text",
            name: "aboutText",
            label: "Text o mně",
            required: true,
          },
          {
            type: "rich-text",
            name: "reservationText",
            label: "Text o rezervaci",
            required: true,
          },
          {
            type: "rich-text",
            name: "pricingText",
            label: "Text o cenách",
            required: true,
          },
          {
            type: "rich-text",
            name: "photoText",
            label: "Text o fotografování",
            required: true,
          },
          {
            type: "rich-text",
            name: "paintingText",
            label: "Text o malování",
            required: true,
          },
          {
            label: "FAQ",
            name: "faq",
            type: "object",
            list: true,
            ui: {
              component: "group-list",
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
        ],
      },
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});

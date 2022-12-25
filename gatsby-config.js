const siteConfig = require("./config.js");

module.exports = {
  pathPrefix: siteConfig.pathPrefix,
  siteMetadata: {
    siteUrl: siteConfig.url,
    url: siteConfig.url,
    title: siteConfig.title,
    subtitle: siteConfig.subtitle,
    description: siteConfig.description,
    disqusShortname: siteConfig.disqusShortname,
    category: siteConfig.category,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve("./src/templates/default-template.tsx"),
        },
        plugins: [`gatsby-remark-images`, "gatsby-remark-unwrap-images"],
        gatsbyRemarkPlugins: [
          // {
          //   resolve: `gatsby-remark-wiki-link`,
          //   options: {
          //     slugify: `${__dirname}/src/utils/make-slug.js`,
          //     stripBrackets: true,
          //   },
          // },
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              // [Optional] The root of "media_folder" in your config.yml
              // Defaults to "static"
              // staticFolderName: 'media',
              // [Optional] Include the following fields, use dot notation for nested fields
              // All fields are included by default
              // include: ['featured'],
              // [Optional] Exclude the following fields, use dot notation for nested fields
              // No fields are excluded by default
              // exclude: ['featured.skip'],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              backgroundColor: "transparent",
            },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "media",
        path: `${__dirname}/content/vault/media`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto Serif",
              variants: ["400", "500", "900"],
              fontDisplay: "swap",
            },
            {
              family: "Space Mono",
              variants: ["400"],
              fontDisplay: "swap",
            },
          ],
        },
        useMinify: true,
        usePreload: true,
      },
    },
  ],
};

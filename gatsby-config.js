module.exports = {
  siteMetadata: {
    title: "Gatsby-Gomtang",
    description: `A restaurant site with Gatsby`,
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "about",
        link: "/about",
      },
      {
        name: "browse",
        link: "/browse",
      },
      {
        name: "event",
        link: "/event",
      },
      {
        name: "contact",
        link: "/contact",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    // source file first and make node
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images", // anything
        path: "./src/images/", // where we save all our images
      },
    },
    // transform image
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // for language
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "language",
        path: `./language`,
      },
    },
    `gatsby-transformer-json`,
    // Gatsby pwa
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     icon: "src/images/icon.png",

    //   },
    // },
    // https://www.gatsbyjs.com/docs/progressive-web-app/
  ],
};

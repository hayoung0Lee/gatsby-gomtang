module.exports = {
  siteMetadata: {
    title: "다락재 쉼터",
    description: `다락재 쉼터입니다. 맛있는 한우 소머리 곰탕을 드시러 경상북도 군위로 놀러오세요`,
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
        name: "visit",
        link: "/visit",
      },
      {
        name: "contact",
        link: "/contact",
      },
    ],
    image: "/images/how-they-make.jpeg",
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

module.exports = {
  siteMetadata: {
    title: "다락재 쉼터",
    titleTemplate: "다락재 쉼터: %s",
    description: `다락재 쉼터입니다. 맛있는 한우 소머리 곰탕을 드시러 경상북도 군위로 놀러오세요`,
    url: "https://compassionate-spence-df7e3f.netlify.app/",
    menuLinks: {
      home: {
        title: "다락재 쉼터",
        description: `다락재 쉼터입니다. 맛있는 한우 소머리 곰탕을 드시러 경상북도 군위로 놀러오세요`,
      },
      about: {
        title: "다락재 쉼터의 한우 곰탕",
        description: `다락재쉼터의 맛있는 한우 곰탕은 정성으로 만들고 있습니다`,
      },
      browse: {
        title: "다락재 쉼터 한우 소머리 곰탕과 머리 고기",
        description:
          "다락재 쉼터 한우 소머리 곰탕과 머리 고기 메뉴를 소개합니다",
      },
      visit: {
        title: "경상북도 군위의 다락재 쉼터",
        description: "경상북도 군위의 다락재 쉼터로 놀러오세요",
      },
      contact: {
        title: "다락재 쉼터의 연락처",
        description: "다락재 쉼터에 단체 예약 및 전화 상담 정보입니다",
      },
    },
    // image: "how-they-make.jpeg",
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

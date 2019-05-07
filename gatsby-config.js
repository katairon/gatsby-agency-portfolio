module.exports = {
  siteMetadata: {
    title: `Gatsby Agency Portfolio`,
    description: `A portfolio for your creative shop`,
    author: `@JacobKnaack`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
      }
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        url: `https://graphql.cosmicjs.com/v1`,
        fieldName: `page`,
        typeName: `Page`,
        refetchInterval: 10,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        url: `https://graphql.cosmicjs.com/v1`,
        fieldName: `layout`,
        typeName: `Layout`,
        refetchInterval: 10,
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

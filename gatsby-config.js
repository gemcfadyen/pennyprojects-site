module.exports = {
  pathPrefix: `/gatsby-spike`,
  siteMetadata: {
    title: `Penny Projects Ltd`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    {
      pathPrefix: `/gatsby-spike`,
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blogarticles`,
        name: "blogarticles",
      }
    },
    `gatsby-transformer-remark`
  ],
};

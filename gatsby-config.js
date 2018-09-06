module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      pathPrefix: `/gatsby-spike`,
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    }
  ],
};

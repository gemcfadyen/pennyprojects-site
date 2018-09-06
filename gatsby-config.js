module.exports = {
  plugins: [
    {
      pathPrefix: `/gatsby-spike`,
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    }
  ],
};

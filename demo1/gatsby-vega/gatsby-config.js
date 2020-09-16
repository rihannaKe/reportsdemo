module.exports = {
  pathPrefix: `/gatsby-remark-vega-example`,
  siteMetadata: {
    title: "Example of gatsby-remark-vega",
    author: "Kevin Scott",
  },
  plugins: [
    `gatsby-plugin-react-next`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          `gatsby-remark-vega`,
        ],
      },
    },
  ],
}

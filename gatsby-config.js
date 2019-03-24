module.exports = {
  siteMetadata: {
    title: `Redd Developer`,
    description: `Tracking-free place to find technical knowledge about web development.`,
    author: `@kettanaito`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.redd.one',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-136640393-1',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'drafts',
        path: `${__dirname}/content/drafts/`,
      },
    },
    {
      resolve: 'gatsby-mdx',
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Redd`,
        short_name: `Redd`,
        start_url: `/`,
        background_color: `#d22f2d`,
        theme_color: `#d22f2d`,
        // display: `minimal-ui`,
        display: `standalone`,
        icon: `src/images/favicons/default.png`,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
  ],
}

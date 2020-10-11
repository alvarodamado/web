module.exports = {
  siteMetadata: {
    title: `Alicia Roma`,
    author: {
      name: `Alicia Roma`,
      summary: `「Correctora editorial • Proyecto de escritora」Hago magia con las letras.✨ ¡Bididi badidi bu! 🧚‍♀️`,
    },
    description: `「Correctora editorial • Proyecto de escritora」Hago magia con las letras.✨ ¡Bididi badidi bu! 🧚‍♀️`,
    siteUrl: `https://aliciaroma.es/`,
    social: {
      twitter: `https://twitter.com/magagramatical`,
      linkedin: `https://www.linkedin.com/in/aliciaroma`
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alicia Roma`,
        short_name: `AliciaRoma`,
        start_url: `/`,
        background_color: `#fefffb`,
        theme_color: `#8f0b3e`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

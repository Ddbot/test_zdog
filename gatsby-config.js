module.exports = {
  siteMetadata: {
    title: `Andry Online`,
    description: '<span>This page is hosting my CV and my blog</span>',
    author: `@dandibot`,
  },
    plugins: [
            {
              resolve: `gatsby-source-wordpress`,
              options: {
                baseUrl: `travailleurduweb.wordpress.com`,
                protocol: `https`,
                hostingWPCOM: true,
                searchAndReplaceContentUrls: {
                  sourceUrl: `https://travailleurduweb.wordpress.com`,
                  replacementUrl: `https://localhost:8000`
                },
                concurrentRequests: 10,
                includedRoutes: [
                  "**/pages",
                  "**/posts",
                ],
                },              
            },
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `gatsby-starter-default`,
          short_name: `starter`,
          start_url: `/`,
          background_color: `hsla(270, 50%, 40%,1)`,
          theme_color: `hsla(270, 50%, 40%,1)`,
          display: `minimal-ui`,
          icon: `src/images/logo.png`, // This path is relative to the root of the site.
        },
      },
      {
        resolve: `gatsby-plugin-sass`,
        options: {
          includePaths: [`${__dirname}/src/styles`]
        }
      },
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
    ],
  }

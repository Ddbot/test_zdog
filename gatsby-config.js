module.exports = {
  siteMetadata: {
    title: `Andry Online`,
    author: `@dandibot`,
    description: '<span>This page is hosting my CV and my blog</span>',
    plugins: [
            {
              resolve: `gatsby-source-wordpress`,
              options: {
                baseUrl: `travailleurduweb.wordpress.com`,
                protocol: `https`,
                hostingWPCOM: true,
                useACF: false,
                auth: {
                  // If hostingWPCOM is true then you will need to communicate with wordpress.com API
                  // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
                  // then add your clientId, clientSecret, username, and password here
                  // Learn about environment variables: https://www.gatsbyjs.org/docs/environment-variables
                  // If two-factor authentication is enabled then you need to create an Application-Specific Password,
                  // see https://en.support.wordpress.com/security/two-step-authentication/#application-specific-passwords
                  wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
                  wpcom_app_clientId: "69373",
                  wpcom_user: "makatiman",
                  wpcom_pass: process.env.WORDPRESS_PASSWORD,
                },            
                includedRoutes: [
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
}

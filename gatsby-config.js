module.exports = {
  siteMetadata: {
    title: `Andry Online`,
    author: `@dandibot`,
    en: {
      description: `<span>This page is hosting my CV and my blog</span>`,
    },

    fr: {
      description: `<span>Vous trouverez ici mon CV ainsi que mon blog</span>`,
      slide_1: `<p>
				  Bonjour ! <br />
				  Je suis <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>Andry</b></span>,<br />
          Intégrateur et <span style={{backgroundColor: "rebeccapurple",padding: "6px",color: "white"}}><b>Développeur</b></span> de sites<span style={{backgroundColor: "rebeccapurple",padding: "6px",color: "white"}}><b>Web</b></span> et d'<span style={{backgroundColor: "rebeccapurple",padding: "6px",color: "white"}}><b>applications mobiles</b></span>
			  </p>`
    }

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

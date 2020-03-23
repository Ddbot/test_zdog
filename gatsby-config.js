module.exports = {
  siteMetadata: {
    title: `Andry Online`,
    author: `@dandibot`,
    en: {
      description: `<span>This page is hosting my CV and my blog</span>`,
      slide_0: `<p style='margin-right:10%;'>
                  Hello ! <br />
                  I'm <span class="purple"><b>Andry</b></span>,<br />
                  A <span style='background-color: rebeccapurple;padding:6px;color:white'}}><b>Web site</b></span> and <span class="purple"><b>mobile Apps mobiles</b></span> Integrator and <span class="purple"><b>Designer</b></span>
                </p>`,
      slide_1: `<p style='margin-right:10%;'>
                  I'm using <span class="purple"><b>React</b></span> and <br />
                  frameworks such as <span class="purple"><b>Gatsby JS</b></span> to create 
                  <span class="purple"><b>fast, modern</b></span> and <span class="purple"><b>accessible</b></span>                
                  Web sites and <span class="purple"><b>PWA</b></span><br />
                </p>`,
      slide_2: `<p style='margin-left:10%;'>
                  I'm also interested in <span class="purple"><b>React Native</b></span> and <br />
                  <span class="purple"><b>Flutter</b></span>. I am passionnate
                  about technology and music, and always <span class="purple"><b> eager to learn new stuff</b></span>
                </p>`,
      slide_3: `<p style='margin-right:10%;'>SLIDE 4</p>`,
      slide_4: `<p style='margin-right:10%;'>SLIDE 5</p>`,
    },
    fr: {
      description: `<span>Vous trouverez ici mon CV ainsi que mon blog</span>`,
      slide_0: `<p style='margin-right:10%;'>
				  Bonjour ! <br />
				  Je suis <span class="purple"><b>Andry</b></span>,<br />
          Intégrateur et <span class="purple"><b>Designer</b></span> de sites<span class="purple"><b>Web</b></span> et d'<span class="purple"><b>applications mobiles</b></span>
			  </p>`,
      slide_1: `<p style='margin-right:10%;'>
                    J'utilise <span class="purple"><b>React</b></span> et <br />
                    des frameworks tels que <span class="purple"><b>Gatsby JS</b></span> pour créer des sites et des <span class="purple"><b>PWA</b></span><br />
                    <span class="purple"><b>modernes, rapides</b></span> et <span class="purple"><b>accessibles</b></span>.
                  </p>`,
      slide_2: `<p style='margin-left: 10%;'>
                      Je m'intéresse à <span class="purple"><b>React Native</b></span> et <br />
                      <span class="purple"><b>Flutter</b></span>,
                      et en véritable passionné de technologie, <span class="purple"><b>je ne cesse d'apprendre</b></span>
			              </p>`,
      slide_3: `<p style='margin-right:10%;'>SLIDE 4</p>`,
      slide_4: `<p style='margin-right:10%;'>SLIDE 5 </p>`,
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
}

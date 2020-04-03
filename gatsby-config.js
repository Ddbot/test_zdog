module.exports = {
  siteMetadata: {
    title: `Andry Online`,
    author: `@dandibot`,
    en: {
      description: `<span>This page is hosting my CV and my blog</span>`,
      slide_0: `<p style={{marginRight:'10%'}}>
				Hello ! <br />
				I 'm <Purple><b>Andry</b></Purple>,<br />
				A <Purple> <b> Web site </b></Purple> and <Purple> <b> mobile Apps </b></Purple> Integrator and <Purple> <b>Designer</b></Purple>
			</p>`,
      slide_1: `<p style={{marginRight:'10%'}}>
				I'm using <Purple><b>React</b></Purple> and <br />
				frameworks such as <Purple><b>Gatsby JS</b></Purple> to create 
				<Purple><b>fast, modern</b></Purple> and <Purple><b>accessible</b></Purple>                
				Web sites and <Purple><b>PWA</b></Purple><br />
			</p>`,
      slide_2: `<p style='margin-left:10%;'>
                I'm also using <Purple><b>React Native</b></Purple> and <br />
                <Purple><b>Ruby on Rails</b></Purple>. I am a music and technology fan, who <Purple><b>always strives to learn more</b></Purple>
            </p>`,
      slide_3: `<p style='margin-left: 10%;'>I am also a <Purple><b>writer / translator</b></Purple>. I create catchy and <Purple><b>a11y compliant content</b></Purple> and can even shoulder the <Purple><b>i18n</b></Purple> of your sites and applications</p>`,
      slide_4: `<p style='margin-right:10%;'>I'm currently available for work. <<Purple>><b>Contact me !</p></span></p>`,
    },
    fr: {
      description: `<span>Vous trouverez ici mon CV ainsi que mon blog</span>`,
      slide_0: `<p style={{marginRight:'10%'}}>
				Bonjour ! <br />
				Je suis <Purple><b>Andry</b></Purple>,<br />
				Intégrateur et <Purple><b>Designer</b></Purple> de sites<Purple><b>Web</b></Purple> et d'<Purple><b>applications mobiles</b></Purple>
			</p>`,
      slide_1: `<p style={{marginRight:'10%'}}>
				J'utilise <Purple><b>React</b></Purple> et <br />
				des frameworks tels que <Purple><b>Gatsby JS</b></Purple> pour créer des sites et des <Purple><b>PWA</b></Purple><br />
				<Purple><b>modernes, rapides</b></Purple> et <Purple><b>accessibles</b></Purple>.
			</p>`,
      slide_2: `<p style={{marginLeft:'10%'}}>
                J'utilise également <Purple><b>React Native</b></Purple> et <Purple><b>Ruby on Rails</b></Purple>. En véritable <Purple><b>passionné</b></Purple>, j'
                assure une <Purple><b>veille technologique</b></Purple> permanente.
            </p>`,
      slide_3: `<p style={{ marginLeft: '10%' }}>Je suis également <Purple><b>rédacteur et traducteur</b></Purple>. Je créé du <Purple><b>contenu SEO accrocheur</b></Purple> et assure une <Purple><b>i18n de qualité</b></Purple></p>`,
      slide_4: `<p>Je suis à votre disposition pour plus de renseignements. <Purple><b>Contactez-moi !</b></Purple></p>`,
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

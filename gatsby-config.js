module.exports = {
  siteMetadata: {
    title: `Andry Online`,
    author: `@dandibot`,
    en: {
      description: `<span>This page is hosting my CV and my blog</span>`,
      slide_0: `<p>
				Hello ! <br />
				I 'm <span class="purple"><b>Andry</b></span>,<br />
				A <span class="purple"> <b> Web site </b></span> and <span class="purple"> <b> mobile Apps </b></span> Integrator and <span class="purple"> <b>Designer</b></span>
			</p>`,
      slide_1: `<p>
				I'm using <span class="purple"><b>React</b></span> and <br />
				frameworks such as <span class="purple"><b>Gatsby JS</b></span> to create 
				<span class="purple"><b>fast, modern</b></span> and <span class="purple"><b>accessible</b></span>                
				Web sites and <span class="purple"><b>PWA</b></span><br />
			</p>`,
      slide_2: `<p style='margin-left:10%;'>
                I'm also using <span class="purple"><b>React Native</b></span> and <br />
                <span class="purple"><b>Ruby on Rails</b></span>. I am a music and technology fan, who <span class="purple"><b>always strives to learn more</b></span>
            </p>`,
      slide_3: `<p style='margin-left: 10%;'>I am also a <span class="purple"><b>writer / translator</b></span>. I create catchy and <span class="purple"><b>a11y compliant content</b></span> and can even shoulder the <span class="purple"><b>i18n</b></span> of your sites and applications</p>`,
      slide_4: `<p style='margin-right:10%;'>I'm currently available for work. <span class="purple"><b>Contact me !</p></span></p>`,
    },
    fr: {
      description: `<span>Vous trouverez ici mon CV ainsi que mon blog</span>`,
      slide_0: `<p>
				Bonjour ! <br />
				Je suis <span class="purple"><b>Andry</b></span>,<br />
				Intégrateur et <span class="purple"><b>Designer</b></span> de sites<span class="purple"><b>Web</b></span> et d'<span class="purple"><b>applications mobiles</b></span>
			</p>`,
      slide_1: `<p>
				J'utilise <span class="purple"><b>React</b></span> et <br />
				des frameworks tels que <span class="purple"><b>Gatsby JS</b></span> pour créer des sites et des <span class="purple"><b>PWA</b></span><br />
				<span class="purple"><b>modernes, rapides</b></span> et <span class="purple"><b>accessibles</b></span>.
			</p>`,
      slide_2: `<p style={{marginLeft:'10%'}}>
                J'utilise également <span class="purple"><b>React Native</b></span> et <span class="purple"><b>Ruby on Rails</b></span>. En véritable <span class="purple"><b>passionné</b></span>, j'
                assure une <span class="purple"><b>veille technologique</b></span> permanente.
            </p>`,
      slide_3: `<p style={{ marginLeft: '10%' }}>Je suis également <span class="purple"><b>rédacteur et traducteur</b></span>. Je créé du <span class="purple"><b>contenu SEO accrocheur</b></span> et assure une <span class="purple"><b>i18n de qualité</b></span></p>`,
      slide_4: `<p>Je suis à votre disposition pour plus de renseignements. <span class="purple"><b>Contactez-moi !</b></span></p>`,
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

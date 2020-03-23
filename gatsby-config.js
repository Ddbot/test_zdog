module.exports = {
  siteMetadata: {
    title: `Andry Online`,
    author: `@dandibot`,
    en: {
      description: `<span>This page is hosting my CV and my blog</span>`,
      slide_1: `<>
      		        <div className="slide text" onMouseMove={props.onMouseMove}>
                    <p>
				              Hello ! <br />
                      I'm <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>Andry</b></span>,<br />
                      A <span style={{backgroundColor: "rebeccapurple",padding: "6px",color: "white"}}><b>Web site</b></span> and <span style={{backgroundColor: "rebeccapurple",padding: "6px",color: "white"}}><b>mobile Apps mobiles</b></span> Integrator and <span style={{backgroundColor: "rebeccapurple",padding: "6px",color: "white"}}><b>Developer</b></span>
                    </p>
                  </div>
                </>`,
      slide_2: `<>
                  <div className="slide text" onMouseMove={props.onMouseMove}>
                    <p>
                      I'm using <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>React</b></span> and <br />
                      frameworks such as <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>Gatsby JS</b></span> to create 
                      <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>fast, modern</b></span> and <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>accessible</b></span>                
                      Web sites and <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>PWA</b></span><br />
                    </p>
                  </div>
                </>`,
      slide_3: `<>
                  <div className="slide slide-3 text" onMouseMove={props.onMouseMove} style={{ marginLeft: "5rem"}}>
                    <p>
                      I'm also interested in <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>React Native</b></span> and <br />
                      <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>Flutter</b></span>. I am passionnate
                      about technology and music, and always <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b> eager to learn new stuff</b></span>
                    </p>
                  </div>
                  <IPhone />
                </>`,
      slide_4: `<>
		            <div className="slide text" onMouseMove={props.onMouseMove}>
		              <p>SLIDE 4</p>
                </div>
              </>`,
      slide_5: `<>
		            <div className="slide text" onMouseMove={props.onMouseMove}>
		              <p>SLIDE 5</p>
                </div>
              </>`,
    },
    fr: {
      description: `<span>Vous trouverez ici mon CV ainsi que mon blog</span>`,
      slide_1: `<div>
		  <div className="slide text" onMouseMove={props.onMouseMove}>
			  <p>
				  Bonjour ! <br />
				  Je suis <span style="backgroundColor: "rebeccapurple", padding: "6px", color: "white""><b>Andry</b></span>,<br />
          Intégrateur et <span style={{backgroundColor: "rebeccapurple",padding: "6px",color: "white"}}><b>Développeur</b></span> de sites<span style={{backgroundColor: "rebeccapurple",padding: "6px",color: "white"}}><b>Web</b></span> et d'<span style={{backgroundColor: "rebeccapurple",padding: "6px",color: "white"}}><b>applications mobiles</b></span>
			  </p>
      </div>
    </div>`,
      slide_2: `<>
                <div className="slide text" onMouseMove={props.onMouseMove}>  
                  <p>
                    J'utilise <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>React</b></span> et <br />
                    des frameworks tels que <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>Gatsby JS</b></span> pour créer des sites et des <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>PWA</b></span><br />
                    <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>modernes, rapides</b></span> et <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>accessibles</b></span>.
                  </p>
                </div>
              </>`,
      slide_3: `<>
                  <div className="slide slide-3 text" onMouseMove={props.onMouseMove} style={{ marginLeft: "5rem"}}>
                    <p>
                      Je m'intéresse à <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>React Native</b></span> et <br />
                      <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>Flutter</b></span>,
                      et en véritable passionné de technologie, <span style={{ backgroundColor: "rebeccapurple", padding: "6px", color: "white" }}><b>je ne cesse d'apprendre</b></span>
			              </p>
                  </div>
                  <IPhone />
                </>`,
      slide_4: `<>
		              <div className="slide text" onMouseMove={props.onMouseMove}>
		                <p>SLIDE 4</p>
                  </div>
                </>`,
      slide_5: `<>
                  <div className="slide text" onMouseMove={props.onMouseMove}>
                    <p>SLIDE 5</p>
                  </div>
                </>`,
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
}

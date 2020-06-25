import React, {
    useEffect
} from "react";
import {
    useStaticQuery,
    graphql
} from "gatsby";
import Splitting from "splitting";
import gsap from 'gsap';

// import './styles/slide.css';

const Slide_AWS = (props) => {

    const data = useStaticQuery(
        graphql `
      query {
        en: wordpressPage(id: {
                eq: "f55ff220-cd5f-51fa-8743-5afa754b9be2"
            }) {
          title
          content
        }
        fr: wordpressPage(id: {
                eq: "52dcb6e6-9c47-56dc-ba0a-fd3d5c5f7c76"
            }) {
          title
          content
        }
      }
    `
    );

    useEffect(() => {
        let target = document.querySelector('[data-splitting="lines"]');
        let res = Splitting({
            target: target,
            by: "lines"
        });
        gsap.from(res[0].lines, {
            x: -500,
            scale: 0.7,
            autoAlpha: 0,
            stagger: {
                amount: 1.95,
            },
        });
    }, []);

    let renderData = () => {
        // document.title = data[props.lang].title;
        return {
            __html: data[props.lang].content
        }
    }

    return <p data-splitting="lines" dangerouslySetInnerHTML={renderData()} />;
};

export default Slide_AWS;
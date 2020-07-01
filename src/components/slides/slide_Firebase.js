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

const Slide_Firebase = (props) => {

    const data = useStaticQuery(
        graphql `
      query {
        en: wordpressPage(id: {
                eq: "58e01ed8-849e-5d9e-9f9e-830f0f4e8179"
            }) {
          title
          content
        }
        fr: wordpressPage(id: {
                eq: "004989a9-4f75-5a54-94b6-bd622d9ed68e"
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
        document.title = data[props.lang].title + ' | Andry Online'
        return {
            __html: data[props.lang].content
        }
    }

    return <p data-splitting="lines" dangerouslySetInnerHTML={renderData()} />;
};

export default Slide_Firebase;
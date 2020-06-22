import React from 'react';
import firebase from '../firebase.js';
import { useStaticQuery, graphql } from "gatsby";
import gsap from 'gsap';
import Wheel from 'lottery-wheel';


const WheelOF = (props) => {
        const data = useStaticQuery(
            graphql`
        query {
            en: wordpressPage(id: {eq: "c10a2c0a-16c1-554c-be92-8b1b17acead0"}){
            title
            content
            }
            fr: wordpressPage(id: {eq: "c10a2c0a-16c1-554c-be92-8b1b17acead0"}){
            title
            content
            }
        }`);

        let renderData = () => {
            return {
            __html: data['fr'].content
            }
        }
    
        const wheel = new Wheel({
        el: document.getElementById('wheel'),
        data: [{
            text: 'apple',
            chance: 20
        }, {
            text: 'banana'
        }, {
            text: 'orange'
        }, {
            text: 'peach'
        }],
        onSuccess(data) {
            document.querySelector('#wheel ~ p').textContent = data.text;
        }
        });    

    return <><p data-splitting="lines" dangerouslySetInnerHTML={renderData()} />
        <svg id="wheel"></svg>
        <p></p>
    </>;        
    }

export default WheelOF;
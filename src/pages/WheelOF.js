import React, { useEffect, useState } from 'react';
import firebase from '../firebase.js';
import { useStaticQuery, graphql, navigate } from "gatsby";
import gsap from 'gsap';
import Wheel from 'lottery-wheel';
import styled from 'styled-components';
import SpeechBubble from '../images/SpeechBubble';

let db = firebase.firestore();

const Concours = styled.section`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    height:100%;
    // justify-content: center;

    background-image: url(https://360.ch/wp-content/uploads/2020/02/laroux.jpg);
    background-size: cover;


    h1 {
        width: 100%;
        border: 1px solid red;
    }

    svg#wheel{
        align-self: flex-end;
        margin-right: 1.2rem;
        overflow: visible;
    }

    svg#speech{
        scale: 1.4;
        rotate: 10deg;
        align-self: center;
        margin-right: 2rem;
        translate: 10% 20%;
    }    
`;


const WheelOF = (props) => {
    let el = document.getElementById('wheel'),
        fruits = [];

    let [text, setText] = useState('2 la Fortune !');
    let [cadeaux, setCadeaux] = useState([]);

    let cadeauxRef = db.collection('cadeaux')
        // .get();
        .where('quantite', '>', 0).get();
    
    useEffect(() => {
        el = document.getElementById('wheel');
    });
    
    useEffect(() => { 
        // db.collection('cadeaux').get()
        cadeauxRef
            .then((querySnapShot) => {
                fruits = querySnapShot.docs.map(doc => {
                    return {
                        text: doc.data().name,
                        // quantite: doc.data().quantite,
                        chance: doc.data().quantite
                    }
                });
            })
            .then(() => {
                // On definit le state de cadeaux
                setCadeaux((previousCadeaux) => {
                    return fruits
                });
            })
    }, []);
    
    
    if (!!el) {
        let wheel = new Wheel({
            radius: 200,
            el: el,
            data: cadeaux,
            theme: 'default',
            color: {
                button: '#4864AB',
                buttonFont: 'white',
                border: '#4864AB',
                line: '#4864AB',
                prizeFont: '#4864AB',
                prize: '#A8DE52',
            },
            limit: 1,
            onSuccess(data) {
                setText((prev) => {               
                    return data.text
                });
                // Acceder a db aavec le fruit dont le nom === data.text
                db.collection('cadeaux').where('name', '==', data.text).get()
                    .then((querySnapShot) => { 
                        let target = cadeaux.find(el => el.text === data.text);
                        querySnapShot.docs.forEach(doc => {
                            db.collection('cadeaux').doc(doc.id).update({
                                quantite: target.chance - 1
                            });
                        });                          
                    });
            },
            onFail(data) {
                console.log('SORRY YOU CANT PLAY ANYMORE, REDIRECT TO ANOTHER PAGE', data);
                navigate('/');
            }
        });}

    const dato = useStaticQuery(
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


    // let renderData = () => {
    //     return {
    //     __html: dato['fr'].content
    //     }
    // }

    // On recupere les lots de Firebase
    // useEffect(() => { 
        // db.collection('cadeaux').get().then((querySnapShot => {
        //     querySnapShot.forEach((doc) => {
        //         fruits.push(doc.data());
        //     });
        //     fruits = fruits.filter(fruit => fruit.quantite !== 0).map(fruit => {
        //         return {
        //             text: fruit.name,
        //             chance: fruit.quantite
        //         }
        //     });
        // })).then(() => {
        //     // ON les assigne à un State
        //     setCadeaux((prev) => {
        //         return fruits
        //     });
        // });
    // });    
    
    return <Concours>
        {/* <h1 data-splitting="lines" dangerouslySetInnerHTML={renderData()} /> */}
        <SpeechBubble text={text}/>
        <svg id="wheel"></svg>
        <p></p>
    </Concours>;        
    }

export default WheelOF;
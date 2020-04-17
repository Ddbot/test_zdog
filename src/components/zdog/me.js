import React, { useRef, useEffect, useState } from 'react';
import Zdog from 'zdog';
import { Anchor, Cone, Cylinder, Ellipse, Box, Illustration, Rect, Shape, Group, Hemisphere } from 'react-zdog';

import Pen from './Pen';
import Pot from './Pot';

import gsap from 'gsap';

const { TAU } = Zdog;
var quarterTurn = Math.sin(TAU / 8);

var torsoX = 3 / quarterTurn;
var shoulderX = torsoX + 1.5;
var shinEnd = { y: 22 };
var hipX = (8 / quarterTurn) / 2;
const leftKnee = { x: -hipX - 10, y: -2, z: 15 };

const illoRotation = {
    // x: TAU / 4,
    // y: TAU/4,
    // z: TAU/4
}

const Me = (props) => {    
    let headRef = useRef(null);
    let torsoRef = useRef(null);
    let rightArm = useRef(null);
    let leftArm = useRef(null);
    let rightForeArm = useRef(null);
    let leftForeArm = useRef(null);

    let [rFARot, setrFARot] = useState({x: 0, y: 0, z: 0});
    let [lFARot, setlFARot] = useState({x: 0, y: 0, z: 0});
    
    const tickFn = (time, deltaTime, frame) => {
        // setrFARot((prevRot) => {
        //     if (rFARot !== prevRot) {
        //         return {
        //             x: 0,
        //             y: 0,
        //             z: 0, 
        //         }
        //     }
        // });
        console.log(time, deltaTime, frame, rightForeArm.current.rotate);
    }

    const rightForeArmMove = () => { 
        gsap.to(rightForeArm.current, {
            duration: 2,
            autoAlpha: 1,
            onStart: () => {
                gsap.ticker.add(tickFn);
            },
            onComplete: () => {
                gsap.ticker.remove(tickFn);
            }
        });
    };

    const Head = (props) => {
        // let headRef = useRef(null);
        {/* COU */ }
        return <Cylinder ref={headRef}
            // path={[{ y: 8 }, { y: 14 }]}
            diameter={4}
            length={6}
            stroke={false}
            color = {
                '#804d00'
            }
            rotate={{ x: -TAU / 4 }}
            translate={{ y: 12.5 }}>
            {/* menton */}
            <Shape
                translate={{ y: 0, z: -2 }}
                stroke={7.5}
                color = {
                    '#995c00'
                }
                rotate={{ x: TAU / 4 }}>
                {/* front */}
                <Ellipse
                    diameter={2}
                    translate={{ y: -4 }}
                    stroke={4}
                    color = {
                        '#995c00'
                    } >
                    {/* CHEVEUX GROS */}
                    <Shape
                        path={[{ y: -1 }, { y: -7 }]}
                        translate={{ x: -2, y: -3.5, z: -3 }}
                        rotate={{ x: -TAU / 4 }}
                        stroke={2.5}
                        color={'#616161'} />
                    {/* CHEVEUX MEDIUM */}
                    <Shape
                        path={[{ y: 0 }, { y: -6 }]}
                        translate={{ x: 2, y: -3, z: -2 }}
                        rotate={{ x: -TAU * 75 / 360 }}
                        stroke={2}
                        color={"lightgray"} />
                    {/* CHEVEUX PETITS */}
                    <Shape path={[{ y: 0 }, { y: -6 }]}
                        translate={{ x: -.25, y: -3, z: -1 }}
                        rotate={{ x: -TAU * 80 / 360 }}
                        stroke={2.5}
                        color={"gray"} />
                    {/* CHEVEUX DERRIERE */}
                    <Ellipse diameter={3}
                        translate={{ y: -.3, z: -3 }}
                        stroke={4}
                        color={'#4e4e4e'} />
                    {/* YEUX */}
                    <Ellipse
                        quarters={2}
                        scale={1.5}
                        translate={{ x: -1.5, y: 0.5, z: 2 }}
                        rotate={{ z: -TAU / 4 }}
                        closed={false}
                        color={'#330000'}
                        stroke={0.38}
                        fill={false} />
                    <Ellipse
                        quarters={2}
                        scale={1.5}
                        translate={{ x: 1.5, y: 0.5, z: 2 }}
                        rotate={{ z: -TAU / 4 }}
                        closed={false}
                        color={'#330000'}
                        stroke={0.38}
                        fill={false} />
                    {/* OREILLES */}
                    <Ellipse
                        diameter={1.5}
                        translate={{ x: 3.5, y: 1, z: -1 }}
                        rotate={{ y: -TAU / 8 }}
                        stroke={1}
                        color = {
                            '#995c00'
                        }
                        fill={true}>
                        {/* CHEVEUX AUTOUR OREILLE L*/}
                        <Ellipse quarters={2}
                            scale={3}
                            translate={{ x: -.5, y: -.4, z: -2 }}
                            rotate={{ y: -.8, z: -TAU / 4 }}
                            closed={false}
                            color={'#4e4e4e'}
                            stroke={1.5}
                            fill={false} />
                    </Ellipse>
                    <Ellipse
                        diameter={1.5}
                        translate={{ x: -3.5, y: 1, z: -1 }}
                        rotate={{ y: TAU / 8 }}
                        stroke={1}
                        color = {
                            '#995c00'
                        }
                        fill={true}>
                        {/* CHEVEUX AUTOUR OREILLE R */}
                        <Ellipse quarters={2}
                            scale={3}
                            translate={{ x: .5, y: -.4, z: -2 }}
                            rotate={{ y: .8, z: -TAU / 4 }}
                            closed={false}
                            color={'#4e4e4e'}
                            stroke={1.5}
                            fill={false} />
                    </Ellipse>
                </Ellipse>
                {/* SOURIRE */}
                <Ellipse quarters={2}
                    translate={{ y: -1, z: 4 }}
                    rotate={{ z: TAU / 4 }}
                    scale={3}
                    fill={true}
                    stroke={0.5}
                    color={'white'}
                    closed={true} />
            </Shape>
        </Cylinder>
    };    
        
    const Bras = React.forwardRef((props, ref) => {
        return <Shape ref={ref}
            path={[{ y: 0 }, { y: 7 }]}
            translate={props.translate}
            rotate={props.rotate}
            color={props.color}
            stroke={4}>{props.children}</Shape>
    });
            
    const Torso = (props) => {
        return <Shape
            ref={torsoRef}
            translate={{
                y: 25.3, z: 0
            }}
            rotate={{
                // z: TAU / 4
            }}
            path={[{ y: -torsoX }, { y: torsoX * 3-1 }]}
            color={'black'}
            
            stroke={12}
            onClick={() => console.log('U clicked on the TORSO')}>
            {/* EPAULES */}
            <Shape
                path={[{ x: 0 }, { x: 10 }]}
                color={'black'}
                stroke={8}
                translate={{
                    x: -5,
                    y: -6
            }}
            />
            {/* LOGO TSHIRT */}
            <Shape
                // triangle
                path={[ 
                    { x:   0, y: -1.6 },
                    { x:  1.6, y:  1.6 },
                    { x: -1.6, y:  1.6 },
                ]}
                stroke={.5}
                color={'#f38181'}
                translate={{ y: -4, z: 4 }} />
                <Shape
                    path={[
                        { x: -1.6, y: 2.58 },
                        { x: 1.6, y: 2.58 }
                    ]}
                    // closed by default
                    stroke={.5}
                    color={'#f4f39a'}
                    translate={{ y: -4, z: 4 }} />
            {/* BRAS R */}
            <Bras ref={rightArm} color={'black'}
                translate={{
                    x: -torsoX - 3,
                    y: -7,
                    // z: 4
                }}
                rotate={{
                    x: .5,
                    y: -0.5,
                    z: TAU / 16
                }}>
                {/* AVANT BRAS R */}
                <Bras ref={rightForeArm}
                    color={props.color}
                    translate={{
                        // x: -torsoX - 6,
                        y: 7,
                        z: 0
                    }}
                    rotate={{
                        // mouvement du bras vers le haut avec X entre 0.5 et 1
                        x: .5,
                        y: -5,
                        z: -.5
                    }}
                >
                    {/* MAIN R */}
                    <Shape
                        stroke={5}
                        color={props.color}
                        translate={{
                            // x: -torsoX - 4,
                            y: 8,
                            z: 0
                    }} />
                </Bras>
            </Bras>
            
            {/* BRAS L */}
            <Bras ref={leftArm} color={'black'}
                translate={{
                    x: torsoX + 3,
                    y: -7,
                    z: 0
                }}
                rotate={{
                    // mouvement du bras vers le haut avec X
                    x: .7,
                    y: -1,
                    z: -TAU / 16
                }}
            >
                {/* AVANT BRAS L */}
                <Bras ref={leftForeArm} color={props.color}
                    translate={{
                        x: -torsoX - 4,
                        y: 8,
                        z: 2
                    }}
                    rotate={{
                        x: -2,
                        y: 0,
                        z: 5
                    }}>
                    {/* MAIN L */}
                    <Shape stroke={4.7}
                        color = {
                           props.color
                        }
                        translate={{
                            // x: torsoX + 6,
                            x: -1,
                            y: -2,
                            z: 1
                        }}/>
                </Bras>
            </Bras>
        </Shape>
    };    

    const Legs = (props) => {
        // HANCHES
        return <Cylinder diameter={6} length={torsoX * 3 - 1} translate={{ y: 40 }} rotate={{ x: -TAU, y: -TAU / 4 }} color={'hsl(180, 25%, 20%)'}>
            {/* JAMBES */}
            {/* RIGHT THIGH */}
            <Cylinder diameter={4} translate={{ x: -8.5, y: 0, z: -6 }} rotate={{ y: TAU / 4 + 0.4 }} length={12} color={'darkslategray'}>
                {/* KNEE R */}
                <Shape stroke={5} color={'hsl(180, 25%, 28%)'} translate={{ z: 8 }}>
                    {/* TIBIA R */}
                    <Cylinder diameter={4} translate={{ x: 0, y: 7.5, z: 0 }} rotate={{ x: -TAU / 4, y: 0 }} length={12} color={'hsl(180, 25%, 30%)'}>
                        {/* CHAUSSURE R */}
                        <Shape path={[{ y: 0 }, { y: 4 }]} stroke={5} color={'#cc7a00'} translate={{ x: 0, y: 0, z: 8 }} rotate={{ x: -3, y: 1, z: .5 }}>
                            <Shape path={[{ x: 0 }, { x: 2.5 }]} translate={{ x: 1.3, y: 2, z: 2 }} rotate={{ x: 3, y: 1, z: -0.1 }} stroke={.5} color={'beige'} />
                            <Shape path={[{ x: 0 }, { x: 2.5 }]} translate={{ x: 1.3, y: 3.25, z: 2 }} rotate={{ x: 3, y: 1, z: -0.1 }} stroke={.5} color={'beige'} />
                            <Shape path={[{ x: 0 }, { x: 2.5 }]} translate={{ x: 1.3, y: 4.5, z: 2 }} rotate={{ x: 3, y: 1, z: -0.1 }} stroke={.5} color={'beige'} />
                        </Shape>
                    </Cylinder>
                </Shape>
            </Cylinder>
            {/* LEFT THIGH */}
            <Cylinder diameter={4} translate={{ x: -8.5, y: 0, z: 6 }} rotate={{ y: TAU / 4 - 0.4 }} length={12} color={'darkslategray'}>
                {/* KNEE L */}
                <Shape stroke={5} color={'hsl(180, 25%, 28%)'} translate={{ z: 8 }}>
                    {/* TIBIA L */}
                    <Cylinder diameter={4} translate={{ x: 0, y: 7.5, z: 0 }} rotate={{ x: -TAU / 4, y: 0 }} length={12} color={'hsl(180, 25%, 30%)'}>
                        {/* CHAUSSURE L */}
                        <Shape path={[{ y: 0 }, { y: 4 }]} stroke={5} color={'#cc7a00'} translate={{ x: 0, y: 0, z: 8 }} rotate={{ x: -3, y: 2, z: .5 }}>
                            {/* <Ellipse diameter={4} quarters={2} color={'yellow'} translate={{ x: 1.1, y:2, z: 0}} rotate={{ x: TAU/4, y: 0, z: -0.5}}/>
                                <Ellipse diameter={3} quarters={2} color={'yellow'} translate={{ x: 1.1, y:5, z: 0}} rotate={{ x: TAU/4, y: 0, z: -0.5}}/> */}
                            <Shape path={[{ x: 0 }, { x: 2.5 }]} translate={{ x: 1.3, y: 2, z: -2 }} rotate={{ y: 1.2 }} stroke={.5} color={'beige'} />
                            <Shape path={[{ x: 0 }, { x: 2.5 }]} translate={{ x: 1.3, y: 3.25, z: -2 }} rotate={{ y: 1.2 }} stroke={.5} color={'beige'} />
                            <Shape path={[{ x: 0 }, { x: 2.5 }]} translate={{ x: 1.3, y: 4.5, z: -2 }} rotate={{ y: 1.2 }} stroke={.5} color={'beige'} />
                        </Shape>
                    </Cylinder>
                </Shape>
            </Cylinder>
        </Cylinder>
    };

    const Table = () => {
        return <Box
        translate={{
            y: 44.6,
            z: 12
        }}
            width={ 40}
            height={27}
            depth={ 15}
            stroke={2}
            color={'transparent'}
            // remove left & right faces
            leftFace={'#86592d'}
            rightFace={'#734d26'}
            rearFace={ false}
            topFace={'#4d3319'}
            bottomFace={ false}
        />
    }

    let Chair = () => {
        let DossierTop = () => {
            return <Ellipse
            diameter={20}
            quarters={2}
            stroke={3}
            color = {'#00264d'}
            rotate={{
                x: 3 / TAU / 4,
                z: -TAU / 4,
            }}
            translate={{
                // x: 10,
                y: 30,
                z: -10
            }}
            fill={true}
        />
        }

        let DossierMiddle = () => {
            return <Rect
            width={20}
            height={18}
            stroke={3}
            color = {'#00264d'}
                translate={{
                    // x: 10,
                    y: 39,
                    z: -10,
                }}
            fill={true}
            />
        }

        let Pouf = () => {
            return <Ellipse
                width={10}
                height={20}
                stroke={8}
                color={'#00264d'}
                rotate={{
                    x: TAU / 4,
                    z: -TAU / 4,
                }}
                translate={{
                    y: 45,
                    // z: -5
                }}
                />
        }
            
        let StoolStand = () => {
            return  <Hemisphere
                diameter={20}
                // length={12}
                stroke={false}
                color={'#b3cccc'}
                backface={'#e6f2ff'}
                translate={{
                    y: 59
                }}
                rotate={{ 
                    x: TAU / 4
                }}
            />
        }      
        
        return <>
            <DossierTop />
            <DossierMiddle />
            <Pouf />
            <StoolStand />
        </>        
    }

    const Computer = () => {
        return <Group
            translate={{
            // x: 15,
            y: 24,
            z: 20
            }}
            rotate={{
                x: -0.1
            }}>
            {/* Bezel */}
            <Box
                width={16}
                height={32 / 3}
                depth={1}
                stroke={1}
                color={'rgba(1,1,1,.8)'}  // default face colo}
                backface={'lightgray'}
                leftFace={'lightgray'}
                rightFace={'lightgray'}
                topFace={'lightgray'}
                bottomFace={'lightgray'}>
            </Box>
            {/* Keyboard */}          
            <Box
                width={ 16}
                height={ 32/3}
                color={ 'rgb(211, 211, 212)'}
                backface={ 'lightgray'}
                leftFace={ 'lightgray'}
                rightFace={ 'lightgray'}
                topFace={ 'lightgray'}
                bottomFace={ 'lightgray'}
                translate={{
                    y: 32 / 6,
                    z: -32 / 6
                }}
                rotate={{
                    x: TAU / 4 - 3
                }}/>
        </Group>}

    return <>
        <Illustration zoom={8} translate={{ y: -30 }} rotate={props.rotation|| { x: 5.67, y: 5.67, z: 6.28 }} onClick={props.handleClick}>
            <Computer />
            <Head />
            <Torso color={'#995c00'}/>
            <Legs />
            <Table />
            {/* <Pen /> */}
            <Pot />
                <Pen />
            {/* </Pot> */}
            <Chair />   
            <button id="torsoAnim" onClick={rightForeArmMove}>Torso</button>
        </Illustration>
    </>
};

export default Me;

import React, { useRef } from 'react';
import Zdog from 'zdog';
import { Anchor, Cone, Cylinder, Ellipse, Box, Illustration, Shape } from 'react-zdog';

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

const Bras = React.forwardRef((props, ref) => (
    <Shape ref={ref}
        path={props.path || [{y: 0}, {y: 7}]}
        translate={props.translate}
        rotate={ props.rotate }
        color={props.color}
        stroke={4}>{props.children}</Shape>));

const Me = React.forwardRef((props, ref) => {

    const Head = (props) => {
        let headRef = useRef(null);
        {/* COU */ }
        return <Cylinder ref={headRef}
            // path={[{ y: 8 }, { y: 14 }]}
            diameter={4}
            length={6}
            stroke={false}
            color={'red'}
            rotate={{ x: -TAU / 4 }}
            translate={{ y: 12.5 }}
        >
            {/* menton */}
            <Shape
                translate={{ y: 0, z: -2 }}
                stroke={7.5}
                color={'brown'}
                rotate={{ x: TAU / 4 }}>
                {/* front */}
                <Ellipse
                    diameter={2}
                    translate={{ y: -4 }}
                    stroke={4}
                    color={'brown'}>
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
                        color={'white'}
                        stroke={0.38}
                        fill={false} />
                    <Ellipse
                        quarters={2}
                        scale={1.5}
                        translate={{ x: 1.5, y: 0.5, z: 2 }}
                        rotate={{ z: -TAU / 4 }}
                        closed={false}
                        color={'white'}
                        stroke={0.38}
                        fill={false} />
                    {/* OREILLES */}
                    <Ellipse
                        diameter={1.5}
                        translate={{ x: 3.5, y: 1, z: -1 }}
                        rotate={{ y: -TAU / 8 }}
                        stroke={1}
                        color={'chocolate'}
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
                        color={'chocolate'}
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
    }

    const Torso = (props) => {
        let torsoRef = useRef(null);
        let rightArm = useRef(null);
        let leftArm = useRef(null);
        let rightForeArm = useRef(null);
        let leftForeArm = useRef(null);

        return <Shape ref={torsoRef} translate={{
            y: 25.3, z: 0
        }}
            // rotate={{ z: TAU/4 }}
            path={[{ y: -torsoX }, { y: torsoX * 3 }]}
            color={'rgba(0,0,0,0.5)'}
            stroke={12.5}>
            {/* BRAS R */}
            <Bras ref={rightArm} color={'blue'}
                translate={{
                    x: -torsoX - 3,
                    y: -7
                }}
                rotate={{
                    // x: -TAU / 4,
                    // y: 0,
                    z: TAU / 16
                }}>
                {/* AVANT BRAS R */}
                <Bras ref={rightForeArm} color={'yellow'}
                    translate={{
                        // x: -torsoX - 6,
                        y: 7,
                        z: 0
                    }}
                    rotate={{
                        x: 1,
                        y: -5,
                        z: -1
                    }}
                >
                    {/* MAIN R */}
                    <Shape stroke={5} color={'pink'}
                        translate={{
                            // x: -torsoX - 4,
                            y: 8,
                            z: 0
                    }} />
                </Bras>
            </Bras>
            
            {/* BRAS L */}
            <Bras ref={leftArm} color={'red'}
                translate={{
                    x: torsoX + 3,
                    y: -7,
                    z: 0
                }}
                rotate={{
                    x: 0,
                    y: 0,
                    z: -TAU / 16
                }}
            />
            {/* AVANT BRAS L */}
            <Bras ref={leftForeArm} color={'darkred'}
                translate={{
                    x: torsoX + 6,
                    y: 3.3,
                    z: 7
                }}
                rotate={{ x: -2 }} />
            {/* MAIN L */}
            <Shape stroke={5} color={'pink'}
                translate={{ x: torsoX + 6, y: 3, z: 8 }} />
        </Shape>};

    

    // const Torso = (props) => (
    //     <Shape
    //         path={[{ x: -torsoX }, { x: torsoX }]}
    //         color={'#A60037'}
    //         stroke={16}>

    //         {/* EPAULE R */}
    //         <Shape
    //             path={[{ y: 0 }, { y: 14 }]}
    //             translate={{ x: -shoulderX, y: -3 }}
    //             rotate={{ x: -TAU/16, z: TAU/8 }}
    //             stroke={10}
    //             color={'#80002B'}>
    //             {/* BRAS R */}
    //             <Shape
    //                 path={[
    //                 { y: 0 },
    //                 { y: 14 },
    //                 ]}
    //                 translate={{ y: 16 }}
    //                 rotate={{  x: 2.12, z: -0 }}
    //                 stroke={8}
    //                 color={'red'}>
    //                 {/* MAIN R */}
    //                 <Shape
    //                     translate={{
    //                         x: -0.5,
    //                         y: 14,
    //                         z: 1
    //                     }}
    //                     stroke={10}
    //                     color={'brown'} />                    
    //             </Shape>
    //         </Shape>                
    //         {/* EPAULE L */}
    //         <Shape
    //             path={[{ y: 0 }, { y: 14 }]}
    //             translate={{ x: shoulderX, y: -3 }}
    //             rotate={{ x: TAU*3 /16, z: -TAU /32 }}
    //             stroke={10}
    //             color={'#80002B'}>
    //             {/* BRAS L */}
    //             <Shape
    //                 path={[
    //                 { y: 0 },
    //                 { y: 14 },
    //                 ]}
    //                 translate={{ y: 16 }}
    //                 rotate={{ x: TAU/4, z: TAU/8 }}
    //                 stroke={8}
    //                     color={'red'}>
    //                 {/* MAIN L */}
    //                 <Shape
    //                     translate={{
    //                         x: -0.5,
    //                         y: 14,
    //                         z: 1
    //                     }}
    //                     stroke={10}
    //                     color={'brown'} />
    //             </Shape>            
    //         </Shape>   
    //         {/* ZIP JACKET */}
    //         <Ellipse
    //             // diameter={Torso.stroke}
    //             diameter={16}
    //             quarters={1}
    //             rotate={ { y: TAU/4, x: -TAU/32 }}
    //             color={ 'black'}
    //             stroke={0.5} />                                  
    //     </Shape>);
    
    const Legs = (props) => (
        // HANCHES
        <Cylinder diameter={8}
            length={torsoX*3-1}
            translate={{ y: 40 }}
            rotate={{ x: -TAU / 8, y: -TAU / 4 }}
            color={'rgba(0,0,0,0.5)'}>
            {/* JAMBES */}
            {/* RIGHT LEG */}
            <Cylinder diameter={4}
                translate={{ x: -14.5, y: 0, z: -4 }}
                rotate={{ y: TAU / 4 }}
                length={24}
                color={'red'} />
            {/* LEFT LEG */}
            <Cylinder diameter={4}
                translate={{x: -14.5, y: 0, z: 4}}
                rotate={{ y: TAU/4}}
                length={24} />     
                {/* CHAUSSURE R */}
            <Shape path={[{ y: 0 }, { y: 4 }]} stroke={5} color={'red'} translate={{
                x: -29,
                // y: -2,
                z: -4
            }}
                rotate={{
                    x: -2.5,
                    y: -2,
                    // z: 0
                }}
            />
                {/* CHAUSSURE L */}
                <Shape path={[{ y: 0 }, { y: 4}]} stroke={5} color={'blue'} translate={{ 
                x: -29,
                // y: -4,
                z: 4
            }} rotate={{
                x: -10,
                y: 4,
                z: 0
            }} />

        </Cylinder>
    );

    return <Illustration zoom={8} translate={{ y: -30 }} rotate={props.rotation}>
        <Head />
        <Torso />
        <Legs />
    </Illustration>
})

export default Me;
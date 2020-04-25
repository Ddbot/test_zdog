import React, { useRef, useEffect, useState } from 'react';
import Zdog from 'zdog';
import { Cylinder, Ellipse, Box, Illustration, Canvas, Shape, Group, useZdog, useRender } from 'react-zdog';

import styled from 'styled-components';

import Chair from './Chair';
import Computer from './Computer';
import Pen from './Pen';
import Pot from './Pot';
import Smartphone from './Smartphone';
import Table from './Table';
import gsap from 'gsap';

const { TAU } = Zdog;
var quarterTurn = Math.sin(TAU / 8);

var torsoX = 3 / quarterTurn;
var shoulderX = torsoX + 1.5;
var shinEnd = { y: 22 };
var hipX = (8 / quarterTurn) / 2;

const Me = React.forwardRef((props, ref) => {    
    let headRef = useRef(null);
    let torsoRef = useRef(null);
    let rightArm = useRef(null);
    let leftArm = useRef(null);
    let rightForeArm = useRef(null);
    let leftForeArm = useRef(null);
    let legsRef = useRef(null);

    const Head = (props) => {
        {/* COU */ }
        return <Cylinder ref={headRef}
            // path={[{ y: 8 }, { y: 14 }]}
            diameter={4}
            length={6}
            stroke={false}
            // color={'#804d00'}
            color={'#995c00'}
            rotate={{ x: -TAU / 4 }}
            translate={{ y: 12.5 }}>
            {/* menton */}
            <Shape
                translate={{ y: 0, z: -2 }}
                stroke={7.5}
                color={'#995c00'}
                rotate={{ x: TAU / 4 }}>
                {/* front */}
                <Ellipse
                    diameter={2}
                    translate={{ y: -4 }}
                    stroke={4}
                    color = {'#995c00'}>
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
                        color = {'#995c00'}
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
                        color={'#995c00'}
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
                    translate={{ y: -1, z: 3.5 }}
                    rotate={{ z: TAU / 4 }}
                    scale={3}
                    fill={true}
                    stroke={0.5}
                    color={'white'}
                    closed={true} />
            </Shape>
        </Cylinder>
    };    
        
    const Bras = React.forwardRef((props,ref) => {
        return <Shape
            ref={ref}
            path={[{ y: 0 }, { y: 7 }]}
            translate={props.translate}
            rotate={props.rotate}
            color={props.color}
            stroke={4}>{props.children}</Shape>
    });
            
    const Torso = (props) => {
        return (
			<Shape
				ref={torsoRef}
				translate={{
					y: 25.3,
					z: 0
				}}
				rotate={
					{
						// z: TAU / 4
					}
				}
				path={[{ y: -torsoX }, { y: torsoX * 3 - 1 }]}
				color={"#DED381"}
				stroke={12}
                onClick={() => {}}>
				{/* EPAULES */}
				<Shape
					path={[{ x: 0 }, { x: 10 }]}
					color={"#FAE491"}
					stroke={8}
					translate={{
						x: -5,
						y: -6
					}}/>
				{/* LOGO TSHIRT */}
				<Shape
					// triangle
					path={[
						{ x: 0, y: -1.6 },
						{ x: 1.6, y: 1.6 },
						{ x: -1.6, y: 1.6 }
					]}
					stroke={0.5}
					color={"hsla(359, 85%, 74%, .5)"}
					translate={{ y: -7, z: 4 }}
				/>
				<Shape
					path={[
						{ x: -1.6, y: 2.58 },
						{ x: 1.6, y: 2.58 }
					]}
					// closed by default
					stroke={0.5}
					color={"hsla(203, 77%, 83%, 0.5)"}
					translate={{ y: -7, z: 4 }}
				/>
				{/* BRAS R */}
				<Group ref={rightArm}>
					<Bras
						color={"#F5F39A"}
						translate={{
							x: -torsoX - 3,
							y: -7
							// z: 4
						}}
						rotate={{
							x: 0.5,
							y: -0.5,
							z: TAU / 16
						}}
					>
						{/* AVANT BRAS R */}
						<Bras
							ref={rightForeArm}
							color={props.color}
							translate={{
								// x: -torsoX - 6,
								y: 7,
								z: 0
							}}
							rotate={{
								// mouvement du bras vers le haut avec X entre 0.5 et 1
								x: 0.5,
								y: -5,
								z: -0.5
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
								}}
							/>
						</Bras>
					</Bras>
				</Group>
				{/* BRAS L */}
				<Group ref={leftArm}>
					<Bras
						color={"#F5F39A"}
						translate={{
							x: torsoX + 3,
							y: -7,
							z: 0
						}}
						rotate={{
							// mouvement du bras vers le haut avec X
							x: 0.7,
							y: -1,
							z: -TAU / 16
						}}
					>
						{/* AVANT BRAS L */}
						<Bras
							ref={leftForeArm}
							color={props.color}
							translate={{
								x: -torsoX - 4,
								y: 8,
								z: 2
							}}
							rotate={{
								x: -2,
								y: 0,
								z: 5
							}}
						>
							{/* MAIN L */}
							<Shape
								stroke={4.7}
								color={props.color}
                                translate={{
									x: -.5,
									y: -3.5,
									z: .5
								}}
							/>
						</Bras>
					</Bras>
				</Group>
			</Shape>
		);
    };    

    const Legs = (props) => {
        // HANCHES
        return <Cylinder diameter={6} ref={legsRef} length={torsoX * 3 - 1} translate={{ y: 40 }} rotate={{ x: -TAU, y: -TAU / 4 }} color={'hsl(180, 25%, 20%)'}>
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
    
    const handleClick = () => {
        console.log(ref.current, ref);
    }

    useEffect(() => { 
        console.log(ref.current, ref);
    });

    return (
        <Illustration
            ref={ref}
            className="illustration"
				zoom={8}
				translate={{ y: -30 }}
				rotate={props.rotation }
				onClick={handleClick}>
				<Table className="table" />
				<Head className="head" />
                <Torso className="torso" color={"#995c00"} />
				<Legs className="legs" />
				<Chair className="chair" />
				<Computer className="computer" />
                <Smartphone className="smartphone" />
				<Group>
					<Pot className="pot" />
					<Pen className="pen" />
                </Group>            
        </Illustration>
	);
});

export default Me;

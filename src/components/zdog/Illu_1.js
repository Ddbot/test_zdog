import React, { useRef, useEffect, useState } from 'react';
import Zdog from 'zdog';
import { Anchor, Cone, Cylinder, Ellipse, Box, Illustration, Rect, Shape, Group, Hemisphere, useZdog } from 'react-zdog';

import Chair from './Chair';
import Computer from './Computer';
import Me from './Me';
import Pen from './Pen';
import Pot from './Pot';
import Smartphone from './Smartphone';
import Table from './Table';

const Illu_1 = (props) => {            
    return (
			<Illustration
				zoom={8}
				translate={{ y: -30 }}
				rotate={props.rotation || { x: 5.67, y: 5.67, z: 6.28 }}
				onClick={props.handleClick}>
				<Table />
				<Group>
					<Pot />
					<Pen />
				</Group>
                <Me />
				<Chair />
				<Computer />
				<Smartphone />
			</Illustration>
	);
};

export default Illu_1;
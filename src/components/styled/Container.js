import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	min-width: 960px;
	height: 60vh;

	margin-top: 13vh;

	font-size: 2rem;
	font-family: "Roboto";
	z-index: 1;

	p {
		
		width: 70vw;
	}
`;

export default Container;
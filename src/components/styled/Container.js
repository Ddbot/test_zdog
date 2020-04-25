import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: flex-start;
	// align-items: center;

	min-width: 960px;

	font-size: 2rem;
	font-family: "Roboto";
	z-index: 1;

	margin-top: 40vh;

	.illustration {		
		width: 50vw;	
		z-index: -1;
		// max-height: 30vw;			
	}

	.textContent {
		width: 50vw;
		max-height: 30vw;	
			

		p {
			width: 50vw;
		}
	}
`;

export default Container;
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-flow: row nowrap;

	justify-content: space-evenly;
	align-items: flex-start;


  	width: 100vw;

	font-size: 2rem;
	font-family: "Roboto";
	color: #002620;

	z-index: 1;


	align-self: center;

	&>canvas {
		overflow: visible;

		height: calc(92.13vh * 0.75);
		width: calc(92.13vh * 0.75);
	}

	&>.separator {
				height: calc(92.13vh * 0.75);
				border: 1px solid rgba(0, 38, 32, .7);
	}

	&>.textContent {
		display: flex;
		flex: 1;

		height: calc(92.13vh*0.75);
		max-width: calc(92.13vh*0.75);

		padding: 2rem;

		.highlight {
			color: rgba(245, 245, 245, 1);
			margin: .1rem;
		}

		&>p {
			font-size: 2rem;
			line-height: 2rem;

			line-height: 1.8;
			margin: auto 0;
		}
	}

	&>#logoGrid {
		height: calc(92.13vh*0.75);
		width: calc(92.13vh*0.75);
	}
`;

export default Container;
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

	&>canvas {
		overflow: visible;
		border: .5rem solid #002a24;

		max-height: calc(92.13 vh * 0.75);
		max-width: calc(92.13 vh * 0.75);

		box-shadow: -.5rem .5rem #017d6b;

	}

	.textContent {
		display: flex;
		flex: 1;

		min-height: calc(92.13vh*0.75);
		max-width: calc(92.13vh*0.75);

		.highlight {
			color: rgba(245, 245, 245, 1);
			margin: .1rem;
		}

		&>p {
			font-size: 2.2rem;
			line-height: 3rem;

			line-height: 1.8;
			margin: auto 0;
		}
	}
`;

export default Container;
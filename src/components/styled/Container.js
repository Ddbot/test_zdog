import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: flex-start;


	font-size: 2rem;
	font-family: "Roboto";
	z-index: 1;

	margin-top: 40vh;

	.illustration {		
		flex: 1;
		z-index: -1;
	}

	.textContent {
flex: 1;
	}
`;

export default Container;
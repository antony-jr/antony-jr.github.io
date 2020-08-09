import React from 'react';
import styled from 'styled-components';

const MainFlex = styled.div`
	width: 100%;
	height: 90vh;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: center;
	align-items: center;
`;

const IFH1 = styled.h1`
	font-size: 5vw;
	font-family: 'Indie Flower', cursive;
`;


function Index() {
	return (
		<MainFlex>
			<img style={{width: 'auto', height: '80%'}}src='stop.png' />
			<IFH1>
			~ Website Under Construction ~
			</IFH1>
		</MainFlex>
	);
}

export default Index;

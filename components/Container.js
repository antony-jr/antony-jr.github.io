import React from 'react';
import styled from 'styled-components';

const MainFlex = styled.div`
	width: 100%;
	min-height: 90vh;
	display: flex;
	overflow-y: hidden;
	justify-content: ${props => props.justify || 'center'};
	align-items: ${props => props.align || 'center'};
`;

const Contain = styled.section`
	width: ${props => props.width || '80%'};
	height: auto;
	display: flex;
	overflow-y:hidden;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

function Container(props) {
	var width = null;
	var justify = 'center';
	var align = 'center';

	if(typeof props.size == 'undefined') {
		width = '80%';
	}else {
		var str = props.size.toString().toLowerCase();
		if(str == 'lg') {
			width = '90%';
		}else if(str == 'md') {
			width = '80%';
		}else if(str == 'sm') {
			width = '60%';
		}else if(str == 'xs') {
			width = '40%';
		}
	}

	if(typeof props.align != 'undefined') {
		align = props.align.toString().toLowerCase();
	}

	if(typeof props.justify != 'undefined') {
		justify = props.justify.toString().toLowerCase();
	}

	return (
	   <MainFlex justify={justify} align={align}>
		   <Contain width={width}>
		   {props.children}
		   </Contain>
	   </MainFlex>
	);
}

export default Container;

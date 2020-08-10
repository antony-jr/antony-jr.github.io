import React from 'react';
import styled from 'styled-components';

const TypographyH1 = styled.h1`
	color: ${props => props.fontColor || ''};
	font-size: ${props => props.fontSize || ''};
	font-family: ${props => props.fontFamily || 'Indie Flower'};
`;


const TypographyH2 = styled.h2`
	color: ${props => props.fontColor || ''};
	font-size: ${props => props.fontSize || ''};
	font-family: ${props => props.fontFamily || 'Indie Flower'};
`;


const TypographyH3 = styled.h3`
	color: ${props => props.fontColor || ''};	
	font-size: ${props => props.fontSize || ''};
	font-family: ${props => props.fontFamily || 'Indie Flower'};
`;


const TypographyH4 = styled.h4`
	color: ${props => props.fontColor || ''};	
	font-size: ${props => props.fontSize || ''};
	font-family: ${props => props.fontFamily || 'Indie Flower'};
`;

const TypographyH5 = styled.h5`
	color: ${props => props.fontColor || ''};	
	font-size: ${props => props.fontSize || ''};
	font-family: ${props => props.fontFamily || 'Indie Flower'};
`;


const TypographyH6 = styled.h6`
	color: ${props => props.fontColor || ''};	
	font-size: ${props => props.fontSize || ''};
	font-family: ${props => props.fontFamily || 'Indie Flower'};
`;


function Typography(props) {
	var comp_type = null;
	var fontFamily = null;
	var fontSize = null;
	var color = '';

	if(typeof props.type == 'undefined') {
		comp_type = 'h1';
	}else {
		comp_type = props.type.toString().toLowerCase();;
	}

	if(typeof props.font == 'undefined') {
		fontFamily = 'Indie Flower';
	}else {
		fontFamily = props.font.toString().toLowerCase();
	}

	if(typeof props.size == 'undefined') {
		fontSize = '';
	} else {
		fontSize = props.size.toString().toLowerCase();
	}

	if(typeof props.color != 'undefined') {
		color = props.color.toString().toLowerCase();
	}

	if(comp_type == 'h1') {
		return (<TypographyH1 fontColor={color} 
			        fontFamily={fontFamily} fontSize={fontSize}>
				{props.children} </TypographyH1>);
	} else 	if(comp_type == 'h2') {
		return (<TypographyH2 fontColor={color} 
			fontFamily={fontFamily} fontSize={fontSize}>
				{props.children} </TypographyH2>);
	}  else if(comp_type == 'h3') {
		return (<TypographyH3 fontColor={color}  
			 fontFamily={fontFamily} fontSize={fontSize}>
				{props.children} </TypographyH3>);
	} else if(comp_type == 'h4') {
		return (<TypographyH4 fontColor={color} 
			fontFamily={fontFamily} fontSize={fontSize}>
				{props.children} </TypographyH4>);
	} else if(comp_type == 'h5') {
		return (<TypographyH5 fontColor={color} 
			fontFamily={fontFamily} fontSize={fontSize}>
				{props.children} </TypographyH5>);
	} else if(comp_type == 'h6') {
		return (<TypographyH6 fontColor={color} 
			fontFamily={fontFamily} fontSize={fontSize}>
				{props.children} </TypographyH6>);
	}  else {
		return (<TypographyH1 
			fontColor={color} 
			fontFamily={fontFamily} fontSize={fontSize}>
				{props.children} </TypographyH1>);
	}
}

export default Typography;

import React from 'react';
import styled from 'styled-components';

import Typography from '../components/Typography.js';
import AnimatedProfile from '../components/AnimatedProfile.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navbar from 'react-bootstrap/Navbar';

const WrapperRow = styled(Row)`
	min-height: 95vh;
	justify-content: center;
	align-items: flex-start;
`;


function Index() {
	return (
		<React.Fragment>
		<Navbar>
			<Navbar.Brand href="/">
				<img
				  src='/ajr_logo.png'
				  width="75px"
				  height="75px"
				  className="d-inline-block align-top"
				/>
			</Navbar.Brand>
  <Navbar.Toggle />
			{/*
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      v0.0.1
    </Navbar.Text>
  </Navbar.Collapse>*/}
</Navbar>
			<Container style={{marginTop: '-15px' }}fluid='lg'>
			<WrapperRow>
				<Col sm={4}>
			<AnimatedProfile
				src='/me_rgb.png'/>
				</Col>
			<Col sm={8}>
			<Typography 
				color='hotpink'
				type='h1' size='7vw' font='Monospace'>
				Hi.,
			</Typography>
			<Typography
				type='h3' size='calc(2vw + 12px)' font='Monospace'>
				I'm <b>Antony J.R</b>, An <b>Open Source Developer</b> and an <b>Aspiring Computer Scientist</b>.
			</Typography>
			</Col>
			</WrapperRow>
		</Container>

		</React.Fragment>
	);
}

export default Index;

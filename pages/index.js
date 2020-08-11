import React from 'react';
import styled from 'styled-components';

import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import Flash from 'react-reveal/Flash';
import Swing from 'react-reveal/Swing';

import Typography from '../components/Typography.js';
import AnimatedProfile from '../components/AnimatedProfile.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const WrapperRow = styled(Row)`
        margin-top: 30px;
	min-height: 80vh;
	justify-content: center;
	align-items: flex-start;
`;

function Index() {
	return (
		<React.Fragment>
			<Fade big opposite collapse>
			<Container fluid='lg'>
			<WrapperRow>
			<Col sm={8}>
				<Flash>
			<Typography 
				type='h2'font='Dosis Bold'>
				<b>Hi., I'm Antony.</b>
			</Typography>
				</Flash>
			<Typography
				type='h3'>
				I'm an <b>Open Source Developer</b> and <b>Aspiring Computer Scientist</b>.

				<br />	
			</Typography>
			<Typography
				type='p'>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend nisi in iaculis mattis. Vestibulum nec gravida magna. Vivamus volutpat lacus non iaculis gravida. Nulla sollicitudin id nisl nec lacinia. Curabitur vel nisi nec erat pulvinar commodo. Ut nec eros nisl. Donec ut velit ac ante elementum semper. Ut vulputate, lectus eget porta tempus, orci arcu vestibulum velit, nec aliquet lacus nulla ac mi. Nam nec interdum turpis. Etiam bibendum nibh id augue sagittis, at mattis enim vestibulum. Donec malesuada eu nunc vel dictum. Cras vestibulum sollicitudin diam, molestie pulvinar mi commodo non. Nam sagittis est ut neque pretium, a elementum leo tristique. Suspendisse at mollis odio, in euismod orci.

			</Typography>
			</Col>
							<Col sm={4}>
			<AnimatedProfile
				color1='#212121'
				color2='#424242'
				src='/me_rgb.png'/>
				</Col>
	
			</WrapperRow>
		</Container>
			</Fade>
		</React.Fragment>
	);
}

export default Index;

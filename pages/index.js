import React from 'react';
import styled from 'styled-components';

import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import Flash from 'react-reveal/Flash';
import Swing from 'react-reveal/Swing';
import Zoom from 'react-reveal/Zoom';

import Typography from '../components/Typography.js';
import AnimatedProfile from '../components/AnimatedProfile.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image'

import { SocialIcon } from 'react-social-icons';

const SIcon = styled(SocialIcon)`
	margin: 10px;
`;

const WrapperCol = styled(Col)`
	height: 400px;

	@media (max-width: 375px) {
		height: 350px;
	}

	@media (max-width: 330px) {
		height: 300px;
	}

	@media (max-width: 280px) {
		height: 250px;
	}
`;

function Index() {
	return (
		<React.Fragment>
			<Container style={{marginTop: '40px',}} fluid='lg'>
		
				<Zoom>
				<Row style={{justifyContent: 'center', flexWrap: 'wrap-reverse'}}>
					
					<WrapperCol> 
					
			<AnimatedProfile
				object1='/triangle.png'
				object2='/triangle_inverted_white.png'
				src='/me_rgb.png'/>
	
					</WrapperCol>
	
					<Col sm={8}>
			<Typography 
				type='h2'font='Dosis Bold'>
				<b>Hi., I'm Antony.</b>
			</Typography>
			<Typography
				type='h3'>
				I'm an <b>Open Source Developer</b> and <b>Aspiring Computer Scientist</b>.

				<br />	
			</Typography>
			<Typography
				type='p'>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend nisi in iaculis mattis. Vestibulum nec gravida magna. Vivamus volutpat lacus non iaculis gravida. Nulla sollicitudin id nisl nec lacinia. Curabitur vel nisi nec erat pulvinar commodo. Ut nec eros nisl. Donec ut velit ac ante elementum semper. Ut vulputate, lectus eget porta tempus, orci arcu vestibulum velit, nec aliquet lacus nulla ac mi. Nam nec interdum turpis. Etiam bibendum nibh id augue sagittis, at mattis enim vestibulum. Donec malesuada eu nunc vel dictum. Cras vestibulum sollicitudin diam, molestie pulvinar mi commodo non. Nam sagittis est ut neque pretium, a elementum leo tristique. Suspendisse at mollis odio, in euismod orci.

			</Typography>

				<div>
					<SIcon bgColor='black' url="https://twitter.com/antonyjr0"/>	
					<SIcon bgColor='black' url="https://www.youtube.com/channel/UCdcXDHx3gvC0Q9TuOOb7YRw"/>
					<SIcon bgColor='black' url="https://github.com/antony-jr"/>
					<SIcon bgColor='black' url="mailto:antonyjr@protonmail.com"/>
				</div>
	
			
				</Col>

				</Row>
				</Zoom>

				<Row style={{justifyContent: 'center', alignItems: 'center'}}>
					<Col style={{height: '500px', textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>
					<Zoom>
						<br/>
						<br/>
					<Image
					src="/updates_title.png" fluid/>
					</Zoom>
					<br/ >

					<br/>
					</Col>
				</Row>
				<Row style={{justifyContent: 'center', alignItems: 'center'}}>
					<Col style={{textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>
					<Zoom>
						<br/>
						<br/>
						<Image
					src="/pubkeys_title.png" fluid/>
					
					</Zoom>
					<br />
					<br />
					</Col>
				</Row>
				<Row style={{justifyContent: 'center', alignItems: 'center'}}>
					<Col style={{minWidth: '200px'}}>
						<Typography type='p'>
							This is my <b>primary key</b>, please follow this site to know if I change
							my key which will not be that often. <br/>
							You can encrypt sensitive data that you want to sent to me via email.
							I also will be using this key to sign all my data files.
							If you want encrypted response then you must send your GPG public key first.

						</Typography>
					</Col>
					<Col >
						<pre style={{overflowY: 'hidden', overflowX: 'auto', backgroundColor: 'black', color: 'green', padding: '10px'}}>
						{'pub   rsa4096/3156C8D324D12E73 2020-07-21 [SC]\n' +
						 '      54AFD2B538FF0107631D72AE3156C8D324D12E73\n' +
						 'uid                 [ultimate] J.R. Divya Antony <antonyjr@protonmail.com>\n' +
						 'sub   rsa4096/0AF1A22AF304CE37 2020-07-21 [E]\n'}
						</pre>
					</Col>
				</Row>
				<Row style={{justifyContent: 'center', alignItems: 'center', paddingBottom: '100px',}}>
					<Typography type='h4' font='Dosis Bold'>
						<a href='' style={{color: 'black'}}>
						Get GPG Public Key
						</a>
					</Typography>
				</Row>
			</Container>
		</React.Fragment>
	);
}

export default Index;

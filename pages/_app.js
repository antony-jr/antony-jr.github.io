import { useRouter } from 'next/router'
import Head from 'next/head';

// Import wallpaper animation css
import '../background/style.css';

import '../fonts/Dosis.css'
import '../fonts/DosisRegular.css';
import '../fonts/1942.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import styled from 'styled-components';

import Swing from 'react-reveal/Swing';

import Typography from '../components/Typography.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const LinkCursor = styled.div`
	cursor: pointer;
	width: calc(100% + 10px);
	height: ${props => props.height || 0};
	background: white;
	transition: all .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
	text-align: center;
`;


const DefaultCursor = styled.div`
	cursor: default;
`;


function TNavItem(props) {

	const [hoverColor, setHoverColor] = React.useState(
		props.active == true ? 'black' : '#424242');
	const [hover, setHover] = React.useState(
		props.active == true ? 'calc(100%)' : '0');

	return (
	  <Nav.Item>
	  <LinkCursor 
		  height={hover}
		  onMouseEnter={
			  () => {
				  if(props.active) {
					  return;
				  }
				  setHoverColor('black');
				  setHover('calc(100%)')
			  }
		  }

		  onMouseLeave={
			  () => {
				  if(props.active) {
					  return;
				  }
				  setHoverColor('#424242');
				  setHover('0');
			  }
		  }
	  >
	  <Typography type='h5' color={hoverColor}>
		  {props.children}
	  </Typography>
	  </LinkCursor>
	  </Nav.Item>
	);
}

function NavItemSeparator(props) {
  return (
	<Nav.Item style={{marginLeft: '14px', marginRight: '5px'}}>
		<DefaultCursor>
	<Typography type='h5'>
		/
	</Typography>
		</DefaultCursor>
	</Nav.Item>);
 
}




// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  	const router = useRouter()
	const [logoSwing, setLogoSwing] = React.useState(0);

	const handleMouseOverLogo = () => {
		// TODO: Check if it's safe to do this.
		setLogoSwing(logoSwing + 1);
	};

		return (<>
	   <Head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	   </Head>
	   <React.Fragment>
	   		<Navbar>
			<Navbar.Collapse className="justify-content-center">
			<Navbar.Brand href="/">
				<Swing spy={logoSwing}>
				<img
				  onMouseOver={handleMouseOverLogo}
				  src='/ajr_logo.png'
				  width="125px"
				  height="125px"
				  className="d-inline-block align-top"
				/>
				</Swing>
			</Navbar.Brand>
			</Navbar.Collapse>
  <Navbar.Toggle />
			{/*
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      v0.0.1
    </Navbar.Text>
  </Navbar.Collapse>*/}
</Navbar>
			<Navbar>
			<Navbar.Collapse className="justify-content-center">
			<Nav variant="pills" defaultActiveKey="/">
			<TNavItem active={router.pathname == '/'}>		  
				Home
			</TNavItem>
			<NavItemSeparator/>
			<TNavItem active={router.pathname == '/blog'}>		  
				Blog
			</TNavItem>
			<NavItemSeparator/>
			<TNavItem active={router.pathname == '/projects'}>		  
				Projects
			</TNavItem>
			<NavItemSeparator/>
			
			</Nav>
			</Navbar.Collapse>
			</Navbar>

		   <div
			style={{

				minHeight: '100vh',
			}}
		   >
		  <Component {...pageProps} />

		   </div>
		   <footer>
test
		   </footer>
	   </React.Fragment>
   </>);
}


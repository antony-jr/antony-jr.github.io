import Head from 'next/head';

import React from 'react';
import styled from 'styled-components';


import Zoom from 'react-reveal/Zoom';

import Typography from '../components/Typography.js';

import Image from 'react-bootstrap/Image'

export default function ErrorPage404() {
	return (
		<React.Fragment>
		<Zoom>
			<div style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				height: '400px',
			}}>
				<Image
				 fluid
				 src={"/error_anim.png"}
				/>
				<Typography type='h4' font='Dosis Bold'>
					404, File not Found.
				</Typography>
			</div>
		</Zoom>
		</React.Fragment>
	);
}

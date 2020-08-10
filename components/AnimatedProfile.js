import React from 'react';
import styled from 'styled-components';


import TweenOne from 'rc-tween-one';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';

TweenOne.plugins.push(PathPlugin);

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};


const ShadowSvg = styled.svg`
  -webkit-filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
  filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
`;

const SvgDiv = styled.div`
	max-width: '100%';
	max-height: 70vh;

	@media (min-width: 200px) {
		max-height: 1px;
	}

	@media ${device.laptop} {
		max-height: 70vh;
	}

	@media ${device.mobileS} {
		max-height: 10vh;
	};

	@media ${device.mobileM} {
		max-height: 15vh;
	};
	
	@media ${device.mobileL} {
		max-height: 40vh;
	};

	@media (min-width: 426px) and (max-width: 550px) {
		max-height: 50vh;
	}

	@media ${device.laptopL} {
		max-height: 80vh
	};

	@media ${device.desktopL} {
		max-height: 80vh;
	};

`;

function AnimatedProfile(props) {
	var color1 = '#212121';
	var color2 = '#F50057';

	const animate = {
	blackSquare: {
		yoyo: true,
		loop: true,
		y: 30,
		duration: 3000,
		delay: 100,
	},
	whiteSquare: {
		yoyo: true,
		loop: true,
		y: 40,
		duration: 4000,
		delay: 200,
	},
	};

	if(typeof props.color1 != 'undefined') {
		color1 = props.color1.toString().toLowerCase();
	}

	if(typeof props.color2 != 'undefined') {
		color2 = props.color2.toString().toLowerCase();
	}

	return ( 
	<SvgDiv>
		<ShadowSvg viewBox="0 0 480 500">
		<g stroke="none" 
		   strokeWidth="1" fill="none" fillRule="evenodd">
		  <g id="Group-22" transform="translate(0,40)">
			<image
			 id="profile"
			 alt="profile"
			 transform={
			 "translate(120, 18) "+
			 "rotate(8.00) "+
			 "translate(-184, -18)"}
			 xlinkHref={props.src}
			 width="220px"
			 height="320px"
			 x="220.8"
			 y="40.8"/>
		   </g>
		</g>

		<g stroke="none" 
		   strokeWidth="1" 
		   fill={color1} 
		   fillRule="evenodd" 
		   transform="translate(0,30)">
				
		<g id="Group-13" 
		   transform="translate(0.000, 41.000)">
		   <TweenOne component='g' 
			     yoyo={true} 
			     repeat={-1} 
			     animation={animate.blackSquare}>
			<rect
			stroke={color1}
			strokeWidth="1.6"
			transform={
			"translate(184.0, 18.0) "+
			"rotate(8.00) "+
			"translate(-184.00, -18.000) "}
			x="120.8"
			y="0"
			width="50px"
			height="50px"
			rx="3.6"
			/>
		     </TweenOne>
		 </g>
		</g>



		<g stroke="none" 
		   strokeWidth="1" 
		   fill={color2}
		   fillRule="evenodd" 
		   transform="translate(0,30)">
		  <g id="Group-13" transform="translate(0.000, 41.000)">
		   <TweenOne 
			 component='g'
			 yoyo={true} 
			 repeat={-1}
			 animation={animate.whiteSquare}>
			 <rect
			  stroke={color2}
			  strokeWidth="2.6"
			  transform={
			  "translate(184.0, 18.0) "+
			  "rotate(8.00) "+
			  "translate(-184.00, -18.000) "}
			  x="340.8"
			  y="240.8"
			  width="60px"
			  height="60px"
			  rx="3.6"/>
		   </TweenOne>
		  </g>
		</g>
	     </ShadowSvg>
	</SvgDiv>);
}

export default AnimatedProfile;

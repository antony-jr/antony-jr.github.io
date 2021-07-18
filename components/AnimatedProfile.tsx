import React from "react";
import styled from "styled-components";

import { Box } from "@chakra-ui/react";

import TweenOne from "rc-tween-one";
import PathPlugin from "rc-tween-one/lib/plugin/PathPlugin";

TweenOne.plugins.push(PathPlugin);

const ShadowSvg = styled.svg`
  -webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
  z-index: -1;
`;

function AnimatedProfile(props) {
  var object1 = null;
  var object2 = null;

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
    picture: {
      yoyo: true,
      loop: true,
      repeat: -1,
      y: -30,
      duration: 2000,
      delay: 100,
    },
    picHold: {
      yoyo: true,
      loop: true,
      repeat: -1,
      y: -20,
      duration: 1000,
      delay: 100,
    },
  };

  if (typeof props.object1 != "undefined") {
    object1 = props.object1.toString().toLowerCase();
  }

  if (typeof props.object2 != "undefined") {
    object2 = props.object2.toString().toLowerCase();
  }

  return (
    <Box
       w={["230px", "300px", "550px", "600px", "900px", "900px"]}	  
       h="auto"
    >
      <ShadowSvg viewBox="0 0 480 500">
        <g stroke="none" strokeWidth="1" fill="white" fillRule="evenodd">
          <g id="Group-22" transform="translate(0,40)">
            <TweenOne
              component="g"
              yoyo={true}
              repeat={-1}
              animation={animate.picture}
            >
              <rect
                stroke="white"
                strokeWidth="1.6"
                transform={
                  "translate(124.5, 18.0) " +
                  "rotate(8.00) " +
                  "translate(-184.00, -18.000) "
                }
                x="200.8"
                y="2"
                width="240px"
                height="390px"
              />

              <image
                id="profile"
                transform={
                  "translate(120, 18) " +
                  "rotate(8.00) " +
                  "translate(-184, -18)"
                }
                xlinkHref={props.src}
                width="250px"
                height="370px"
                x="200.8"
                y="10.8"
              />
            </TweenOne>
          </g>
        </g>

        <g
          stroke="none"
          fill="none"
          fillRule="evenodd"
          transform="translate(0,30)"
        >
          <g id="Group-13" transform="translate(0.000, 41.000)">
            <TweenOne
              component="g"
              yoyo={true}
              repeat={-1}
              animation={animate.blackSquare}
            >
              <image
                xlinkHref={object1}
                transform={
                  "translate(184.0, 18.0) " +
                  "rotate(8.00) " +
                  "translate(-184.00, -18.000) "
                }
                x="120.8"
                y="-80"
                width="110px"
                height="110px"
              />
            </TweenOne>
          </g>
        </g>

        <g id="Group-13" transform="translate(0.000, 41.000)">
          <TweenOne
            component="g"
            yoyo={true}
            repeat={-1}
            animation={animate.blackSquare}
          >
            <image
              xlinkHref={object2}
              transform={
                "translate(184.0, 18.0) " +
                "rotate(8.00) " +
                "translate(-184.00, -18.000) "
              }
              x="290.8"
              y="280.8"
              width="110px"
              height="110px"
            />
          </TweenOne>
        </g>
      </ShadowSvg>
    </Box>
  );
}

export default AnimatedProfile;

import React from "react";
import styled from "styled-components";

const CardThumb = styled.div`
  padding-bottom: 60%;
  background-size: cover;
  background-position: center center;
  background-image: url(${(props) => "/" + props.src + ".png" || ""});
`;

export default CardThumb;

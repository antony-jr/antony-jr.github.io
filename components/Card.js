import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  text-decoration: none;
  color: #444;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  min-height: 100%;

  cursor: pointer;
  position: relative;
  top: 0;
  transition: all 0.2s ease-in;

  &:hover {
    top: -3px;
    box-shadow: 0 6px 5px rgba(0, 0, 0, 0.3);
  }
`;

export default Card;

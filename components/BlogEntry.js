import React from 'react';
import styled from 'styled-components';


import Typography from '../../components/Typography.js';



const Band = styled.div`
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
  
  display: grid;
  
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  
  @media (min-width: 30em) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 60em) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.a`
background: white;
  text-decoration: none;
  color: #444;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  min-height: 100%;
  
  // sets up hover state
  position: relative;
  top: 0;
  transition: all .1s ease-in;
    
  &:hover {
    top: -2px;
    box-shadow: 0 4px 5px rgba(0,0,0,0.2);
  }
  
  article {
    padding: 20px;
    flex: 1;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  h1 {
    font-size: 20px;
    margin: 0;
    color: #333;
  }
  
  p {
    flex: 1;
    line-height: 1.4;
  }
  
  span {
    font-size: 12px;
    font-weight: bold;
    color: #999;
    text-transform: uppercase;
    letter-spacing: .05em;
    margin: 2em 0 0 0;
  }
`;

const Thumb = styled.div`
   padding-bottom: 60%;
    background-size: cover;
    background-position: center center;
  
`;

const MainItem = styled.div`
.item-1 {
  @media (min-width: 60em) {
    grid-column: 1 / span 2;
    
    h1 {
      font-size: 24px;
    }
  }
}
`;

function BlogEntry(props) {
	return (
		<Card href={props.url}>
		<Thumb style={{backgroundImage: 'url('+props.image+')'}}/> 
		<article>
       		<h1>{props.title}</h1>
        	<span>{props.author}</span>
      		</article>
		</Card>
	);
}

export default BlogEntry;

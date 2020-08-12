import React from 'react';
import styled from 'styled-components';

import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Media from 'react-bootstrap/Media'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import Typography from '../../components/Typography.js';

const BlogList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

const DateDiv = styled.div`
	font: bold 1rem 'Dosis Bold';
	font-weight: 700px;
	flex-grow: 0;
	margin: 10px;
	color: white;
`;

const DotDiv = styled.div`
	flex-grow: 0;
	margin: 10px;
`;

const TitleDiv = styled.div`
	
	font: bold 1.1rem 'Dosis Regular';
	flex-grow: 1;
	max-width: 400px;
`;

function Blog(props) {
	return (
		<React.Fragment>
			<div style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
				<table style={{display: 'table', padding: '20px'}}>
				{props.posts.map((key, index) => (
				  <tr key={index}>
				   <td style={{padding: '20px',}}>
				    <div style={{background: 'black'}}>
				      <DateDiv>{key.slug}</DateDiv>
				    </div>
				   </td>
				   
				   <td style={{paddingRight: '10px', width: '300px'}}>
				    <TitleDiv>
				     {key.badge && <Badge pill variant="dark">
					      {key.badge}
				      </Badge>}{' '}	
					    {key.title}
				    </TitleDiv>
				    <Typography type='p'>
				      by {key.author}
				    </Typography>
				   </td>
				  </tr>))}
			         </table>
			</div>
		</React.Fragment>
	);
}

export async function getStaticProps() {
  //get posts & context from folder
  const posts = (context => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      const value = values[index]
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default)
      return {
	      ...document.data,
	      slug
      }
    })
    return data
  })(require.context('../../posts', true, /\.md$/))

  return {
    props: {
      posts: posts,
    },
  }
}

export default Blog;

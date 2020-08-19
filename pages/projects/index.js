import Head from "next/head";

import React from "react";
import styled from "styled-components";

import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import Zoom from "react-reveal/Zoom";

import Typography from "../../components/Typography.js";
import FadeTop from "../../components/FadeTop.js";
import FadeBottom from "../../components/FadeBottom.js";

import CardGrid from "../../components/CardGrid.js";
import Card from "../../components/Card.js";
import CardArticle from "../../components/CardArticle.js";
import CardSpan from "../../components/CardSpan.js";
import CardThumb from "../../components/CardThumb.js";



import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "react-bootstrap/Image";

const MarkdownStyles = styled.div`
  font-family: "Dosis Regular";
`;

function ProjectCard(props) {
  return (
    <Zoom>
      <Card
        onClick={() => {
          window.location.href = props.url;
        }}
      >
        {props.image && <CardThumb src={props.image} />}
        <CardArticle>
          <Typography type="h2" font="Dosis Bold">
            {props.title}
          </Typography>
	<ReactMarkdown renderers={{root: MarkdownStyles}} source={props.description}/>
        </CardArticle>
      </Card>
    </Zoom>
  );
}



const ProjectFlex = styled.div`
  flex: 1 1 auto;
  width: 33.33333333333%;

  @media (max-width: 600px) {
    width: 50%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;



function Projects(props) {

  return (
    <React.Fragment>
      <Head>
        <title>antonyjr.in | Projects</title>
      </Head>
      <FadeTop />
      <div style={{ width: "100%", backgroundColor: "white" }}>
        <Container fluid="lg">
         <Row style={{ display: "flex", flexWrap: "wrap" }}>
		 {props.projects.flex1 && <ProjectFlex>
              {props.projects.flex1.map((key, index) => (
                <ProjectCard
                  key={index}
                  title={key.frontmatter.title}
                  description={key.markdownBody}
                  slug={key.slug}
	          image={key.frontmatter.image}
	          url={key.frontmatter.url}
		/>
              ))}
            </ProjectFlex>}
		 {props.projects.flex2 && 
		 <ProjectFlex>
              {props.projects.flex2.map((key, index) => (
                <ProjectCard
                  key={index}
                  title={key.frontmatter.title}
                  description={key.markdownBody}
                  slug={key.slug}
	          image={key.frontmatter.image}
		  url={key.frontmatter.url}
		/>
              ))}
            </ProjectFlex>}
		 {props.projects.flex3 &&
		 <ProjectFlex>
              {props.projects.flex3.map((key, index) => (
                <ProjectCard
                  key={index}
                  title={key.frontmatter.title}
                  description={key.markdownBody}
                  slug={key.slug}
	          image={key.frontmatter.image}
			url={key.frontmatter.url}
		/>
              ))}
            </ProjectFlex>}
          </Row>
	</Container>
      </div>
      <FadeBottom />
    </React.Fragment>
  );
}

export async function getStaticProps() {
  //get posts & context from folder
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      const value = values[index];
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../../projects", true, /\.md$/));

  return {
    props: {
     projects: {
      flex1: posts.slice(0, 6),
      flex2: posts.slice(6, 12), 
      flex2: posts.slice(12, 18),
     }
    },
  };
}

export default Projects;

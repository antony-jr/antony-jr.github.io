import Head from "next/head";

import React from "react";
import styled from "styled-components";

import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import Zoom from "react-reveal/Zoom";

import Typography from "../../components/Typography.js";
import FadeTop from "../../components/FadeTop.js";
import FadeBottom from "../../components/FadeBottom.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

const MarkdownStyles = styled.div`
  font-family: "Dosis Regular";
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
          <Row style={{ justifyContent: "center", alignItems: "center" }}>
            <Col>
              <Carousel>
                {props.projects.map((key, index) => (
                  <Carousel.Item>
                    <Image
                      fluid
                      className="d-block w-100"
                      src={key.frontmatter.image}
                    />
                    <Carousel.Caption>
                      <Typography type="h1" font="Dosis Bold">
                        {key.frontmatter.projectName}
                      </Typography>
                      <ReactMarkdown
                        renders={{
                          root: MarkdownStyles,
                        }}
                        source={key.markdownBody}
                      />
                      <a
                        className="BlogLink"
                        href={key.frontmatter.url}
                        style={{ color: "white" }}
                      >
                        <Typography type="h3">Project Page</Typography>
                      </a>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
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
      projects: posts,
    },
  };
}

export default Projects;

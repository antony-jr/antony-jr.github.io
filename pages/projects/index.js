import Head from "next/head";

import React from "react";
import styled from "styled-components";

import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import Fade from "react-reveal/Fade";

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

import Button from "react-bootstrap/Button";

const MarkdownStyles = styled.div`
  font-family: "Dosis Regular";
`;

const CenterWhenMobile = styled.div`
  text-align: left;

  @media (max-width: 576px) {
    text-align: center;
  }
`;

function VerticalLine(props) {
  console.log(props.index);
  console.log(props.length);
  if (props.index + 1 != props.length) {
    return (
      <Row style={{ marginTop: "40px", marginBottom: "40px" }}>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image fluid width="150px" height="150px" src="/vertical_line.png" />
        </Col>
      </Row>
    );
  } else {
    return <div />;
  }
}

function ProjectEntry(props) {
  return (
    <Fade>
      <Row>
        <Col
          sm={6}
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            fluid
            width={props.imageWidth ? props.imageWidth : "auto"}
            height={props.imageHeight ? props.imageHeight : "auto"}
            src={props.image}
          />
        </Col>
        <Col
          sm={6}
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <CenterWhenMobile>
            <Typography type="h1" font="Dosis Bold">
              {props.title}
            </Typography>
            <ReactMarkdown
              renderers={{ root: MarkdownStyles }}
              source={props.markdown}
            />
            <Button
              variant="outline-dark"
              onClick={() => {
                window.open(props.url, "_blank");
              }}
            >
              <Typography type="h5" font="Dosis Regular">
                Project Page
              </Typography>
            </Button>
          </CenterWhenMobile>
        </Col>
      </Row>
      <VerticalLine index={props.index} length={props.length} />
    </Fade>
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
          {props.projects.length > 0
            ? props.projects.map((key, index) => (
                <ProjectEntry
                  key={index}
                  index={index}
                  length={props.projects.length}
                  url={key.frontmatter.url}
                  markdown={key.markdownBody}
                  title={key.frontmatter.title}
                  image={key.frontmatter.image}
                  imageWidth={key.frontmatter.imageWidth}
                  imageHeight={key.frontmatter.imageHeight}
                />
              ))
            : null}
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

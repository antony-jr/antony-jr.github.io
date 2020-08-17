import React from "react";
import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Typography from "../../../components/Typography.js";
import FadeTop from "../../../components/FadeTop.js";
import FadeBottom from "../../../components/FadeBottom.js";

import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import { BsTag } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";

const ReactMarkdownStyles = styled.div`
  font-family: "Dosis Regular";

  h1 {
    font-family: "Dosis Regular";

    @media (max-width: 331px) {
      font-size: 0.5rem;
    }

    @media (max-width: 191px) {
      font-size: 0.2rem;
    }
  }

  p {
    font-family: "Dosis Regular";
  }
`;

function Post(props) {
  return (
    <React.Fragment>
      <FadeTop />
      <div style={{ backgroundColor: "white", width: "100%" }}>
        <Container fluid="md">
          <Row
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Col>
              <Typography type="h1" font="Dosis Bold">
                {props.frontmatter.title}
              </Typography>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div style={{ margin: "10px" }}>
                  {props.frontmatter.tag && (
                    <Typography type="p" color="rgba(158,158,158 ,1)">
                      <BsTag />
                      {" " + props.frontmatter.tag + " "}
                    </Typography>
                  )}
                </div>
                <div style={{ margin: "10px" }}>
                  {props.frontmatter.read && (
                    <Typography type="p" color="rgba(158,158,158 ,1)">
                      <BsFillClockFill style={{ verticalAlign: "sub" }} />
                      {" " + props.frontmatter.read + " min read"}
                    </Typography>
                  )}
                </div>
              </div>
            </Col>
          </Row>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Col style={{ maxWidth: "80%" }}>
              <ReactMarkdownStyles>
                <ReactMarkdown source={props.markdownBody} />
              </ReactMarkdownStyles>
            </Col>
          </Row>
          <Row
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: "100px",
            }}
          >
            <Col>
              <a href="/">
                <Typography type="h4" font="Dosis Bold">
                  Previous
                </Typography>
                <Typography type="p">Something to do with your Mind</Typography>
              </a>
            </Col>
            <Col
              style={{
                textAlign: "right",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <a href="/">
                <Typography type="h4" font="Dosis Bold">
                  Next
                </Typography>
                <Typography type="p">
                  Something to do with your Mind Part 2
                </Typography>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <FadeBottom />
    </React.Fragment>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const content = await import(`../../../posts/${slug}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
      slug,
    },
  };
}

export async function getStaticPaths() {
  //get all .md files in the posts dir
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
      return slug;
    });
    return data;
  })(require.context("../../../posts", true, /\.md$/));

  console.log(posts);

  // create paths with `slug` param
  const paths = posts.map((slug) => `/blog/post/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

export default Post;

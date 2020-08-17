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
import { BsCalendarFill } from "react-icons/bs";

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
                <div style={{ margin: "10px" }}>
                  {props.date && (
                    <Typography type="p" color="rgba(158,158,158 ,1)">
                      <BsCalendarFill style={{ verticalAlign: "sub" }} />
                      {" " + props.date + " "}
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
              {props.prevPost && (
                <a className="BlogLink" href="/">
                  <Typography type="h4" font="Dosis Bold">
                    Previous
                  </Typography>
                  <Typography type="p">{props.prevPost.title}</Typography>
                  <Typography type="p" color="rgba(158,158,158 ,1)">
                    {" " + props.prevPost.date + " "}
                  </Typography>
                </a>
              )}
            </Col>
            <Col
              style={{
                textAlign: "right",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              {props.nextPost && (
                <a className="BlogLink" href="/">
                  <Typography type="h4" font="Dosis Bold">
                    Next
                  </Typography>
                  <Typography type="p">{props.nextPost.title}</Typography>
                  <Typography type="p" color="rgba(158,158,158 ,1)">
                    {" " + props.nextPost.date + " "}
                  </Typography>
                </a>
              )}
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

  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slugName = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      const value = values[index];
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default);

      return {
        title: document.data.title,
        slugName,
      };
    });
    return data;
  })(require.context("../../../posts", true, /\.md$/));

  function validFile(entry) {
    var slugName = entry.slugName;
    var r = slugName.split("-");
    if (r.length != 3) {
      return false;
    }

    // Check if it's a valid ISO Date.
    var year = Number(r[0]),
      month = Number(r[1]),
      day = Number(r[2]);

    if (day > 31 || month > 12) {
      return false;
    }

    return true;
  }

  var workingPosts = posts.filter(validFile);
  workingPosts.sort(function (a, b) {
    const bd = new Date(b.slugName);
    const ad = new Date(a.slugName);
    return bd - ad;
  });

  function getDate(slugName) {
    var r = slugName.split("-");
    if (r.length < 3) {
      return new Date("Invalid");
    }
    var year = Number(r[0]),
      month = Number(r[1]),
      day = Number(r[2]);
    return new Date(year + "-" + month + "-" + day);
  }

  var prevPost = null;
  var nextPost = null;
  for (let n = 0; n < workingPosts.length; ++n) {
    if (workingPosts[n].slugName == slug) {
      if (n + 1 < workingPosts.length) {
        prevPost = workingPosts[n + 1];
      }
      break;
    }
    nextPost = workingPosts[n];
  }

  if (prevPost) {
    prevPost.date = getDate(prevPost.slugName).toDateString();
  }
  if (nextPost) {
    nextPost.date = getDate(nextPost.slugName).toDateString();
  }

  return {
    props: {
      frontmatter: data.data,
      date: getDate(slug).toDateString(),
      markdownBody: data.content,
      slug,
      prevPost,
      nextPost,
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

  // create paths with `slug` param
  const paths = posts.map((slug) => `/blog/post/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

export default Post;

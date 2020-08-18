import Head from "next/head";

import React from "react";
import styled from "styled-components";

import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import Flash from "react-reveal/Flash";
import Swing from "react-reveal/Swing";
import Zoom from "react-reveal/Zoom";

import Typography from "../components/Typography.js";
import AnimatedProfile from "../components/AnimatedProfile.js";
import FadeTop from "../components/FadeTop.js";
import FadeBottom from "../components/FadeBottom.js";

// Blog Cards
import CardGrid from "../components/CardGrid.js";
import Card from "../components/Card.js";
import CardArticle from "../components/CardArticle.js";
import CardSpan from "../components/CardSpan.js";
import CardThumb from "../components/CardThumb.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

import { SocialIcon } from "react-social-icons";

import { BsTag } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import { BsCalendarFill } from "react-icons/bs";

const SIcon = styled(SocialIcon)`
  margin: 10px;
`;

const WrapperCol = styled(Col)`
  height: 400px;

  @media (max-width: 600px) {
    height: 500px;
  }

  @media (max-width: 375px) {
    height: 350px;
  }

  @media (max-width: 330px) {
    height: 300px;
  }

  @media (max-width: 280px) {
    height: 250px;
  }
`;

const UpdatesFlex = styled.div`
  flex: 1 1 auto;
  width: 33.33333333333%;

  @media (max-width: 600px) {
    width: 50%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

function BlogCard(props) {
  return (
    <Fade>
      <Card
        onClick={() => {
          window.location.href = "/blog/post/" + props.slug;
        }}
      >
        {props.imageProvided && <CardThumb src={props.slug} />}
        <CardArticle>
          <Typography type="h4" font="Dosis Bold">
            {props.title}
          </Typography>
          <Typography type="p">{props.description}</Typography>
          <div style={{ width: "100%", display: "flex" }}>
            {props.tag && (
              <div style={{ margin: "10px" }}>
                <Typography type="p" size="0.8rem">
                  <BsTag /> {props.tag}{" "}
                </Typography>
              </div>
            )}
            {props.date && (
              <div style={{ margin: "10px" }}>
                <Typography type="p" size="0.8rem">
                  <BsCalendarFill style={{ verticalAlign: "sub" }} />{" "}
                  {props.date}
                </Typography>
              </div>
            )}
          </div>
          {props.imageCopyright && (
            <Typography type="p" size="0.9rem">
              Image (c) {props.imageCopyright}
            </Typography>
          )}
        </CardArticle>
      </Card>
    </Fade>
  );
}

function Index(props) {
  return (
    <React.Fragment>
      <Head>
        <title>antonyjr.in</title>
      </Head>
      <FadeTop />
      <div style={{ width: "100%", backgroundColor: "white" }}>
        <Container fluid="lg">
          <Row style={{ justifyContent: "center", flexWrap: "wrap-reverse" }}>
            <WrapperCol>
              <Fade>
                <AnimatedProfile
                  object1="/triangle.png"
                  object2="/triangle_inverted_white.png"
                  src="/me_rgb.png"
                />
              </Fade>
            </WrapperCol>

            <Col sm={8}>
              <Typography type="h2" font="Dosis Bold">
                <Fade>
                  <ReactMarkdown source={props.site.about.frontmatter.title} />
                </Fade>
              </Typography>
              <Typography type="h3">
                <Fade>
                  <ReactMarkdown
                    source={props.site.about.frontmatter.subtitle}
                  />
                  {/*
				I'm an <b>Open Source Developer</b> and <b>Aspiring Computer Scientist</b>.*/}
                  <br />
                </Fade>
              </Typography>
              <Fade>
                <Typography type="p">
                  <ReactMarkdown source={props.site.about.markdownBody} />
                </Typography>
              </Fade>
              <Zoom>
                <div>
                  <SIcon bgColor="black" url="https://twitter.com/antonyjr0" />
                  <SIcon
                    bgColor="black"
                    url="https://www.youtube.com/channel/UCdcXDHx3gvC0Q9TuOOb7YRw"
                  />
                  <SIcon bgColor="black" url="https://github.com/antony-jr" />
                  <SIcon bgColor="black" url="mailto:antonyjr@protonmail.com" />
                </div>
              </Zoom>
            </Col>
          </Row>

          {props.posts.length > 0 && (
            <Row style={{ justifyContent: "center", alignItems: "center" }}>
              <Col
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Zoom>
                  <br />
                  <br />
                  <Image src="/updates_title.png" fluid />
                </Zoom>
                <br />

                <br />
              </Col>
            </Row>
          )}
          <Row style={{ display: "flex", flexWrap: "wrap" }}>
            <UpdatesFlex>
              {props.posts.flex1.map((key, index) => (
                <BlogCard
                  key={index}
                  dark={key.dark}
                  title={key.title}
                  description={key.description}
                  date={key.date}
                  author={key.author}
                  tag={key.tag}
                  slug={key.slug}
                  cardSize={key.cardSize}
                  imageProvided={key.imageProvided}
                  imageCopyright={key.imageCopyright}
                />
              ))}
            </UpdatesFlex>
            <UpdatesFlex>
              {props.posts.flex2.map((key, index) => (
                <BlogCard
                  key={index}
                  dark={key.dark}
                  title={key.title}
                  description={key.description}
                  date={key.date}
                  author={key.author}
                  tag={key.tag}
                  slug={key.slug}
                  cardSize={key.cardSize}
                  imageProvided={key.imageProvided}
                  imageCopyright={key.imageCopyright}
                />
              ))}
            </UpdatesFlex>
            <UpdatesFlex>
              {props.posts.flex3.map((key, index) => (
                <BlogCard
                  key={index}
                  dark={key.dark}
                  title={key.title}
                  description={key.description}
                  date={key.date}
                  author={key.author}
                  tag={key.tag}
                  slug={key.slug}
                  cardSize={key.cardSize}
                  imageProvided={key.imageProvided}
                  imageCopyright={key.imageCopyrigh}
                />
              ))}
            </UpdatesFlex>
          </Row>
          <Row style={{ justifyContent: "center", alignItems: "center" }}>
            <Col
              style={{
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Zoom>
                <br />
                <br />
                <Image src="/pubkeys_title.png" fluid />
              </Zoom>
              <br />
              <br />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", alignItems: "center" }}>
            <Col style={{ minWidth: "200px" }}>
              <Fade>
                <Typography type="p">
                  This is my <b>primary key</b>, please follow this site to know
                  if I change my key which will not be that often. <br />
                  You can encrypt sensitive data that you want to sent to me via
                  email. I also will be using this key to sign all my data
                  files. If you want encrypted response then you must send your
                  GPG public key first.
                </Typography>
              </Fade>
            </Col>
            <Col>
              <Fade>
                <pre
                  style={{
                    overflowY: "hidden",
                    overflowX: "auto",
                    backgroundColor: "black",
                    color: "green",
                    padding: "10px",
                  }}
                >
                  {"pub   rsa4096/3156C8D324D12E73 2020-07-21\n" +
                    "      54AFD2B538FF0107631D72AE3156C8D324D12E73\n" +
                    "uid   J.R. Divya Antony <antonyjr@protonmail.com>\n" +
                    "sub   rsa4096/0AF1A22AF304CE37 2020-07-21\n"}
                </pre>
              </Fade>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", alignItems: "center" }}>
            <Zoom>
              <Typography type="h4" font="Dosis Bold">
                <a href="/gpg.asc" style={{ color: "black" }} download>
                  Get GPG Public Key
                </a>
              </Typography>
            </Zoom>
          </Row>

          <Row style={{ justifyContent: "center", alignItems: "center" }}>
            <Col
              style={{
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Zoom>
                <br />
                <br />
                <Image src="/contact_title.png" fluid />
              </Zoom>
              <br />
              <br />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", alignItems: "center" }}>
            <Col
              style={{
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Zoom>
                <Typography type="h5" style={{ textAlign: "left" }}>
                  <SIcon url="mailto:antonyjr@protonmail.com" />
                  antonyjr@pm.me
                </Typography>
              </Zoom>
            </Col>
            <Col
              style={{
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Zoom>
                <Typography type="h5" style={{ textAlign: "left" }}>
                  <SIcon url="https://twitter.com/antonyjr0" />
                  @antonyjr0
                </Typography>
              </Zoom>
            </Col>
            <Col
              style={{
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Zoom>
                <Typography type="h5" style={{ textAlign: "left" }}>
                  <SIcon url="https://github.com/antony-jr/ama" />
                  AMA
                </Typography>
              </Zoom>
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
        ...document.data,
        slug,
      };
    });
    return data;
  })(require.context("../posts", true, /\.md$/));

  const site = ((context) => {
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
  })(require.context("../site", true, /\.md$/));

  function validFile(entry) {
    var slugName = entry.slug;
    var r = slugName.split("-");
    if (r.length < 3) {
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

  function getDate(entry) {
    var slugName = entry.slug;
    var r = slugName.split("-");
    if (r.length < 3) {
      return new Date("Invalid");
    }
    var year = Number(r[0]),
      month = Number(r[1]),
      day = Number(r[2]);
    return new Date(year + "-" + month + "-" + day);
  }

  var workingPosts = posts.filter(validFile);
  workingPosts.sort(function (a, b) {
    const bd = new Date(b.slug);
    const ad = new Date(a.slug);
    return bd - ad;
  });

  var updates = workingPosts.slice(0, 9); // Take up first 9 entries
  for (let n = 0; n < updates.length; ++n) {
    var cardSize = 1;
    if (n == 0) {
      cardSize = 2;
    }
    updates[n].cardSize = cardSize.toString();
    updates[n].dark = Math.random() >= 0.5;
    updates[n].date = getDate(updates[n]).toDateString();
  }

  var about = null;
  for (let n = 0; n < site.length; ++n) {
    if (site[n].slug == "about") {
      about = site[n];

      break;
    }

    // More details will be added later
  }

  return {
    props: {
      posts: {
        length: updates.length,
        flex1: updates.slice(0, 3),
        flex2: updates.slice(3, 6),
        flex3: updates.slice(6, 9),
      },
      site: {
        about: about,
      },
    },
  };
}

export default Index;

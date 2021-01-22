import { useRouter } from "next/router";
import Head from "next/head";

// Import wallpaper animation css
import "../background/style.css";

import "../fonts/Dosis.css";
import "../fonts/DosisRegular.css";
import "../fonts/1942.css";

import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import styled from "styled-components";

import Swing from "react-reveal/Swing";

import Typography from "../components/Typography.js";
import Loader from "../components/Loader.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

import { SocialIcon } from "react-social-icons";

const LinkCursor = styled.div`
  cursor: pointer;
  width: calc(100% + 10px);
  height: ${(props) => props.height || 0};
  background: white;
  transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  text-align: center;
`;

const DefaultCursor = styled.div`
  cursor: default;
`;

function TNavItem(props) {
  const [hoverColor, setHoverColor] = React.useState(
    props.active == true ? "black" : "#424242"
  );
  const [hover, setHover] = React.useState(
    props.active == true ? "calc(100%)" : "0"
  );

  return (
    <Nav.Item>
      <LinkCursor
        height={hover}
        onClick={() => {
          if (typeof props.url != "undefined") {
            window.location.href = props.url;
          }
        }}
        onMouseEnter={() => {
          if (props.active) {
            return;
          }
          setHoverColor("black");
          setHover("calc(100%)");
        }}
        onMouseLeave={() => {
          if (props.active) {
            return;
          }
          setHoverColor("#424242");
          setHover("0");
        }}
      >
        <Typography type="h5" color={hoverColor}>
          {props.children}
        </Typography>
      </LinkCursor>
    </Nav.Item>
  );
}

function NavItemSeparator(props) {
  return (
    <Nav.Item style={{ marginLeft: "14px", marginRight: "5px" }}>
      <DefaultCursor>
        <Typography type="h5">/</Typography>
      </DefaultCursor>
    </Nav.Item>
  );
}

function SocialIconSM(props) {
  return (
    <SocialIcon
      bgColor="black"
      url={props.url}
      style={{ width: 30, height: 30, margin: "10px" }}
    />
  );
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [logoSwing, setLogoSwing] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  const getTitle = () => {
    if (router.pathname == "/blog") {
      return "antonyjr.in | Blog";
    } else if (router.pathname == "/projects") {
      return "antonyjr.in | Projects";
    } else {
      return "antonyjr.in";
    }
  };

  const handleMouseOverLogo = () => {
    // TODO: Check if it's safe to do this.
    setLogoSwing(logoSwing + 1);
  };

  React.useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{getTitle()}</title>
      </Head>
      <React.Fragment>
        <Navbar>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="/">
              <Swing spy={logoSwing}>
                <Image
                  fluid
                  onMouseOver={handleMouseOverLogo}
                  src="/ajr_logo.png"
                  width="140px"
                  height="140px"
                  className="d-inline-block align-top"
                />
              </Swing>
            </a>
          </div>
        </Navbar>
        <Navbar>
          <Navbar.Collapse className="justify-content-center">
            <Nav variant="pills" defaultActiveKey="/">
              <TNavItem url="/" active={router.pathname == "/"}>
                Home
              </TNavItem>
              <NavItemSeparator />
              <TNavItem url="/blog" active={router.pathname == "/blog"}>
                Blog
              </TNavItem>
              <NavItemSeparator />
              <TNavItem url="/projects" active={router.pathname == "/projects"}>
                Projects
              </TNavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div
          style={{
            minHeight: "100vh",
          }}
        >
          <Component {...pageProps} />
        </div>
        <footer style={{ padding: "2rem", textAlign: "center", width: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Typography type="h6">{"\u00A9 "}2021 Antony Jr.</Typography>

            <div>
              <SocialIconSM url="https://twitter.com/antonyjr0" />
              <SocialIconSM url="https://www.youtube.com/channel/UCdcXDHx3gvC0Q9TuOOb7YRw" />
              <SocialIconSM url="https://github.com/antony-jr" />
              <SocialIconSM url="mailto:antonyjr@protonmail.com" />
            </div>
          </div>
        </footer>
      </React.Fragment>
    </>
  );
}

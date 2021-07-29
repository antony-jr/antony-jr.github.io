import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import { DefaultSeo } from "next-seo";

import {
  ChakraProvider,
  Text,
  Flex,
  Stack,
  Heading,
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/dosis";

import Logo from "../components/Logo";

//const Logo = dynamic(() => import("../components/Logo"));
const MenuItem = dynamic(() => import("../components/MenuItem"));
const SocialButtons = dynamic(() => import("../components/SocialButtons"));
const ColorModeButton = dynamic(() => import("../components/ColorModeButton"));

const theme = extendTheme({
  fonts: {
    heading: "Dosis",
    body: "Dosis",
  },
});

const nav = [
  { name: "Home", to: "/" },
  { name: "Blog", to: "/blog" },
  { name: "Projects", to: "/projects" },
];

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  const handleLink = (link) => {
    if (link.charAt(0) != "#") {
      window.location = link;
    } else {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <DefaultSeo
        title="antonyjr.in"
        titleTemplate=" %s - antonyjr.in"
        description="Hi, I'm Antony. Aspiring Computer Scientist and Open Source Developer"
        twitter={{
          handle: "@antonyjr0",
          site: "@antonyjr0",
          cardType: "summary_large_image",
        }}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://antonyjr.in",
          title: "antonyjr.in",
          description:
            "Hi, I'm Antony. Aspiring Computer Scientist and Open Source Developer",
          site_name: "antonyjr.in",
          images: [
            {
              url: "https://antonyjr.in",
              width: 1240,
              height: 400,
              alt: "Hi, I'm Antony. Aspiring Computer Scientist and Open Source Developer",
            },
            {
              url: "https://antonyjr.in/twitter-og-image.png",
              width: 1012,
              height: 500,
              alt: "Hi, I'm Antony. Aspiring Computer Scientist and Open Source Developer",
            },
          ],
        }}
        additionalMetaTags={[
          {
            property: "dc:creator",
            content: "J.R. Divya Antony",
          },
        ]}
      />
      <ChakraProvider theme={theme}>
        {" "}
        <Flex
          pb="20"
          as="nav"
          align="center"
          justify="center"
          wrap="wrap"
          w="100%"
        >
          <Stack direction="column" align="center" justify="center">
            <Logo alt="Nav Logo" />
            <Stack
              align="center"
              justify="flex-end"
              direction="row"
              pt={[4, 4, 0, 0]}
            >
              {nav.map((entry) => {
                return (
                  <MenuItem
                    isActive={router.pathname == entry["to"]}
                    key={entry["to"] + "-default"}
                    to={entry["to"]}
                    linkSignal={handleLink}
                  >
                    {entry["name"]}
                  </MenuItem>
                );
              })}
            </Stack>
            <ColorModeButton />
          </Stack>
        </Flex>
        <Component {...pageProps} />
        <Box
          bgImage="url(/audio-bar.svg)"
          bgPos="bottom center"
          bgSize="120px"
          bgRepeat="repeat no-repeat"
          h="128px"
        />
        <Box as="footer" mt={12} textAlign="center">
          <Text fontSize="md">
            <span>
              Designed and Developed by{" "}
              <a href="#">
                <b>J.R. Divya Antony</b>
              </a>
              .
            </span>
          </Text>
          <SocialButtons
            mt={4}
            mb={4}
            spacing="12px"
            iconBg={null}
            justify="center"
          />
        </Box>
      </ChakraProvider>
    </>
  );
};

export default App;

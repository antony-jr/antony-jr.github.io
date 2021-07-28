import Head from "next/head";
import dynamic from "next/dynamic";

import {
  Text,
  Stack,
  Heading,
  Box,
  Container,
  Image,
  Center,
  Link,
} from "@chakra-ui/react";

import matter from "gray-matter";
import SEO from "../../../components/seo";

const ProjectButtons = dynamic(
  () => import("../../../components/ProjectButtons")
);
const ChakraReactMarkdown = dynamic(
  () => import("../../../components/ChakraReactMarkdown")
);

export default function BlogPost(props) {
  const infoFontSize = ["xs", "xs", "md", "lg"];
  return (
    <>
      <Head>
        <title>{props.frontmatter.title}</title>
      </Head>
      <SEO
        title={props.frontmatter.title}
        description={props.frontmatter.description}
      />
      <Box mb={4}>
        <Container maxW="container.lg">
          <Stack direction="column" align="center" justify="center">
            <Image
              h="auto"
              w={
                props.frontmatter.imageWidth
                  ? props.frontmatter.imageWidth
                  : "auto"
              }
              src={props.frontmatter.image}
            />

            <Box pb="4" textAlign="center">
              <Heading as="h1" size="xl">
                {props.frontmatter.title}
              </Heading>
            </Box>
            <Box p="4">
              <ProjectButtons
                url={props.frontmatter.url}
                github={props.frontmatter.github}
                project={props.frontmatter.title}
              />
            </Box>

            <Box pt="6" pb="14" fontSize="lg">
              <ChakraReactMarkdown>{props.markdownBody}</ChakraReactMarkdown>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;

  const projects = ((context) => {
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
      // @ts-ignore
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slugName,
      };
    });
    return data;
  })(require.context("../../../projects", true, /\.md$/));

  var currentPage = 0;
  for (let n = 0; n < projects.length; ++n) {
    if (projects[n].slugName == slug) {
      currentPage = n;
      break;
    }
  }

  return {
    props: {
      frontmatter: projects[currentPage].frontmatter,
      markdownBody: projects[currentPage].markdownBody,
      slug,
    },
  };
}

/// This function required for next.js for
/// static pages for dynamic page url
export async function getStaticPaths() {
  const projects = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      return slug;
    });
    return data;
  })(require.context("../../../projects", true, /\.md$/));

  // create paths with `slug` param
  const paths = projects.map((slug) => `/projects/page/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

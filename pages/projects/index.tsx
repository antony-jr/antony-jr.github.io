import Head from "next/head";
import dynamic from "next/dynamic";

import {
  Text,
  Flex,
  Stack,
  Heading,
  Box,
  Container,
  Image,
  Center,
  Button,
} from "@chakra-ui/react";

import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import SEO from "../../components/seo";

export default function Projects(props) {
  return (
    <>
      <Head>
        <title> Projects - antonyjr.in</title>
      </Head>
      <SEO
        title=" Projects - antonyjr.in"
        description="Welcome to my Project Showcase, I'm Antony. I'm a Aspiring Computer Scientist and Open Source Developer, I put all details of my interesting projects here."
      />
      <Box mb={0}>
        <Box
          id="projects"
          as="section"
          pb={{ base: "2rem", md: "5rem" }}
          style={{ minHeight: "90vh" }}
        >
          <Container maxW="container.xl"></Container>
        </Box>
      </Box>
    </>
  );
}

export async function getStaticProps() {
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
      const value = values[index];
      // Parse yaml metadata & markdownbody in document
      // @ts-ignore
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
      projects,
    },
  };
}

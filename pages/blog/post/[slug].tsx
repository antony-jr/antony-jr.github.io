import Link from "next/link";
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
  Divider,
} from "@chakra-ui/react";

import matter from "gray-matter";
import SEO from "../../../components/seo";

import { BsCalendarFill } from "react-icons/bs";
import { BsTag } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";

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
      <Box mb={6}>
        <Container maxW="container.lg">
          <Stack direction="column" align="center" justify="center">
            <Box pb="4" textAlign="center">
              <Heading as="h1" size="xl">
                {props.frontmatter.title}
              </Heading>
            </Box>
            <Box p="4" textAlign="center">
              <Stack
                spacing={6}
                align="center"
                justify="center"
                direction="row"
                wrap="wrap"
              >
                <Stack
                  align="center"
                  justify="center"
                  direction="row"
                  fontSize={infoFontSize}
                  color="gray.500"
                >
                  <BsTag />
                  <Text>{props.frontmatter.tag}</Text>
                </Stack>
                <Stack
                  align="center"
                  justify="center"
                  direction="row"
                  fontSize={infoFontSize}
                  color="gray.500"
                >
                  <BsCalendarFill />
                  <Text>{props.date}</Text>
                </Stack>
                <Stack
                  align="center"
                  justify="center"
                  direction="row"
                  fontSize={infoFontSize}
                  color="gray.500"
                >
                  <AiFillClockCircle />
                  <Text>{props.frontmatter.read} mins</Text>
                </Stack>
              </Stack>
            </Box>
            <Center>
              <Box textAlign="left">
                <ChakraReactMarkdown>{props.markdownBody}</ChakraReactMarkdown>
              </Box>
            </Center>
          </Stack>
        </Container>
      </Box>
      <Box pt={2} pb={4}>
        <Center>
          <Image w="auto" height="150px" src="/vline.png" />
        </Center>
      </Box>
      <Container maxW="container.xl">
        <Stack
          align="space-between"
          justify="space-between"
          direction={["column", "column", "column", "row"]}
          spacing={6}
          pt={4}
        >
          {props.prevPost ? (
            <Link href={"/blog/post/" + props.prevPost.slugName}>
              <Box
                _hover={{
                  textDecoration: "underline",
                  textDecorationStyle: "dotted",
                }}
                textAlign="left"
                cursor="pointer"
              >
                <Heading pb="2" as="h4" size="xl">
                  Previous
                </Heading>

                <Text fontSize="md">{props.prevPost.title}</Text>
                <Text fontSize="sm">{props.prevPost.date}</Text>
              </Box>
            </Link>
          ) : (
            <Box />
          )}

          {props.nextPost && (
            <Link href={"/blog/post/" + props.nextPost.slugName}>
              <Box
                _hover={{
                  textDecoration: "underline",
                  textDecorationStyle: "dotted",
                }}
                textAlign="right"
                cursor="pointer"
              >
                <Heading pb="2" as="h4" size="xl">
                  Next
                </Heading>

                <Text fontSize="md">{props.nextPost.title}</Text>
                <Text fontSize="sm">{props.nextPost.date}</Text>
              </Box>
            </Link>
          )}
        </Stack>
        <br />
        <br />
        <br />
      </Container>
    </>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;

  var posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      // Create slug from filename
      let re = /(\d{4})-(\d{2})-(\d{2})\/[\w -]*\.md$/;
      let matches = re.exec(key);

      if (matches.length == 0) {
        return {};
      }

      const slug = matches[0]
        .replace("/", "-")
        .replace("\\", "-")
        .replace(".md", "");

      const value = values[index];
      // Parse yaml metadata & markdownbody in document
      // Side Note: I have no idea why typescript errors out.
      // @ts-ignore
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slugName: slug,
      };
    });
    return data;
  })(
    require.context(
      "../../../posts",
      true,
      /(\d{4})-(\d{2})-(\d{2})\/[\w -]*\.md$/
    )
  );

  function validFile(entry) {
    var slugName = entry.slugName;
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

  var workingPosts = posts.filter(validFile);
  workingPosts.sort(function (a, b) {
    // @ts-ignore
    return getDate(b.slugName) - getDate(a.slugName);
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
  var currentPost = 0;
  for (let n = 0; n < workingPosts.length; ++n) {
    if (workingPosts[n].slugName == slug) {
      currentPost = n;
      if (n + 1 < workingPosts.length) {
        prevPost = workingPosts[n + 1];
      }
      break;
    }
    nextPost = workingPosts[n];
  }

  if (prevPost) {
    prevPost = {
      date: getDate(prevPost.slugName).toDateString(),
      ...prevPost.frontmatter,
      slugName: prevPost.slugName,
    };
  }
  if (nextPost) {
    nextPost = {
      date: getDate(nextPost.slugName).toDateString(),
      ...nextPost.frontmatter,
      slugName: nextPost.slugName,
    };
  }

  return {
    props: {
      frontmatter: workingPosts[currentPost].frontmatter,
      date: getDate(slug).toDateString(),
      markdownBody: workingPosts[currentPost].markdownBody,
      slug,
      prevPost,
      nextPost,
    },
  };
}

/// This function required for next.js for
/// static pages for dynamic page url
export async function getStaticPaths() {
  //get all .md files in the posts dir
  var posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      // Create slug from filename
      let re = /(\d{4})-(\d{2})-(\d{2})\/[\w -]*\.md$/;
      let matches = re.exec(key);

      if (matches.length == 0) {
        return {};
      }

      const slug = matches[0]
        .replace("/", "-")
        .replace("\\", "-")
        .replace(".md", "");

      const value = values[index];
      // Parse yaml metadata & markdownbody in document
      // Side Note: I have no idea why typescript errors out.
      // @ts-ignore
      const document = matter(value.default);
      return slug;
    });
    return data;
  })(
    require.context(
      "../../../posts",
      true,
      /(\d{4})-(\d{2})-(\d{2})\/[\w -]*\.md$/
    )
  );

  // create paths with `slug` param
  const paths = posts.map((slug) => `/blog/post/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

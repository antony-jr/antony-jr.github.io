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
} from "@chakra-ui/react";

import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import SEO from "../../../components/seo";

export default function BlogPost(props) {
  return (
    <>
      <Head>
        <title>{props.frontmatter.title} - Blog - antonyjr.in</title>
      </Head>
      <SEO
        title={props.frontmatter.title + " - Blog - antonyjr.in"}
        description={props.frontmatter.description}
      />
      <Box mb={0}></Box>
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
    };
  }
  if (nextPost) {
    nextPost = {
      date: getDate(nextPost.slugName).toDateString(),
      ...nextPost.frontmatter,
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

import Head from "next/head";

import {
  Text,
  Flex,
  Stack,
  Heading,
  Box,
  Container,
  Image,
} from "@chakra-ui/react";

import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import ProfileImage from "../components/ProfileImage";

function Title({children, ...rest}) {
   return (
      <Heading size="lg" as="h1" {...rest}>
	 {children}
      </Heading>
   );
}

function SubTitle({children, ...rest}) {
   return (
      <Text fontSize="2xl" {...rest}>
	 {children}
      </Text>);
}

export default function Index(props) {
   return (
      <>
	 <Head>
	    <title>antonyjr.in</title>>
	 </Head>
	 <Box mb={0}>
	    <Box id="home" as="section" pb={{ base: "2rem", md: "5rem" }}>
             <Container maxW="container.xl">
              <Stack
               spacing={8}
               align="center"
               justify="space-between"
               direction={["column-reverse", "column-reverse", "row-reverse", "row-reverse"]}
              >
	      <ProfileImage/>

	      <Box textAlign="left">
		 <ReactMarkdown components={{p: Title}}>
		    	{props.site.about.frontmatter.title} 
		 </ReactMarkdown>
		 <ReactMarkdown components={{p: SubTitle}}>
		    	{props.site.about.frontmatter.subtitle} 
		 </ReactMarkdown>
		 <br/>
		 <ReactMarkdown as={Text}>
		    	{props.site.about.markdownBody} 
		 </ReactMarkdown>
	      </Box>
	      </Stack>
	     </Container>
	   </Box>
	 </Box>
      </>
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

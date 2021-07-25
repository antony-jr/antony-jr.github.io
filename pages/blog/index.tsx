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
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  TabList,
} from "@chakra-ui/react";

import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import SEO from "../../components/seo";

const BlogEntry = dynamic(() => import("../../components/BlogEntry"));

export default function Blog(props) {
  function getDateString(slugName) {
    var r = slugName.split("-");
    if (r.length < 3) {
      return new Date("Invalid");
    }
    return r[0] + "-" + r[1] + "-" + r[2];
  }

  return (
    <>
      <Head>
        <title> Blog - antonyjr.in</title>
      </Head>
      <SEO
        title=" Blog - antonyjr.in"
        description="Welcome to my Blog, I'm Antony. I'm a Aspiring Computer Scientist and Open Source Developer, I write anything that I find amusing here."
      />
      <Box mb={0}>
        <Box
          id="blog"
          as="section"
          pb={{ base: "2rem", md: "5rem" }}
          style={{ minHeight: "90vh" }}
        >
          <Container maxW="container.xl">
            <Tabs defaultIndex={0}>
              <Center>
                <TabList>
                  {props.posts.map((entry, index) => {
                    return (
                      <Tab key={"TabPage-" + String(index)}>{index + 1}</Tab>
                    );
                  })}
                </TabList>
              </Center>

              <TabPanels>
                {props.posts.map((entry, index) => {
                  return (
                    <TabPanel key={"Page-" + String(index)}>
                      <Center>
                        <Stack
                          direciion="column"
                          spacing={8}
                          align="flex-start"
                        >
                          {entry.map((bp, idx) => {
                            return (
                              <BlogEntry
                                read={bp.read + " mins. "}
                                tag={bp.tag}
                                key={
                                  "blog-entry-" + String(idx) + String(index)
                                }
                                date={getDateString(bp.slug)}
                                title={bp.title}
                                url={"/blog/post/" + bp.slug}
                              />
                            );
                          })}
                        </Stack>
                      </Center>
                    </TabPanel>
                  );
                })}
              </TabPanels>
            </Tabs>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  //get posts & context from folder
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
        ...document.data,
        slug,
      };
    });
    return data;
  })(
    require.context(
      "../../posts",
      true,
      /(\d{4})-(\d{2})-(\d{2})\/[\w -]*\.md$/
    )
  );

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

  function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  var r = [];
  var workingPosts = posts.filter(validFile);
  workingPosts.sort(function (a, b) {
    // @ts-ignore
    return getDate(b) - getDate(a);
  });

  const page_size = 6; /// Set the page size here.

  var total_pages = posts.length / page_size;
  /// Check if the total pages has a decimal part if it does then just add 1
  /// Note: We can't use ceil or floor here because the decimal part means we just
  ///       need an extra page.

  if (total_pages % 1 != 0) {
    total_pages += 1;
  }
  total_pages = Math.trunc(Number(total_pages));

  for (let n = 1; n <= total_pages; n++) {
    r.push(paginate(workingPosts, page_size, n));
  }

  return {
    props: {
      pages: total_pages,
      posts: r,
    },
  };
}

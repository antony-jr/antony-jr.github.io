import Head from "next/head";
import useInView from "react-cool-inview";
import dynamic from "next/dynamic";

import {
  Text,
  Flex,
  Stack,
  Heading,
  Box,
  Container,
  Image,
  Grid,
  Center,
  Button,
} from "@chakra-ui/react";

import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import SEO from "../components/seo";

const AnimatedProfile = dynamic(() => import("../components/AnimatedProfile"));
const SocialButtons = dynamic(() => import("../components/SocialButtons"));
const Donations = dynamic(() => import("../components/Donations"));
const Subhead = dynamic(() => import("../components/Subhead"));
const UpdatesArea = dynamic(() => import("../components/UpdatesArea"));
const TerminalBox = dynamic(() => import("../components/TerminalBox"));
const ContactForm = dynamic(() => import("../components/ContactForm"));
const ContactSocialButtons = dynamic(
  () => import("../components/ContactSocialButtons")
);
const ProjectEntry = dynamic(() => import("../components/ProjectEntry"));

import BodyText from "../components/BodyText";

function Title({ children, ...rest }) {
  return (
    <Heading size="lg" as="h1" {...rest}>
      {children}
    </Heading>
  );
}

function SubTitle({ children, ...rest }) {
  return (
    <Text fontSize="2xl" {...rest}>
      {children}
    </Text>
  );
}

export default function Index(props) {
  const { observe, inView } = useInView({
    threshold: 0.25,
    unobserveOnEnter: true,
  });

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <SEO
        title="Home"
        description="Hi, I'm Antony. Aspiring Computer Scientist and Open Source Developer"
      />
      <Box mb={0}>
        <Box id="home" as="section" pb={{ base: "2rem", md: "5rem" }}>
          <Container maxW="container.xl">
            <Stack
              spacing={4}
              align="center"
              justify="center"
              direction="column"
            >
              <Stack
                spacing={8}
                align="center"
                justify="space-between"
                direction={[
                  "column-reverse",
                  "column-reverse",
                  "row-reverse",
                  "row-reverse",
                ]}
              >
                <AnimatedProfile
                  object1="/triangle.png"
                  object2="/triangle_inverted_white.png"
                  src="/me_rgb.png"
                />

                <Box textAlign="left">
                  <ReactMarkdown components={{ p: Title }}>
                    {props.site.about.frontmatter.title}
                  </ReactMarkdown>
                  <ReactMarkdown components={{ p: SubTitle }}>
                    {props.site.about.frontmatter.subtitle}
                  </ReactMarkdown>
                  <br />
                  <ReactMarkdown components={{ p: BodyText }}>
                    {props.site.about.markdownBody}
                  </ReactMarkdown>
                  <br />
                  <SocialButtons />
                </Box>
              </Stack>
              <Donations />
            </Stack>
            <br />
            <br />
          </Container>
        </Box>

        {/* This is a placeholder for inview. */}
        <div
          ref={observe}
          style={{ height: "1000px", display: inView ? "none" : "block" }}
        ></div>

        {inView && props.spotlight && (
          <Box id="spotlight" as="section" pb={{ base: "2rem", md: "5rem" }}>
            <Container maxW="container.lg">
              <Subhead src="spotlight_title.png" />
              <Text textAlign="center" fontSize="2xl">
                {props.spotlight.frontmatter.spotlight}
              </Text>
              <br />
              <ProjectEntry data={props.spotlight.frontmatter} />
              <br />
              <br />
            </Container>
          </Box>
        )}

        {inView && (
          <Box id="updates" as="section" pb={{ base: "2rem", md: "5rem" }}>
            <Container maxW="container.lg">
              <Subhead src="updates_title.png" />
              <UpdatesArea posts={props.posts} />
            </Container>
          </Box>
        )}

        {inView && (
          <Box id="publickeys" as="section" pb={{ base: "2rem", md: "5rem" }}>
            <Container maxW="container.xl">
              <Subhead src="pubkeys_title.png" />
              <TerminalBox />
              <br />
              <Center>
                <Button
                  _focus={{
                    boxShadow:
                      "0 0 1px 2px rgba(255, 255, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                  }}
                  _hover={{ borderColor: "black" }}
                  onClick={() => {
                    window.open("/gpg.asc", "_blank");
                  }}
                >
                  Get GPG Public Key
                </Button>
              </Center>
              <br />
            </Container>
          </Box>
        )}

        {inView && (
          <Box id="contact" as="section" pb={{ base: "2rem", md: "5rem" }}>
            <Container maxW="container.lg">
              <Subhead src="contact_title.png" />
              <br />
              <Center>
                <ContactSocialButtons />
              </Center>
              {props.showContact && (
                <div>
                  <Text fontSize="lg">
                    You can contact me through my email or in any social media
                    platform you wish to. But if you want to contact me
                    directly, you can use this form. This form sends your
                    message directly to my telegram bot,{" "}
                    <b>so please don't spam me</b>.
                  </Text>
                  <br />
                  <ContactForm api={props.contactAPI} />
                </div>
              )}
            </Container>
            <br />
            <br />
          </Box>
        )}
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
  })(require.context("../projects", true, /\.md$/));

  var spotlight = null;
  for (var iter = 0; iter < projects.length; ++iter) {
    if (projects[iter].frontmatter.spotlight) {
      spotlight = projects[iter];
      break;
    }
  }

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
    require.context("../posts", true, /(\d{4})-(\d{2})-(\d{2})\/[\w -]*\.md$/)
  );

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
      // @ts-ignore
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

  posts = posts.filter(validFile);

  posts.sort((a, b) => {
    // @ts-ignore
    return getDate(b) - getDate(a);
  });

  var updates = [];

  for (let n = 0; n < posts.length; ++n) {
    var post = posts[n];
    const keys = Object.keys(post);

    if (keys.indexOf("image") == -1) {
      post = {
        ...post,
        image: "",
      };
    }

    if (keys.indexOf("imageCopyright") == -1) {
      post = {
        ...post,
        imageCopyright: "",
      };
    }

    post = {
      ...post,
      date: getDate(post).toDateString(),
    };

    updates.push(post);
  }

  var about = null;
  for (let n = 0; n < site.length; ++n) {
    if (site[n].slug == "about") {
      about = site[n];
      break;
    }

    // More details will be added later
  }

  /// Slice 1
  const slice1s = 0;
  const slice1e = Math.ceil(updates.length / 3); /// 1/3 of all posts.

  /// Slice 2
  const slice2s = slice1e; /// end of slice 1 is the start.
  const slice2e = slice2s + Math.ceil(updates.length / 3);

  /// Slice 3
  const slice3s = slice2e;
  const slice3e = updates.length;

  const env_keys = Object.keys(process.env);
  const showContact =
    (env_keys.indexOf("TELEGRAM_BOT_TOKEN") !== -1 &&
      env_keys.indexOf("TELEGRAM_GROUP_ID_TARGET") !== -1) ||
    env_keys.indexOf("CONTACT_API_URL") !== -1;
  const api =
    env_keys.indexOf("CONTACT_API_URL") !== -1
      ? process.env.CONTACT_API_URL
      : null;
  return {
    props: {
      showContact: showContact,
      contactAPI: api,
      spotlight: spotlight,
      posts: {
        slice1: updates.slice(slice1s, slice1e),
        slice2: updates.slice(slice2s, slice2e),
        slice3: updates.slice(slice3s, slice3e),
      },
      site: {
        about: about,
      },
    },
  };
}

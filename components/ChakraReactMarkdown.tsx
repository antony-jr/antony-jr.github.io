import React from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";

import {
  Text,
  Heading,
  Image,
  Link,
  Center,
  Stack,
  Box,
  UnorderedList,
  OrderedList,
  ListItem,
  CircularProgress,
} from "@chakra-ui/react";

import { Tweet } from "react-twitter-widgets";

function BodyText(props) {
  return (
    <Text fontSize="lg" pb="4">
      {props.children}
    </Text>
  );
}

function BodyLink({ children, ...rest }) {
  return (
    <Link
      {...rest}
      style={{ textDecoration: "underline", textDecorationStyle: "dotted" }}
      isExternal
    >
      {children}
    </Link>
  );
}

function UL({ children, ...rest }) {
  return (
    <UnorderedList pb="4" {...rest} fontSize="lg">
      {children}
    </UnorderedList>
  );
}

function OL({ children, ...rest }) {
  return (
    <OrderedList pb="4" {...rest} fontSize="lg">
      {children}
    </OrderedList>
  );
}

function LI({ children, ...rest }) {
  return <ListItem {...rest}>{children}</ListItem>;
}

function H1({ children, ...rest }) {
  return (
    <Heading pb="4" as="h1" size="xl">
      {children}
    </Heading>
  );
}

function H2({ children, ...rest }) {
  return (
    <Heading pb="4" as="h2" size="xl">
      {children}
    </Heading>
  );
}

function H3({ children, ...rest }) {
  return (
    <Heading pb="4" as="h3" size="xl">
      {children}
    </Heading>
  );
}

function H4({ children, ...rest }) {
  return (
    <Heading pb="4" as="h4" size="xl">
      {children}
    </Heading>
  );
}

function TweetCard(props) {
  const [display, setDisplay] = React.useState(false);
  let tweetId = "1316351710609235972";

  if (props.children) {
    for (var i = 0; i < props.children.length; ++i) {
      tweetId = props.children[i].trim();
      break;
    }
  }

  console.log(tweetId);

  return (
    <Center>
      <Box w={["xs", "sm", "md", "lg"]}>
        <Tweet
          options={{ width: "100%" }}
          tweetId={tweetId}
          onLoad={() => {
            setInterval(() => {
              setDisplay(true);
            }, 100);
          }}
        />
        {!display && <CircularProgress isIndeterminate />}
      </Box>
    </Center>
  );
}

function CodeBlock({ node, inline, className, children, ...rest }) {
  let language = "";

  if (className) {
    language = className.split("-")[1];
  }

  if (language == "tweet") {
    return <TweetCard>{children}</TweetCard>;
  } else {
    return (
      <Center>
        <Box w="100%">
          <SyntaxHighlighter
            wrapLongLines={true}
            wrapLines={true}
            showLineNumbers={true}
            showlanguage={language}
            style={nord}
            {...rest}
          >
            {children}
          </SyntaxHighlighter>
        </Box>
      </Center>
    );
  }
}

export default function ChakraReactMarkdown({ children, ...rest }) {
  return (
    <ReactMarkdown
      components={{
        p: BodyText,
        a: BodyLink,
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        ol: OL,
        ul: UL,
        li: LI,
        img: Image,
        // @ts-ignore
        code: CodeBlock,
      }}
      {...rest}
    >
      {children}
    </ReactMarkdown>
  );
}

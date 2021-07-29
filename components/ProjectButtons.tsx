import { useColorModeValue, Button, Box, Text, Stack } from "@chakra-ui/react";
import { CgWebsite } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

function ProjectButton(props) {
  const borderColor = useColorModeValue("black", "white");
  return (
    <Button
      size="md"
      variant="ghost"
      borderColor={borderColor}
      _focus={{
        boxShadow:
          "0 0 1px 2px rgba(255, 255, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }}
      _active={{ borderColor: "black" }}
      onClick={() => {
        window.open(props.url, "_blank").focus();
      }}
      leftIcon={props.icon}
    >
      {props.text}
    </Button>
  );
}

export default function ProjectButtons(props) {
  const getTweetLink = (project, link, github) => {
    let url = new URL("https://twitter.com/intent/tweet");
    let params = url.searchParams;
    params.append(
      "text",
      "Checkout " + project + " at " + (link ? link : github) + "."
    );
    return url.toString();
  };
  return (
    <Stack
      direction={["column", "row"]}
      wrap="wrap"
      align="center"
      justify="center"
      spacing={5}
    >
      {props.url && (
        <ProjectButton
          icon={<CgWebsite />}
          url={props.url}
          text="Project Page"
        />
      )}
      <ProjectButton
        icon={<FaTwitter />}
        url={getTweetLink(props.project, props.url, props.github)}
        text="Tweet"
      />
      <ProjectButton
        icon={<AiFillGithub />}
        url={props.github}
        text="Star on Github"
      />
    </Stack>
  );
}

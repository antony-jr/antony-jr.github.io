import { Center, Stack, Image, Box, Heading, Button } from "@chakra-ui/react";
import ProjectButtons from "./ProjectButtons";
import BodyText from "./BodyText";
import ReactMarkdown from "react-markdown";

export default function ProjectEntry(props) {
  return (
    <Center>
      <Box borderRadius="lg" boxShadow="xl" p="6">
        <Stack
          align="center"
          justify="space-between"
          direction={["column", "column", "column", "row"]}
        >
          <Image w={props.data.imageWidth} h="auto" src={props.data.image} />
          <Box textAlign="center" p="4">
            <Heading as="h2">{props.data.title}</Heading>
            <ReactMarkdown components={{ p: BodyText }}>
              {props.data.description}
            </ReactMarkdown>
            <br />
            <ProjectButtons
              project={props.data.title}
              url={props.data.url}
              github={props.data.github}
            />
            <br />
            <Button
              _focus={{
                boxShadow:
                  "0 0 1px 2px rgba(255, 255, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
              }}
              _hover={{ borderColor: "black" }}
              size="lg"
              onClick={() => {
                window.open("/projects/page/" + props.slug, "_self");
              }}
            >
              Learn More
            </Button>
          </Box>
        </Stack>
      </Box>
    </Center>
  );
}

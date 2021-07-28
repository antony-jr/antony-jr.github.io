import { Center, Stack, Image, Box, Heading, Button } from "@chakra-ui/react";
import ProjectButtons from "./ProjectButtons";
import BodyText from "./BodyText";
import ReactMarkdown from "react-markdown";

export default function ProjectCard(props) {
  return (
    <Box p="6">
      <Box w="100%" maxW="100%" bg="transparent" p="6">
        <Stack
          justify="center"
          align="center"
          direction={["column", "column", "column", "row"]}
        >
          <Box w="50vw">
            <Center>
              <Image
                objectFit="contain"
                w={props.data.imageWidth ? props.data.imageWidth : "auto"}
                h="auto"
                align="center"
                src={props.data.image}
              />
            </Center>
          </Box>
          <Box textAlign="center" w={["80vw", "80vw", "80vw", "50vw"]} p="4">
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
                window.open("/project/page/" + props.slug, "_blank");
              }}
            >
              Learn More
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

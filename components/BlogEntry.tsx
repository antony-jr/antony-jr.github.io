import { Stack, Box, Text } from "@chakra-ui/react";
import { BsTag } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";

export default function BlogEntry(props) {
  // @ts-ignore
  return (
    <Stack direction="row" align="center" justify="center" spacing={4}>
      <Box
        p="2"
        fontSize={["xs", "sm"]}
        style={{ fontFamily: "serif", whiteSpace: "nowrap" }}
      >
        {props.date}
      </Box>
      <Stack
        align="flex-start"
        direction="column"
        cursor="pointer"
        onClick={() => {
          window.open(props.url, "_blank");
        }}
      >
        <Text fontSize={["xs", "sm", "md", "lg", "xl"]}>
          <b>{props.title}</b>
        </Text>
        <Stack align="center" justify="center" direction="row">
          <Stack align="center" justify="center" direction="row">
            <AiOutlineFieldTime />
            <Text color="gray.500" fontSize="xs">
              {props.read}
            </Text>
          </Stack>

          <Stack align="center" justify="center" direction="row">
            <BsTag />
            <Text color="gray.500" fontSize="xs">
              {props.tag}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

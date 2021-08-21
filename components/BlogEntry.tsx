import Link from "next/link";
import { Stack, Box, Text } from "@chakra-ui/react";
import { BsTag } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";

export default function BlogEntry(props) {
  return (
    <Stack direction="row" align="center" justify="center" spacing={4}>
      <Box
        p="2"
        fontSize={["xs", "sm"]}
        style={{ fontFamily: "serif", whiteSpace: "nowrap" }}
      >
        {props.date}
      </Box>
      <Link href={props.url}>
        <Stack align="flex-start" direction="column" cursor="pointer">
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
      </Link>
    </Stack>
  );
}

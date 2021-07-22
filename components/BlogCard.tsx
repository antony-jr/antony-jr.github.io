import { Text, Heading, Badge, Box, Stack, Image } from "@chakra-ui/react";
import { BsTag } from "react-icons/bs";
import { BsCalendarFill } from "react-icons/bs";
import Fade from "react-reveal";

export default function BlogCard({
  cover = "",
  badge = "",
  title,
  description,
  tag = "",
  date = "",
  copyright = "",
  to = "#",
}) {
  return (
    <Box
      w="100%"
      maxW={["100%", "100%", "xs", "md", "md"]}
      boxShadow="lg"
      _hover={{
        boxShadow: "xl",
        cursor: "pointer",
        transform: "scale(1.04)",
        transition: "all 0.34s ease-in",
      }}
      borderWidth="xs"
      onClick={() => {
        window.open(to, "_blank");
      }}
      style={{
        backgroundColor: "transparent",
      }}
    >
      {cover != "" && (
        <Image w="100%" src={cover} alt={title + " cover image"} />
      )}

      <Box p="6">
        {badge != "" && (
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" bg="black" color="white">
              {badge}
            </Badge>
          </Box>
        )}

        <Box mt="1" textAlign="left" lineHeight="tight">
          <Heading as="h4" size="md">
            {title}
          </Heading>
        </Box>
        <Box mt="1" textAlign="left" fontSize="sm" as="p" lineHeight="tight">
          {description}
        </Box>
        <Stack pt="4" spacing="4" direction="row" wrap="wrap">
          {date != "" && (
            <Stack align="center" justify="center" direction="row">
              <BsCalendarFill />
              <Text color="gray.500" fontSize="xs">
                {date}
              </Text>
            </Stack>
          )}
          {badge == "" && tag != "" && (
            <Stack align="center" justify="center" direction="row">
              <BsTag />
              <Text color="gray.500" fontSize="xs">
                {tag}
              </Text>
            </Stack>
          )}
        </Stack>

        {copyright != "" && (
          <Text color="gray.500" align="left" fontSize="xs">
            <br />
            Image (c) {copyright}
          </Text>
        )}
      </Box>
    </Box>
  );
}

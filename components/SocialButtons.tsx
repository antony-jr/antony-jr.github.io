import { Stack, Box } from "@chakra-ui/react";

import { SocialIcon } from "react-social-icons";

export default function SocialButtons(props) {
  return (
    <Stack
      align="center"
      justify="flex-start"
      spacing={6}
      direction="row"
      wrap="wrap"
    >
      <SocialIcon
        style={{ marginTop: "10px" }}
        bgColor="black"
        url="https://twitter.com/antonyjr0"
      />
      <SocialIcon
        style={{ marginTop: "10px" }}
        bgColor="black"
        url="https://www.youtube.com/channel/UCdcXDHx3gvC0Q9TuOOb7YRw"
      />
      <SocialIcon
        style={{ marginTop: "10px" }}
        bgColor="black"
        url="https://github.com/antony-jr"
      />
      <SocialIcon
        style={{ marginTop: "10px" }}
        bgColor="black"
        url="mailto:antonyjr@protonmail.com"
      />
    </Stack>
  );
}

import React from "react";
import { Box, Stack, Image } from "@chakra-ui/react";
import Fade from "react-reveal";

export default function Subhead({ src, ...rest }) {
  return (
    <Fade>
      <Box pb="16">
        <Stack direction="column" align="center" justify="center">
          <Image src={src} />
        </Stack>
      </Box>
    </Fade>
  );
}

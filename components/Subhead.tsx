import React from "react";
import { Box, Stack, Image } from "@chakra-ui/react";
import Fade from "react-reveal";

export default function Subhead({ src, ...rest }) {
  return (
    <Fade>
      <Box pb="16">
        <Stack direction="column" align="center" justify="center">
          <Box
            h={["50px", "100px", "100px", "140px", "150px"]}
            w="16px"
            style={{
              backgroundImage: "url('vert-line.png')",
              backgroundRepeat: "repeat-y",
              backgroundSize: "50%",
            }}
          />
          <Image src={src} />
          <Box
            h="60px"
            w="16px"
            style={{
              backgroundImage: "url('vert-line.png')",
              backgroundRepeat: "repeat-y",
              backgroundSize: "50%",
            }}
          />
        </Stack>
      </Box>
    </Fade>
  );
}

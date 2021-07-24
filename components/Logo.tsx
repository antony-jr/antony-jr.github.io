import { Box, Stack, Image } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

import Fade from "react-reveal";

export default function Logo({
  src = "/ajr_nav_logo_frame.png",
  darkSrc = "/ajr_nav_logo_frame_dark.png",
  ...rest
}) {
  const img_src = useColorModeValue(src, darkSrc);
  return (
    <Fade>
      <Box>
        <Stack align="center" direction="row" spacing={1}>
          <Image
            src={img_src}
            {...rest}
            w={["300px", "510px", "510px", "580px", "580px"]}
            h="auto"
          />
        </Stack>
      </Box>
    </Fade>
  );
}

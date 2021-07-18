import { Box, Stack, Image } from "@chakra-ui/react";
import Fade from "react-reveal";

export default function Logo({ src = "ajr_nav_logo_frame.png", ...rest }) {
  return (
    <Fade>
      <Box>
        <Stack align="center" direction="row" spacing={1}>
          <Image
            src={src}
            {...rest}
            w={["300px", "510px", "510px", "580px", "580px"]}
            h="auto"
          />
        </Stack>
      </Box>
    </Fade>
  );
}

import { Box, Stack, Image } from "@chakra-ui/react";

export default function Logo({src="ajr_nav_logo_frame.png", ...rest}) {
  return (
    <Box>
      <Stack align="center" direction="row" spacing={1}>
       <Image src={src} {...rest} w={["300px", "410px", "410px", "480px", "480px"]} h="auto"/>
      </Stack>
    </Box>
  );
}

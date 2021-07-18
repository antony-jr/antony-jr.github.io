import { Box, Stack, Image } from "@chakra-ui/react";

export default function ProfileImage({src="me_rgb.png", ...rest}) {
  return (
     <Box style={{backgroundImage: "linear-gradient(#212121, black)"}} maxW="md" borderWidth="1px" borderRadius="lg">
      <Stack align="center" p="4" justify="center" direction="column">
	 <Image  src={src} {...rest} alt="Antony Jr." 
       	   borderRadius="lg"
	   w={["240px", "420px", "420px", "610px", "610px"]} 
       	   h="auto"
	   opacity="0.7"
	   />
       </Stack>
    </Box>
  );
}

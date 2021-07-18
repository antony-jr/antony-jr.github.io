import React from "react";
import { Image, Box, Stack} from "@chakra-ui/react";

function ProfileImage(props) {
  return (
     <Box p="2" bg="white" shadow="2xl">
	<Box
	   borderRadius="lg"
	   bg="#212121"
	   as="div"
	>
	
	   <Image src={props.src}
	  borderRadius="lg"
	  w={["240px", "410px", "410px", "500px", "500px"]}
	  h="auto"
	  opacity="0.7"
       />
	</Box>
    </Box>
  );
}

export default ProfileImage;

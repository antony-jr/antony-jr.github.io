import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaRegLightbulb } from "react-icons/fa";

export default function ColorModeButton(props) {
   const { toggleColorMode: toggleMode } = useColorMode();

   return (
      <IconButton
      	_focus={{
           boxShadow:
               "0 0 1px 2px rgba(255, 255, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
         }}
         _hover={{ borderColor: "black" }}
         size="md"
         fontSize="lg"
	 aria-label="Toggle Dark/Light Mode"
         variant="ghost"
         color="current"
         ml={{ base: "0", md: "3" }}
         onClick={toggleMode}
	 icon={<FaRegLightbulb/>}/>
   );
}

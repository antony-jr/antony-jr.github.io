import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import {
  ChakraProvider,
  Text,
  Flex,
  Stack,
  Heading,
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import "@fontsource/dosis";
import { extendTheme, useDisclosure } from "@chakra-ui/react";
import { AnimatedSocialIcon } from "react-animated-social-icons";


const Logo = dynamic(() => import('../components/Logo'));

//import Logo from "../components/Logo";
import MenuToggle from "../components/MenuToggle";
import MenuItem from "../components/MenuItem";
import DrawerMenuItem from "../components/DrawerMenuItem";

const theme = extendTheme({
  fonts: {
    heading: "Dosis",
    body: "Dosis",
  },
  styles: {
    global: {
      "body": {
	 backgroundRepeat: "repeat",
	 backgroundImage: "url('img-noise.png')", 
       },
    },
  },
});

const nav = [
  { name: "Home", to: "/" },
  { name: "Blog", to: "/blog" },
  { name: "Projects", to: "/projects" },
];

function App({ Component, pageProps }) {
   const router = useRouter();
   const [isOpen, setIsOpen] = React.useState(false);
   const toggle = () => setIsOpen(!isOpen);
   
   const handleLink = (link) => {
    if (link.charAt(0) != "#") {
      window.location = link;
    } else {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      if (isOpen) {
        toggle();
      }
    }
   };

   return (
     <ChakraProvider theme={theme}>
	<Flex
	as="nav"
        align="center"
        justify="center"
        wrap="wrap"
        w="100%"
        color={["black", "black", "primary.500", "primary.500"]}>
	<Stack direction="column" align="center" justify="center">
	  <Logo alt="Nav Logo"/>
          <MenuToggle toggle={toggle} isOpen={isOpen} />
          <Box
	   display={{ base: "none", sm: "block"}}
           flexBasis={{ base: "100%", sm: "auto" }}
          >
           <Stack
              align="center"
              justify="flex-end"
              direction="row"
              pt={[4, 4, 0, 0]}>
              {nav.map((entry) => {
                return (
                  <MenuItem
		    isActive={router.pathname == entry["to"]}
		    key={entry["to"] + "-default"}
                    to={entry["to"]}
		    linkSignal={handleLink}
                  >
                    {entry["name"]}
                  </MenuItem>
                );
              })}
           </Stack>
          </Box>
	</Stack>
	</Flex>
        <Drawer
         closeOnOverlayClick
         isOpen={isOpen}
         onClose={toggle}
         placement="top">
           <DrawerOverlay />
           <DrawerContent>
           <DrawerCloseButton />
           <DrawerHeader>Navigation</DrawerHeader>

           <DrawerBody align="center">
            {nav.map((entry) => {
              return (
                <div key={entry["to"] + "-small"}>
                  <DrawerMenuItem to={entry["to"]} linkSignal={handleLink}>
                    {entry["name"]}
                  </DrawerMenuItem>
                  <br />
                </div>
              );
            })}
           </DrawerBody>
          </DrawerContent>
        </Drawer>
	<div
	    style={{
	      width: "100%",
	      height: "70px",
	      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), white)", 
	    }}/>
	<div
	 style={{
	      width: "100%",
	      minHeight: "90vh",
	      backgroundColor: "white",
	    }}>
	<Component {...pageProps} />
	</div>
     </ChakraProvider>
  );
}

export default App;


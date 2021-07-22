import { Text, Box, Stack } from "@chakra-ui/react";
import Fade from "react-reveal";

export default function TerminalBox(props) {
  return (
    <Fade>
      <Stack
        direction={["column", "column", "column", "row", "row"]}
        align="center"
        justify="center"
      >
        <Box maxW="lg">
          <Text>
            This is <b>my primary key,</b> please follow this site to know if I
            change my key which will not be that often. You can encrypt
            sensitive data that you want to sent to me via email. I also will be
            using this key to sign all my data files. If you want encrypted
            response then you must send your GPG public key first.
          </Text>
        </Box>
        <Box
          overflow="auto"
          p="5"
          as="pre"
          borderWidth="2px"
          bg="black"
          color="green"
          w="100%"
          maxW={["lg", "lg", "lg", "100%"]}
        >
          {"pub   rsa4096/3156C8D324D12E73 2020-07-21\n"}
          {"       54AFD2B538FF0107631D72AE3156C8D324D12E73\n\n"}
          {"uid   J.R. Divya Antony <antonyjr@protonmail.com>\n"}
          {"sub   rsa4096/0AF1A22AF304CE37 2020-07-21\n"}
        </Box>
      </Stack>
    </Fade>
  );
}

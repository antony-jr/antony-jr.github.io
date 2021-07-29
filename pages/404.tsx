import Head from "next/head";

import {
  Text,
  Stack,
  Heading,
  Box,
  Container,
  Image,
  Center,
} from "@chakra-ui/react";

export default function Projects(props) {
  return (
    <>
      <Head>
        <title> Missing Content - antonyjr.in</title>
      </Head>
      <Box mb={0}>
        <Box
          id="404"
          as="section"
          pb={{ base: "2rem", md: "5rem" }}
          style={{ minHeight: "90vh" }}
        >
          <Container maxW="container.lg">
            <Stack direction="column" align="center" justify="center">
              <br />
              <br />
              <br />
              <br />
              <Center>
                <Heading as="h1" size="4xl">
                  404
                </Heading>
              </Center>
              <Center>
                <Heading as="h1" size="xl">
                  File Not Found
                </Heading>
              </Center>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}

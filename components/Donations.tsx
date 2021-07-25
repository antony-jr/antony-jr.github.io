import { useColorModeValue, Button, Box, Text, Stack } from "@chakra-ui/react";

export default function Donations(props) {
  const borderColor = useColorModeValue("black", "white");
  return (
    <Stack direction="column" align="center" justify="center">
      <Button
        size="lg"
        variant="outline"
        border="2px"
        borderColor={borderColor}
        height="65px"
        width="200px"
        _focus={{
          boxShadow:
            "0 0 1px 2px rgba(255, 255, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        }}
        _active={{ borderColor: "black" }}
        onClick={() => {
          window.open("https://buymeacoff.ee/antonyjr0", "_blank").focus();
        }}
        leftIcon={
          <img src="/buy_me_coffee_logo.png" width="40px" height="40px" />
        }
      >
        Buy Me a Coffee!
      </Button>
    </Stack>
  );
}

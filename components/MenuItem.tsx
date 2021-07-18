import { Button, Link } from "@chakra-ui/react";

function dummyLinkHandler(x) {}

const MenuItem = ({
  children,
  isLast = false,
  to = "/",
  linkSignal = dummyLinkHandler,
  ...rest
}) => {
  const handleClick = () => {
    linkSignal(to);
  };
  return (
    <Button
      size="sm"
      borderRadius="0px"
      _focus={{
        boxShadow:
          "0 0 1px 2px rgba(255, 255, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }}
      _hover={{backgroundColor: "black"}}
       _active={{backgroundColor: "black", borderColor: "black" }}
      bg="#515151"
      color="white"
      display={{ base: "none", sm: "block" }}
      {...rest}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default MenuItem;

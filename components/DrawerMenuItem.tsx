import { Button, Link } from "@chakra-ui/react";

function dummyLinkHandler(x) {}

const DrawerMenuItem = ({
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
      _focus={{}}
      _active={{}}
      _hover={{}}
      bg="white"
      {...rest}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default DrawerMenuItem;

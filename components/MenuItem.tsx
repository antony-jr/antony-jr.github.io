import { Button, Link } from "@chakra-ui/react";
import Fade from "react-reveal";

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
    <Fade>
      <Button
        size="sm"
        borderRadius="0px"
        _focus={{
          boxShadow:
            "0 0 1px 2px rgba(255, 255, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        }}
        _hover={{ backgroundColor: "black" }}
        _active={{ backgroundColor: "black", borderColor: "black" }}
        bg="#515151"
        color="white"
        {...rest}
        onClick={handleClick}
      >
        {children}
      </Button>
    </Fade>
  );
};

export default MenuItem;

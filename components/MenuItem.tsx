import Link from "next/link";
import { Button } from "@chakra-ui/react";
import Fade from "react-reveal";

const MenuItem = ({ children, isLast = false, to = "/", ...rest }) => {
  return (
    <Fade>
      <Link href={to}>
        <Button
          cursor="pointer"
          as="div"
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
        >
          {children}
        </Button>
      </Link>
    </Fade>
  );
};

export default MenuItem;

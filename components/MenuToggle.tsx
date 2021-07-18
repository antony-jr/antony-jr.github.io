import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Box } from "@chakra-ui/react";

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box
      cursor="pointer"
      display={{ base: "block", sm: "none" }}
      onClick={toggle}
    >
      {isOpen ? <GrClose /> : <GiHamburgerMenu style={{ color: "black" }} />}
    </Box>
  );
};

export default MenuToggle;

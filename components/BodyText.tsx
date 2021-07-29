import { Text } from "@chakra-ui/react";

export default function BodyText({ children, ...rest }) {
  return (
    <Text fontSize="md" {...rest}>
      {children}
    </Text>
  );
}

import { Container, HStack, Text, Flex } from "@chakra-ui/react";
import { px } from "framer-motion";
import React from "react";
import { CiSquarePlus } from "react-icons/ci";
const Navbar = () => {
  return (
    <>
      <Container paddingY={30}>
        <Flex justifyContent={"space-between"}>
          <Text fontWeight="bold" fontSize={{ base: "md", md: "lg", lg: "xl" }}>
            UniGossip
          </Text>
          <HStack>
            <CiSquarePlus size={"30px"} />
          </HStack>
        </Flex>
      </Container>
    </>
  );
};

export default Navbar;

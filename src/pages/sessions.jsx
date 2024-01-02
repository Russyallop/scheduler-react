import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import SessionHeader from "../Components/Headers/SessionHeader";
import { LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";
import SessionItem from "../Components/Sessions/SessionItem";

export default function Sessions() {
  return (
    <Box>
      <SessionHeader />
      <Flex
        flexDirection="column"
        mt={{ base: "20px", md: "40px" }}
        gap="24px"
        maxW={{ base: "90%", md: "70%" }}
        mx="auto"
      >
        <Button
          as={Link}
          to="/sessions/new"
          rightIcon={<LuPlus />}
          w="100%"
          py="28px"
          color="text"
          bg="#E4E4E4"
          _hover={{
            color: "white",
            bg: "black",
          }}
        >
          Create your first session
        </Button>
        <SessionItem />
        <SessionItem />
        <SessionItem />
        <SessionItem />
      </Flex>
    </Box>
  );
}

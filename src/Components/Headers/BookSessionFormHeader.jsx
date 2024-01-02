import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function BookSessionFormHeader() {
  return (
    <>
      <Box
        w="full"
        px="24px"
        bg={{ base: "#1D1D1D", md: "white" }}
        color="black"
        py={{ base: "0px", md: "24px" }}
      >
        <Flex
          alignItems="center"
          gap="5px"
          flexDir="column"
          display={{ base: "none", md: "flex" }}
        >
          <Heading color="black" fontWeight="600" fontSize="28px">
            Book session
          </Heading>
          <Text color="text" fontWeight="500" fontSize="14px">
            Please provide a few details ahead of your session
          </Text>
        </Flex>
      </Box>

      <Link>
        <Box
          display={{ base: "block", md: "none" }}
          w="full"
          px="24px"
          borderBottomWidth="1px"
          bg="dull_black"
          boxShadow="sm"
          color="white"
          py="6px"
        >
          Cancel
        </Box>
      </Link>
    </>
  );
}

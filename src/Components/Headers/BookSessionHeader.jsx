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
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

export default function BookSessionHeader() {
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
          justifyContent="space-between"
          gap="5px"
          display={{ base: "none", md: "flex" }}
        >
          <Flex cursor="pointer" alignItems="center" gap="2">
            <FaChevronLeft />
            Back
          </Flex>
          <Box>
            <Heading color="black" fontWeight="600" fontSize="28px">
              Choose a session
            </Heading>
            <Text color="text" fontWeight="500" fontSize="14px">
              Select the session that suits you
            </Text>
          </Box>
          <Box></Box>
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
          <Flex cursor="pointer" alignItems="center" gap="2">
            <FaChevronLeft />
            Back
          </Flex>
        </Box>
      </Link>
    </>
  );
}

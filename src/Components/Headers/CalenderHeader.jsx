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
import { FaPlus } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";

export default function CalenderHeader() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <>
      <Box
        display={{ base: "none", md: "block" }}
        w="full"
        px="24px"
        bg={{ base: "#1D1D1D", md: "white" }}
        color="black"
        py={{ base: "0px", md: "24px" }}
      >
        {currentUser?.role === "admin" && (
          <Flex alignItems="center" justifyContent="space-between">
            <Box></Box>
            <Flex
              alignItems="center"
              gap="5px"
              display={{ base: "none", md: "flex" }}
            >
              <Heading fontWeight="600" fontSize="28px">
                Your calender
              </Heading>
            </Flex>
            <Button
              rightIcon={<FaPlus />}
              _hover={{
                bg: "white",
                color: "black",
              }}
              bg="black"
              color="white"
              rounded="40px"
              py="12px"
              fontSize="14px"
              fontWeight="600"
            >
              New session
            </Button>
          </Flex>
        )}
        {currentUser?.role === "user" && (
          <Flex alignItems="center" justifyContent="space-between">
            <Box>Tutor list</Box>
            <Flex
              alignItems="center"
              gap="5px"
              display={{ base: "none", md: "flex" }}
            >
              <Avatar color="black" fontWeight="600" size="md"></Avatar>
              <Text fontWeight="600" fontSize="18px">
                Tutor name
              </Text>
            </Flex>
            <Button
              _hover={{
                bg: "white",
                color: "black",
              }}
              bg="black"
              color="white"
              rounded="40px"
              py="12px"
              fontSize="14px"
              fontWeight="600"
            >
              Select Multiple
            </Button>
          </Flex>
        )}
      </Box>
      {currentUser?.role === "admin" && (
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
          <Flex alignItems="center" justifyContent="space-between">
            <Flex alignItems="center" gap="2">
              <FaChevronLeft />
              Tutor name
            </Flex>
            <Button
              rightIcon={<FaPlus />}
              color="white"
              rounded="40px"
              bg="dull_black"
              py="12px"
              fontSize="14px"
              fontWeight="600"
            >
              New session
            </Button>
          </Flex>
        </Box>
      )}

      {currentUser?.role === "user" && (
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
          <Flex
            alignItems="center"
            justifyContent="space-between"
            color="selectbg"
          >
            <Flex alignItems="center" gap="2">
              <FaChevronLeft />
              Tutor name
            </Flex>
            <Button
              rounded="40px"
              bg="dull_black"
              py="12px"
              fontSize="14px"
              fontWeight="600"
            >
              Select
            </Button>
          </Flex>
        </Box>
      )}
    </>
  );
}

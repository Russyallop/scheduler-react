import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function MyBookingList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        flexDirection={{ base: "column", "2xl": "row" }}
        alignItems="center"
        w="100%"
        bg="white"
        rounded="8px"
        gap={{ base: "14px", "2xl": "24px" }}
      >
        <Box
          py={{ base: "24px", "2xl": "40px" }}
          borderRadius={{ base: "8px 8px 0px 0px", "2xl": "8px 0px 0px 8px" }}
          px={{ base: "24px", "2xl": "40px" }}
          width={{ base: "100%", "2xl": "auto" }}
          bg="dull_black"
          color="white"
        >
          <Text fontSize="18px" fontWeight="600">
            Tue 10 Oct 2023
          </Text>
          <Text>10:00 - 11:00</Text>
          <Text color="#2998FF">Location</Text>
        </Box>
        <Flex
          flex="1"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ base: "column", "2xl": "row" }}
          px={{ base: "20px", "2xl": "40px" }}
          gap={{ base: "20px", "2xl": "40px" }}
        >
          <Flex flexDirection="column" gap="4px">
            <Box fontSize="14px" fontWeight="700">
              Feedback session
            </Box>
            <Box fontWeight="500">Tutor name</Box>
            <Box fontSize="14px" fontWeight="600">
              £80.00
            </Box>
            <Box fontSize="14px" fontWeight="400" color="text" maxW="400px">
              Thanks for booking a session! Please check your email inbox for
              further details about supplying your tracks.
            </Box>
          </Flex>
          <Flex
            flexDir="column "
            gap={{ base: "3", "2xl": "3" }}
            mb={{ base: "30px", "2xl": "0px" }}
          >
            {/* <Link to={`/book-session/${1}`}> */}
            <Button
              bg="selectbg"
              _hover={{
                bg: "white",
                color: "black",
                border: "1px solid black",
              }}
              border="1px solid #f2f2f2"
              color="black"
              rounded="40px"
              py="12px"
              px="40px"
              w={{ base: "100%", "2xl": "auto" }}
              fontSize="14px"
              fontWeight="600"
            >
              Contact tutor
            </Button>
            {/* </Link> */}
            <Button
              color="black"
              _hover={{
                bg: "white",
                border: "1px solid black",
              }}
              border="1px solid white"
              rounded="40px"
              py="12px"
              px="40px"
              w={{ base: "100%", "2xl": "auto" }}
              fontSize="14px"
              fontWeight="600"
              onClick={onOpen}
            >
              Cancel
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent
          bg="white"
          color="black"
          px={{ base: "15px", "2xl": "40px" }}
        >
          <ModalHeader textAlign="center">Cancel Feedback Session?</ModalHeader>
          <ModalFooter display="flex " flexDir="column" w="full" gap="3">
            <Button
              w="full"
              onClick={onClose}
              color="white"
              _hover={{
                bg: "deletecolor",
              }}
              bg="deletecolor"
              rounded="40px"
              py="12px"
              px="40px"
              fontSize="14px"
              fontWeight="600"
            >
              Cancel booking
            </Button>
            <Button
              onClick={onClose}
              w="full"
              variant="ghost"
              color="black"
              _hover={{
                bg: "selectbg",
              }}
              bg="selectbg"
              rounded="40px"
              py="12px"
              px="40px"
              fontSize="14px"
              fontWeight="600"
            >
              Go back
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import sessionlogo from "../../assests/images/sessionbuilder.png";
import SessionHeader from "../Headers/SessionHeader";
import SessionBookedHeader from "../Headers/SessionBookedHeader";
import { Link } from "react-router-dom";

export default function SessionBooked({ handleNext, handlePrevious }) {
  return (
    <Box>
      <SessionBookedHeader />
      <Center mt={{ base: "10px", xl: "20px" }}>
        <VStack
          minW={{ base: "100%", md: "640px" }}
          maxW={{ base: "100%", md: "640px" }}
          spacing={{ base: 6, xl: 4 }}
          px={{ base: "15px", md: "0px" }}
          py={{ base: "16px", md: "0px" }}
        >
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            w="100%"
            bg="white"
            rounded="8px"
            gap={{ base: "24px", md: "15px" }}
          >
            <Image
              borderRadius="8px 8px 0 0"
              w="100%"
              h="240px"
              src={sessionlogo}
            />
            <Flex
              justifyContent="space-between"
              alignItems="center"
              flexDirection="column"
              px={{ base: "20px", xl: "40px" }}
              gap={{ base: "10px", xl: "20px" }}
            >
              <Center>
                <Box fontSize="24px" fontWeight="700">
                  Feedback session
                </Box>
              </Center>
              <Center display="flex" flexDir="column" gap="4px">
                <Text>Tutor name</Text>
                <Text>Tue 10 Oct 2023, 10:00 - 11:00</Text>
                <Text fontWeight="600">£80.00</Text>
                <Text fontWeight="600" color="#2998FF">
                  Location
                </Text>
              </Center>
            </Flex>
            <Flex
              px={{ base: "20px", xl: "40px" }}
              gap={{ base: "10px", xl: "15px" }}
              w="100%"
              flexDir="column"
              mt="15px"
            >
              <Box bg="selectbg" p="20px">
                Thanks for booking a session! Please check your email inbox for
                further details about supplying your tracks.
              </Box>
              <Link to="/mybookings">
                <Button
                  bg="black"
                  _hover={{
                    bg: "white",
                    color: "black",
                    border: "1px solid black",
                  }}
                  color="#F2F2F2"
                  rounded="40px"
                  py="12px"
                  mt="20px"
                  px="24px"
                  w="100%"
                  fontSize="14px"
                  fontWeight="600"
                  mb="60px"
                >
                  My bookings
                </Button>
              </Link>
            </Flex>
          </Flex>
        </VStack>
      </Center>
    </Box>
  );
}

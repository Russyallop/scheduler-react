import { Box, Button, Center, Flex, Image, VStack } from "@chakra-ui/react";
import React from "react";
import sessionlogo from "../../assests/images/sessionbuilder.png";
import SessionHeader from "../Headers/SessionHeader";

export default function NewSessionThree({ handleNext, handlePrevious }) {
  return (
    <>
      <SessionHeader />
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
              h="180px"
              src={sessionlogo}
            />
            <Flex
              justifyContent="space-between"
              alignItems="center"
              flexDirection={{ base: "column", xl: "row" }}
              px={{ base: "20px", xl: "40px" }}
              gap={{ base: "10px", xl: "20px" }}
            >
              <Center flexDirection="column" gap="6px">
                <Box fontSize="24px" fontWeight="700">
                  Feedback session
                </Box>
                <Box fontSize="14px" fontWeight="500">
                  £80.00 per hour
                </Box>
              </Center>
            </Flex>
            <Flex
              px={{ base: "20px", xl: "40px" }}
              gap={{ base: "10px", xl: "20px" }}
              w="100%"
              flexDir="column"
            >
              <Flex gap="4" flexDir="column">
                <Box fontWeight="600">Feild 1</Box>
                <Box bg="#F2F2F2" px="3" py="2">
                  How many tracks would you like me to review?
                </Box>
              </Flex>
              <Flex gap="4" flexDir="column">
                <Box fontWeight="600">Feild 2</Box>
                <Box bg="#F2F2F2" px="3" py="2">
                  How many tracks would you like me to review?
                </Box>
                <Flex gap="16px">
                  <Box px="4" py="2" rounded="20px" bg="selectbg">
                    Begineer
                  </Box>
                  <Box px="4" py="2" rounded="20px" bg="selectbg">
                    Expert
                  </Box>
                  <Box px="4" py="2" rounded="20px" bg="selectbg">
                    Advance
                  </Box>
                </Flex>
              </Flex>
              <Button
                bg="black"
                //   _hover={{
                //     bg: "white",
                //     color: "black",
                //   }}
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
                Finish
              </Button>
            </Flex>
          </Flex>
        </VStack>
      </Center>
    </>
  );
}

import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import sessionlogo from "../../assests/images/sessions.png";

export default function SessionItem() {
  return (
    <Flex
      flexDirection={{ base: "column", xl: "row" }}
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      bg="white"
      rounded="8px"
      gap={{ base: "24px", md: "0px" }}
    >
      <Image
        borderRadius={{ base: "8px 8px 0 0", xl: "8px 0 0 8px" }}
        w={{ base: "100%", xl: "auto" }}
        src={sessionlogo}
      />
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ base: "column", xl: "row" }}
        px={{ base: "20px", xl: "40px" }}
        gap={{ base: "20px", xl: "40px" }}
      >
        <Flex flexDirection="column" gap="6px">
          <Box fontSize="24px" fontWeight="700">
            Feedback session
          </Box>
          <Box fontSize="14px" fontWeight="400" color="text">
            Lorem ipsum dolor sit amet consectetur. Volutpat ac et tristique id
            volutpat neque. Quam viverra purus placerat et. Imperdiet lorem
            faucibus id varius nec ornare laoreet.
          </Box>
          <Box fontSize="14px" fontWeight="500">
            £80.00 per hour
          </Box>
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
          px="24px"
          w={{ base: "100%", xl: "auto" }}
          fontSize="14px"
          fontWeight="600"
        >
          Manage
        </Button>
      </Flex>
    </Flex>
  );
}

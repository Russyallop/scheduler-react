import React from "react";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import sessionlogo from "../../assests/images/sessions.png";
import { Link } from "react-router-dom";
export default function BookSessionItem() {
  return (
    <Flex
      flexDirection={{ base: "column", "2xl": "row" }}
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      bg="white"
      rounded="8px"
      gap={{ base: "24px", md: "10px" }}
    >
      <Image
        borderRadius={{ base: "8px 8px 0 0", "2xl": "8px 0 0 8px" }}
        w={{ base: "100%", "2xl": "auto" }}
        src={sessionlogo}
      />
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ base: "column", "2xl": "row" }}
        px={{ base: "20px", "2xl": "40px" }}
        gap={{ base: "20px", "2xl": "40px" }}
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
          <Box fontSize="14px" fontWeight="600">
            £80.00 per hour
          </Box>
        </Flex>
        <Link to={`/book-session/${1}`}>
          <Button
            bg="black"
            _hover={{
              bg: "white",
              border: "1px solid black",
              color: "black",
            }}
            color="#F2F2F2"
            rounded="40px"
            py="12px"
            px="40px"
            w={{ base: "100%", "2xl": "auto" }}
            fontSize="14px"
            fontWeight="600"
            mb={{ base: "30px", "2xl": "0px" }}
          >
            Select
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

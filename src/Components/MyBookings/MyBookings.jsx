import React from "react";
import MyBookingHeader from "../Headers/MyBookingHeader";
import MyBookingList from "./MyBookingList";
import { Flex } from "@chakra-ui/react";
export default function MyBookings() {
  return (
    <>
      <MyBookingHeader />
      <Flex
        flexDirection="column"
        mt={{ base: "20px", md: "40px" }}
        gap="24px"
        maxW={{ base: "90%", md: "55%" }}
        mx="auto"
      >
        <MyBookingList />
        <MyBookingList />
        <MyBookingList />
        <MyBookingList />
      </Flex>
    </>
  );
}

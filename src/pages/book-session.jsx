import { Flex } from "@chakra-ui/react";
import React from "react";
import BookSessionItem from "../Components/Sessions/BookSessionItem";
import BookSessionHeader from "../Components/Headers/BookSessionHeader";

export default function BookSession() {
  return (
    <>
      <BookSessionHeader />
      <Flex
        flexDirection="column"
        mt={{ base: "20px", md: "40px" }}
        gap="24px"
        maxW={{ base: "90%", md: "60%" }}
        mx="auto"
      >
        <BookSessionItem />
        <BookSessionItem />
        <BookSessionItem />
        <BookSessionItem />
      </Flex>
    </>
  );
}

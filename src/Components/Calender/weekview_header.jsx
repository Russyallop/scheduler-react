import React from "react";
import moment from "moment";
import { Box, Text } from "@chakra-ui/react";

const CustomHeader = ({ date }) => {
  const dayOfMonth = moment(date).format("DD");
  const dayOfWeek = moment(date).format("ddd").toLowerCase();

  // Check if the date is the current date
  const isToday = moment().isSame(date, "day");

  return (
    <Box display="flex" alignItems="center" mb="18px" borderBottom="none">
      <Text textTransform="capitalize" fontWeight="700">
        {dayOfWeek}
      </Text>
      <Text
        mr="10px"
        ml="10px"
        fontSize="12px"
        px="12px"
        py="2" // padding for the background colour
        borderRadius="full" // rounded corners for the background
        bg={isToday ? "black" : "transparent"}
        color={isToday ? "white" : "black"} // conditional background color
      >
        {dayOfMonth}
      </Text>
    </Box>
  );
};

export default CustomHeader;

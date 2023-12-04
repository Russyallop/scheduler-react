import React from "react";
import { Navigate } from "react-big-calendar";
import { Box, Button, Text } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoChevronForwardOutline } from "react-icons/io5";
const CustomToolbar = ({ label, onNavigate, onView, view }) => {
  console.log(label);
  const [month, year] = label.split(" ");
  const goToBack = () => {
    onNavigate(Navigate.PREVIOUS);
  };

  const goToNext = () => {
    onNavigate(Navigate.NEXT);
  };

  const goToCurrent = () => {
    onNavigate(Navigate.TODAY);
  };

  const changeView = (view) => {
    onView(view);
  };

  return (
    <Box className="rbc-toolbar" py="5" px="5">
      {view === "month" ? (
        <Box
          display="flex"
          justifyContent="center"
          gap="5px"
          minW={{ base: "auto", md: "250px" }}
        >
          <Text
            as="span"
            fontSize={{ base: "16px", md: "32px" }}
            fontWeight="bold"
          >
            {month}
          </Text>
          <Text as="span" fontSize={{ base: "16px", md: "32px" }}>
            {year}
          </Text>
        </Box>
      ) : (
        <Box
          minW={{ base: "auto", md: "250px" }}
          fontSize={{ base: "12px", md: "18px" }}
          fontWeight="bold"
        >
          {label}
        </Box>
      )}

      <Box bg="#F2F2F2" p="1" rounded="20px">
        <Button
          onClick={() => changeView("month")}
          isActive={view === "month"}
          _active={{
            bg: "white",
            color: "black",
          }}
        >
          Month
        </Button>
        <Button
          onClick={() => changeView("week")}
          isActive={view === "week"}
          _active={{
            bg: "white",
            color: "black",
          }}
        >
          Week
        </Button>
      </Box>

      <Box display="flex" gap="10px">
        <Button type="button" onClick={goToBack} boxShadow="lg">
          <IoIosArrowBack size={20} />
        </Button>
        <Button type="button" onClick={goToNext} boxShadow="lg">
          <IoChevronForwardOutline size={20} />
        </Button>
      </Box>
    </Box>
  );
};

export default CustomToolbar;

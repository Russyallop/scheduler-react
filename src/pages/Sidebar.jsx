import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  Stack,
  Image,
  Button,
  VStack,
  Checkbox,
  Heading,
  Drawer,
  DrawerContent,
  IconButton,
  useDisclosure,
  DrawerOverlay,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import MyCalender from "../Components/Calender/Calender";

export default function Sidebar() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log(currentUser);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [dataToShowInSidebar, setDataToShowInSidebar] = useState("tutor");
  const [checkboxValues, setCheckboxValues] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
  });

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [checkboxName]: !prevValues[checkboxName],
    }));
  };

  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.700")}
      minH="100vh"
    >
      <SidebarContent
        display={{ base: "none", md: "unset" }}
        dataToShowInSidebar={dataToShowInSidebar}
        currentUser={currentUser}
        setDataToShowInSidebar={setDataToShowInSidebar}
        checkboxValues={checkboxValues}
        handleCheckboxChange={handleCheckboxChange}
        onClose={onClose}
      />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left" size="full">
        <DrawerOverlay display={{ base: "block", md: "none" }} />
        <DrawerContent display={{ base: "block", md: "none" }}>
          <SidebarContent
            w="full"
            borderRight="none"
            dataToShowInSidebar={dataToShowInSidebar}
            setDataToShowInSidebar={setDataToShowInSidebar}
            checkboxValues={checkboxValues}
            handleCheckboxChange={handleCheckboxChange}
            onClose={onClose}
            currentUser={currentUser}
          />
        </DrawerContent>
      </Drawer>
      <Box
        ml={{ base: 0, md: "280px" }}
        display="flex"
        flexDirection="column"
        transition=".3s ease"
        h="100vh"
      >
        <Flex
          as="header"
          align="center"
          justify={{ base: "space-between", md: "space-between" }}
          w="full"
          px="24px"
          borderBottomWidth="1px"
          // borderColor={useColorModeValue("inherit", "gray.500")}
          bg={{ base: "#1D1D1D", md: "#F2F2F2" }}
          boxShadow="sm"
          color="black"
          py="24px"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={onOpen}
            icon={<FiMenu />}
            color="white"
            fontSize="40px"
          />
          <Box
            cursor="pointer"
            color="black"
            fontWeight="500"
            display={{ base: "none", md: "block" }}
          >
            &#x25c0; Tutor list
          </Box>

          <Box
            color="#2998FF"
            fontWeight="600"
            fontSize="18px"
            display={{ base: "block", md: "none" }}
          >
            Logo
          </Box>

          <Box display={{ base: "block", md: "none" }}></Box>

          <Flex
            alignItems="center"
            gap="15px"
            display={{ base: "none", md: "flex" }}
          >
            <Avatar
              ml="4"
              size="md"
              name="Ahmad"
              src="https://avatars2.githubusercontent.com/u/37842853?v=4"
              cursor="pointer"
            />
            <Text color="black" fontWeight="600" fontSize="24px">
              Tutor name
            </Text>
          </Flex>

          <Flex align="center" display={{ base: "none", md: "block" }}>
            <Button
              bg="black"
              _hover={{
                bg: "black",
              }}
              color="white"
              rounded="40px"
              w="100%"
              py="12px"
              fontSize="14px"
              fontWeight="600"
            >
              Select multiple
            </Button>
          </Flex>
        </Flex>

        <Box
          as="main"
          px={{ base: "0", md: "6" }}
          py="3"
          flex="1"
          bg={useColorModeValue("#F2F2F2", "#F2F2F2")}
          color="black"
          overflow="auto"
        >
          <Stack>
            <MyCalender />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

const SidebarContent = ({
  dataToShowInSidebar,
  handleCheckboxChange,
  checkboxValues,
  onClose,
  currentUser,
  setDataToShowInSidebar = { setDataToShowInSidebar },
  ...props
}) => (
  <Box
    as="nav"
    pos="fixed"
    top="0"
    left="0"
    zIndex="sticky"
    h="full"
    pb="10"
    overflowX="hidden"
    overflowY="auto"
    bg={useColorModeValue("white", "#1D1D1D")}
    borderColor={useColorModeValue("inherit", "gray.700")}
    borderRightWidth="1px"
    w="280px"
    p="20px"
    {...props}
  >
    <Icon
      display={{ base: "block", md: "none" }}
      as={IoClose}
      onClick={onClose}
      h={8}
      w={8}
      mb="30px"
    />
    <Flex>
      <Text
        fontSize="18px"
        ml="2"
        color={useColorModeValue("#2998FF", "#2998FF")}
        fontWeight="600"
      >
        Logo
      </Text>
    </Flex>
    <Flex mt="30px" alignItems="center" gap="15px">
      <Box>
        <Avatar
          width="32px"
          height="32px"
          name="Ahmad"
          src="https://avatars2.githubusercontent.com/u/37842853?v=4"
          cursor="pointer"
        />
      </Box>
      <Flex flexDirection="column">
        <Text fontWeight="700" fontSize="14px">
          Awais
        </Text>
        <Text fontWeight="500" fontSize="12px">
          Edit
        </Text>
      </Flex>
    </Flex>

    {/* Admin */}
    {currentUser?.role === "admin" && (
      <Flex mt="30px" flexDirection="column" gap="15px">
        <Button
          bg="white"
          _hover={{
            bg: "white",
          }}
          color="black"
          rounded="40px"
          w="100%"
          py="12px"
          fontSize="14px"
          fontWeight="600"
        >
          Calender
        </Button>
      </Flex>
    )}

    {/* Admin */}
    {currentUser?.role === "admin" && (
      <Flex mt="30px" flexDirection="column" gap="15px">
        <Button
          bg="black"
          _hover={{
            bg: "black",
          }}
          color="white"
          rounded="40px"
          w="100%"
          py="12px"
          fontSize="14px"
          fontWeight="600"
        >
          Upcoming sessions
        </Button>
        <Button
          bg="black"
          _hover={{
            bg: "black",
          }}
          color="white"
          rounded="40px"
          w="100%"
          py="12px"
          fontSize="14px"
          fontWeight="600"
        >
          Session builder
        </Button>
        <Button
          bg="black"
          _hover={{
            bg: "black",
          }}
          color="white"
          rounded="40px"
          w="100%"
          py="12px"
          fontSize="14px"
          fontWeight="600"
        >
          Address book
        </Button>
        <Button
          bg="black"
          _hover={{
            bg: "black",
          }}
          color="white"
          rounded="40px"
          w="100%"
          py="12px"
          fontSize="14px"
          fontWeight="600"
        >
          Share profile
        </Button>
      </Flex>
    )}

    {/* User */}
    {currentUser?.role === "user" && (
      <Flex mt="30px" flexDirection="column" gap="15px">
        <Button
          bg={dataToShowInSidebar === "tutor" ? "white" : "black"}
          _hover={{
            bg: dataToShowInSidebar === "tutor" ? "white" : "black",
          }}
          color={dataToShowInSidebar === "tutor" ? "black" : "white"}
          rounded="40px"
          w="100%"
          py="12px"
          fontSize="14px"
          fontWeight="600"
          onClick={() => {
            setDataToShowInSidebar("tutor");
          }}
        >
          Tutor list
        </Button>
        <Button
          bg={dataToShowInSidebar === "bookings" ? "white" : "black"}
          _hover={{
            bg: dataToShowInSidebar === "bookings" ? "white" : "black",
          }}
          color={dataToShowInSidebar === "bookings" ? "black" : "white"}
          rounded="40px"
          w="100%"
          py="12px"
          fontSize="14px"
          fontWeight="600"
          onClick={() => {
            setDataToShowInSidebar("bookings");
          }}
        >
          My bookings
        </Button>
      </Flex>
    )}

    {/* User and Bookings */}
    {dataToShowInSidebar === "bookings" && currentUser?.role === "user" && (
      <Box
        mt="30px"
        direction="column"
        as="nav"
        fontSize="md"
        color="#D2D2D2"
        aria-label="Main Navigation"
      >
        <Box color="white" fontWeight="700" fontSize="14px">
          Filter by topic
        </Box>
        <VStack align="start" spacing={4} mt="20px">
          <Checkbox
            isChecked={checkboxValues.checkbox1}
            onChange={() => handleCheckboxChange("checkbox1")}
            colorScheme=""
            iconColor="white"
            borderColor="white"
            fontWeight="500"
            fontSize="12px"
            gap="6px"
          >
            All sessions
          </Checkbox>
          <Checkbox
            isChecked={checkboxValues.checkbox2}
            onChange={() => handleCheckboxChange("checkbox2")}
            colorScheme=""
            iconColor="white"
            borderColor="white"
            fontWeight="500"
            fontSize="12px"
            gap="6px"
          >
            Sound engineering
          </Checkbox>
          <Checkbox
            isChecked={checkboxValues.checkbox3}
            onChange={() => handleCheckboxChange("checkbox3")}
            colorScheme=""
            iconColor="white"
            borderColor="white"
            fontWeight="500"
            fontSize="12px"
            gap="6px"
          >
            Feedback session
          </Checkbox>
          <Checkbox
            isChecked={checkboxValues.checkbox4}
            onChange={() => handleCheckboxChange("checkbox4")}
            colorScheme=""
            iconColor="white"
            borderColor="white"
            fontWeight="500"
            fontSize="12px"
            gap="6px"
          >
            DJ lessons
          </Checkbox>
        </VStack>
      </Box>
    )}

    {/* User and Bookings */}
    {dataToShowInSidebar === "bookings" && currentUser?.role === "user" && (
      <Box
        mt="40px"
        direction="column"
        as="nav"
        fontSize="md"
        color="#D2D2D2"
        aria-label="Main Navigation"
      >
        <Box color="white" fontWeight="700" fontSize="14px">
          Filter by session length
        </Box>
        <VStack align="start" spacing={4} mt="20px">
          <Checkbox
            isChecked={checkboxValues.checkbox5}
            onChange={() => handleCheckboxChange("checkbox5")}
            colorScheme=""
            iconColor="white"
            borderColor="white"
            fontWeight="500"
            fontSize="12px"
            gap="6px"
          >
            1 hour or less
          </Checkbox>
          <Checkbox
            isChecked={checkboxValues.checkbox6}
            onChange={() => handleCheckboxChange("checkbox6")}
            colorScheme=""
            iconColor="white"
            borderColor="white"
            fontWeight="500"
            fontSize="12px"
            gap="6px"
          >
            2 hours
          </Checkbox>
          <Checkbox
            isChecked={checkboxValues.checkbox7}
            onChange={() => handleCheckboxChange("checkbox7")}
            colorScheme=""
            iconColor="white"
            borderColor="white"
            fontWeight="500"
            fontSize="12px"
            gap="6px"
          >
            3 hours
          </Checkbox>
          <Checkbox
            isChecked={checkboxValues.checkbox8}
            onChange={() => handleCheckboxChange("checkbox8")}
            colorScheme=""
            iconColor="white"
            borderColor="white"
            fontWeight="500"
            fontSize="12px"
            gap="6px"
          >
            4 or more hours
          </Checkbox>
        </VStack>
      </Box>
    )}

    <Box position="absolute" bottom="5%" w="88%">
      <Button
        bg="transparent"
        rounded="40px"
        w="100%"
        left="0"
        py="12px"
        border="1px solid  #2F2F2F"
        fontSize="14px"
        fontWeight="600"
        onClick={() => {
          window.localStorage.setItem("currentUser", null);
          window.location.reload();
        }}
      >
        Log out
      </Button>
    </Box>
  </Box>
);

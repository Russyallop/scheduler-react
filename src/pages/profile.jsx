import { useEffect, useState } from "react";
import { Stack, Button, VStack, Center, Box, Avatar } from "@chakra-ui/react";
import axios from "axios";
import { useLocation } from "react-router-dom";
const Profile = () => {
  const location = useLocation();
  const [name, setName] = useState("");

  async function getUserData() {
    document.cookie = `jwt=${location?.state?.token}; path=/`; // Set the cookie
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/userData`,
        { withCredentials: true }
      );
      setName(response?.data?.user?.name);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Box position="relative" bg="black" h="100vh" w="100vw">
      <Box
        display={{ base: "none", md: "block" }}
        position="absolute"
        top="80px"
        left="160px"
        fontSize="48px"
        color="#2998FF"
        fontWeight="600"
      >
        Logo
      </Box>

      <Center h="100vh" alignItems={["end", "end", "center"]}>
        <Stack minW={{ base: "100%", md: "640px" }} spacing={12}>
          <Center
            display={{ base: "flex", md: "none" }}
            fontSize="24px"
            color="#2998FF"
            fontWeight="600"
          >
            Logo
          </Center>

          <VStack
            bg="#1D1D1D"
            borderTopRadius={{ base: "16px", md: "none" }}
            rounded={{ base: "", md: "lg" }}
            px={{ base: "15px", md: "140px" }}
            py={{ base: "40px", md: "60px" }}
            direction="column"
            spacing="15px"
          >
            <Avatar bg="#2998FF" size="lg" src="https://bit.ly/broken-link" />
            <Stack direction="column" alignItems="center">
              <Box fontSize="18px" color="#D2D2D2" fontWeight="500">
                Welcome,
              </Box>
              <Box fontSize="24px" fontWeight="600" mt="-10px" color="white">
                {name}
              </Box>
            </Stack>
            <Button
              mt="15px"
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
              Continue
            </Button>
          </VStack>
        </Stack>
      </Center>
    </Box>
  );
};

export default Profile;

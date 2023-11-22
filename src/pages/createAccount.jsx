import React from "react";
// import { Button } from "./Button";
// import { Form } from "./Form";
// import { Toggle } from "./Toggle";
import {
    FormControl,
    Input,
    Stack,
    Button,
    Switch,
    Heading,
    VStack,
    Center,
    InputGroup,
    InputRightElement,
    Link,
    Box,
    Avatar,
  } from "@chakra-ui/react";
  import { AiOutlineEyeInvisible } from "react-icons/ai";
  import { AiOutlineEye } from "react-icons/ai";
  import { useForm } from "react-hook-form";

export const CreateAccount = () => {
  return (
    <Box position="relative" bg="black" height="100vh" width="100vw">
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

    <Center height="100vh" alignItems={["end", "end", "center"]}>
      <VStack minW={{ base: "100%", md: "640px" }} spacing={12}>
        <Center
          display={{ base: "flex", md: "none" }}
          fontSize="24px"
          color="#2998FF"
          fontWeight="600"
        >
          Logo
        </Center>

        <VStack
          as="form"
          bg="#1D1D1D"
          borderTopRadius={{ base: "16px", md: "none" }}
          rounded={{ base: "", md: "lg" }}
          px={{ base: "15px", md: "140px" }}
          py={{ base: "40px", md: "60px" }}
          align="start"
          spacing={4}
          width={{ base: "100%", md: "640px" }}
        >
          <Heading
            fontSize={{ base: "18px", md: "24px" }}
            fontWeight="600"
            color="white"
            textAlign={{ base: "left", md: "center" }}
          >
            Create an account
          </Heading>
          <Heading
            fontSize={{ base: "14px", md: "18px" }}
            fontWeight="600"
            color="white"
            textAlign={{ base: "left", md: "center" }}
          >
            Your details
          </Heading>

          <FormControl id="first-name">
            <Input
              bg="#2F2F2F"
              rounded="md"
              borderColor="#616161"
              _hover={{ borderColor: "#616161" }}
              color="white"
              type="text"
              placeholder="First name"
              fontSize={{ base: "12px", md: "14px" }}
              py="12px"
            />
          </FormControl>
          <FormControl id="last-name">
            <Input
              bg="#2F2F2F"
              rounded="md"
              borderColor="#616161"
              _hover={{ borderColor: "#616161" }}
              color="white"
              type="text"
              placeholder="Last name"
              fontSize={{ base: "12px", md: "14px" }}
              py="12px"
            />
          </FormControl>
          <FormControl id="email">
            <Input
              bg="#2F2F2F"
              rounded="md"
              borderColor="#616161"
              _hover={{ borderColor: "#616161" }}
              color="white"
              type="email"
              placeholder="Email address"
              fontSize={{ base: "12px", md: "14px" }}
              py="12px"
            />
          </FormControl>
          <Box border="1px solid white" rounded="md" borderColor="#616161" color="white">
            <FormControl id="password">
              <Input
                bg="#2F2F2F"
                rounded="md"
                borderColor="#616161"
                _hover={{ borderColor: "#616161" }}
                color="white"
                type="password"
                placeholder="Create password"
                fontSize={{ base: "12px", md: "14px" }}
                py="12px"
              />
            </FormControl>
            <FormControl id="confirm-password">
              <Input
                bg="#2F2F2F"
                rounded="md"
                borderColor="#616161"
                _hover={{ borderColor: "#616161" }}
                color="white"
                type="password"
                placeholder="Re-type password"
                fontSize={{ base: "12px", md: "14px" }}
                py="12px"
              />
            </FormControl>
          </Box>

          {/* Additional form elements */}
          
          <VStack w="100%" mt="30px" direction="column" gap="15px">
            <Button
              bg="#2F2F2F"
              _hover={{ bg: "#2F2F2F" }}
              color="white"
              rounded="40px"
              w="100%"
              py="12px"
              fontSize="14px"
              fontWeight="600"
              type="submit"
            >
              Continue
            </Button>
            <Link color="#D2D2D2" fontSize={{ base: "12px", md: "14px" }}>
              By creating an account, you agree to our Privacy Policy
            </Link>
          </VStack>
        
        </VStack>
      </VStack>
    </Center>
  </Box>
  );
};

export default CreateAccount;

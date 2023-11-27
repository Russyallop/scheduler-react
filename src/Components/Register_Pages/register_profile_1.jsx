import React from "react";
import { useState } from "react";
import {
  FormControl,
  Input,
  Stack,
  Button,
  Heading,
  VStack,
  Center,
  InputGroup,
  Box,
} from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const signupSchema = yup.object().shape({
  firstname: yup.string().required("Firstname is required"),
  lastname: yup.string().required("Lastname is required"),
  contact: yup.string().required("Contact is required"),
  address: yup.string().required("Address is required"),
});
const Register_Profile_One = ({ handleNext, handlePrevious }) => {
  const [show, setShow] = useState(false);
  const [registerType, setRegisterType] = useState("tutor");
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setShow(!show);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
  } = useForm({ resolver: yupResolver(signupSchema) });

  // const watchEmail = watch("Email", "");
  // const watchPassword = watch("Password", "");
  // const watchConfirmPassword = watch("confirm_password", "");

  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log(data);
    setIsLoading(false);
    handleNext();
  };

  return (
    <Box position="relative" bg="black" h="100vh" w="100vw">
      <Box
        display={{ base: "none", md: "block" }}
        position="absolute"
        top="5%"
        left="10%"
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
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            bg="#1D1D1D"
            position="relative"
            borderTopRadius={{ base: "16px", md: "none" }}
            rounded={{ base: "", md: "lg" }}
            px={{ base: "15px", md: "120px" }}
            py={{ base: "40px", md: "60px" }}
          >
            <Box
              onClick={() => {
                handlePrevious();
              }}
              position="absolute"
              top="25px"
              left="24px"
              color="#D2D2D2"
              fontWeight="500"
              display="flex"
              gap="5px"
              alignItems="center"
              cursor="pointer"
            >
              <IoIosArrowBack size="20px" />
              <Box>Cancel</Box>
            </Box>

            <Stack
              align="center"
              mb={{ base: "15px", md: "30px" }}
              mt={{ base: "20px", md: "10px" }}
            >
              <Heading
                fontSize={{ base: "18px", md: "24px" }}
                fontWeight="600"
                color="white"
              >
                Create an account
              </Heading>
              <Box color="#D2D2D2" fontSize={{ base: "18px", md: "18px" }}>
                Your Profile 1/2
              </Box>
            </Stack>
            <VStack spacing="12px" w="100%">
              <FormControl id="firstname">
                <Input
                  bg="#2F2F2F"
                  borderColor={errors.firstname ? "#E1526C" : "#616161"}
                  rounded="md"
                  _hover={{
                    borderColor: "#616161",
                  }}
                  color="white"
                  type="text"
                  placeholder="First name"
                  {...register("firstname")}
                  _placeholder={{
                    color: "#D2D2D2",
                    fontSize: { base: "12px", md: "14px" },
                  }}
                />
                <Box color="#E1526C" fontSize="14px" mt="5px">
                  {errors.firstname && <p>{errors.firstname.message}</p>}
                </Box>
              </FormControl>
              <FormControl id="lastname">
                <Input
                  bg="#2F2F2F"
                  borderColor={errors.lastname ? "#E1526C" : "#616161"}
                  rounded="md"
                  _hover={{
                    borderColor: "#616161",
                  }}
                  color="white"
                  type="text"
                  placeholder="Last name"
                  {...register("lastname")}
                  _placeholder={{
                    color: "#D2D2D2",
                    fontSize: { base: "12px", md: "14px" },
                  }}
                />
                <Box color="#E1526C" fontSize="14px" mt="5px">
                  {errors.lastname && <p>{errors.lastname.message}</p>}
                </Box>
              </FormControl>
              <FormControl id="contact">
                <Input
                  bg="#2F2F2F"
                  borderColor={errors.contact ? "#E1526C" : "#616161"}
                  rounded="md"
                  _hover={{
                    borderColor: "#616161",
                  }}
                  color="white"
                  type="text"
                  placeholder="Contact number"
                  {...register("contact")}
                  _placeholder={{
                    color: "#D2D2D2",
                    fontSize: { base: "12px", md: "14px" },
                  }}
                />
                <Box color="#E1526C" fontSize="14px" mt="5px">
                  {errors.contact && <p>{errors.contact.message}</p>}
                </Box>
              </FormControl>

              <Box w="full" border="1px solid #616161" rounded="8px" p="12px">
                <FormControl id="address" flex="1">
                  <InputGroup size="md">
                    <Input
                      bg="#2F2F2F"
                      borderColor={errors.address ? "#E1526C" : "#616161"}
                      color="white"
                      rounded="md"
                      _hover={{
                        borderColor: "#616161",
                      }}
                      type="text"
                      placeholder="Address"
                      {...register("address")}
                      _placeholder={{
                        color: "#D2D2D2",
                        fontSize: { base: "12px", md: "14px" },
                      }}
                    />
                  </InputGroup>
                  <Box color="#E1526C" fontSize="14px" mt="5px">
                    {errors.address && <p>{errors.address.message}</p>}
                  </Box>
                  <Button
                    mt="16px"
                    color="white"
                    rounded="40px"
                    w="100%"
                    py="12px"
                    fontSize="14px"
                    fontWeight="600"
                    bg={"black"}

                    // type="submit"
                    // isLoading={isLoading}
                  >
                    Find address
                  </Button>
                </FormControl>
              </Box>
            </VStack>
            <VStack w="100%" mt={{ base: "15px", md: "30px" }}>
              <Button
                color="white"
                rounded="40px"
                w="100%"
                py="12px"
                fontSize="14px"
                fontWeight="600"
                bg={"black"}

                type="submit"
                isLoading={isLoading}
              >
                Continue
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Center>
    </Box>
  );
};

export default Register_Profile_One;

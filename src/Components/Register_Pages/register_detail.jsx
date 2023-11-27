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
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const signupSchema = yup.object().shape({
  Email: yup.string().email("Email is invalid").required("Email is required"),
  Password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("Password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});
const RegisterDetails = ({ handleNext, handlePrevious }) => {
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
            <Link to="/login">
              <Box
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
                <Box>Log in</Box>
              </Box>
            </Link>
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
                Your details
              </Box>
            </Stack>

            <Box
              display="flex"
              w="full"
              bg="#616161"
              rounded="60px"
              mb={{ base: "15px", md: "30px" }}
            >
              <Button
                flex="1"
                bg={registerType === "student" ? "white" : ""}
                color={registerType === "student" ? "black" : "white"}
                rounded={registerType === "student" ? "60px" : ""}
                _hover={{
                  bg: registerType === "student" ? "white" : "",
                }}
                transition="all"
                transitionDuration="0.5s"
                onClick={() => {
                  setRegisterType("student");
                }}
              >
                Student
              </Button>
              <Button
                flex="1"
                bg={registerType === "tutor" ? "white" : ""}
                color={registerType === "tutor" ? "black" : "white"}
                rounded={registerType === "tutor" ? "60px" : ""}
                _hover={{
                  bg: registerType === "tutor" ? "white" : "",
                }}
                transition="all"
                transitionDuration="0.5s"
                onClick={() => {
                  setRegisterType("tutor");
                }}
              >
                Tutor
              </Button>
            </Box>

            <VStack spacing="30px" w="100%">
              <FormControl id="email">
                <Input
                  bg="#2F2F2F"
                  borderColor={errors.Email ? "#E1526C" : "#616161"}
                  rounded="md"
                  _hover={{
                    borderColor: "#616161",
                  }}
                  color="white"
                  type="email"
                  placeholder="Email address"
                  {...register("Email")}
                  _placeholder={{
                    color: "#D2D2D2",
                    fontSize: { base: "12px", md: "14px" },
                  }}
                />
                <Box color="#E1526C" fontSize="14px" mt="5px">
                  {errors.Email && <p>{errors.Email.message}</p>}
                </Box>
              </FormControl>

              <Box w="full" border="1px solid #616161" rounded="8px" p="12px">
                <Box display="flex" flexDirection="column" gap="16px">
                  <FormControl id="password" flex="1">
                    <InputGroup size="md">
                      <Input
                        bg="#2F2F2F"
                        borderColor={errors.Password ? "#E1526C" : "#616161"}
                        color="white"
                        rounded="md"
                        _hover={{
                          borderColor: "#616161",
                        }}
                        type={show ? "text" : "password"}
                        placeholder="Password"
                        {...register("Password")}
                        _placeholder={{
                          color: "#D2D2D2",
                          fontSize: { base: "12px", md: "14px" },
                        }}
                      />
                      <InputRightElement>
                        <Box size="sm" rounded="md" onClick={handleClick}>
                          {!show ? (
                            <AiOutlineEyeInvisible size={20} color="#616161" />
                          ) : (
                            <AiOutlineEye size={20} color="#616161" />
                          )}
                        </Box>
                      </InputRightElement>
                    </InputGroup>
                    <Box color="#E1526C" fontSize="14px" mt="5px">
                      {errors.Password && <p>{errors.Password.message}</p>}
                    </Box>
                  </FormControl>
                  <FormControl id="confirm_password">
                    <InputGroup size="md">
                      <Input
                        bg="#2F2F2F"
                        borderColor={
                          errors.confirm_password ? "#E1526C" : "#616161"
                        }
                        color="white"
                        rounded="md"
                        _hover={{
                          borderColor: "#616161",
                        }}
                        type={show ? "text" : "password"}
                        placeholder="Re-type password"
                        {...register("confirm_password")}
                        _placeholder={{
                          color: "#D2D2D2",
                          fontSize: { base: "12px", md: "14px" },
                        }}
                      />
                      <InputRightElement>
                        <Box size="sm" rounded="md" onClick={handleClick}>
                          {!show ? (
                            <AiOutlineEyeInvisible size={20} color="#616161" />
                          ) : (
                            <AiOutlineEye size={20} color="#616161" />
                          )}
                        </Box>
                      </InputRightElement>
                    </InputGroup>
                    <Box color="#E1526C" fontSize="14px" mt="5px">
                      {errors.confirm_password && (
                        <p>{errors.confirm_password.message}</p>
                      )}
                    </Box>
                  </FormControl>
                </Box>
              </Box>
            </VStack>
            <VStack
              w="100%"
              mt={{ base: "15px", md: "30px" }}
              direction="column"
              gap="15px"
            >
              <Button
              bg={"black"}
                color="white"
                rounded="40px"
                w="100%"
                py="12px"
                fontSize="14px"
                fontWeight="600"
                type="submit"
                isLoading={isLoading}
              >
                Continue
              </Button>
              <Box color="#D2D2D2" fontWeight="400" fontSize="14px">
                By creating an account, you agree to our
                <Link to="/" style={{ marginLeft: "5px" }}>
                  Privacy Policy
                </Link>
              </Box>
            </VStack>
          </VStack>
        </Stack>
      </Center>
    </Box>
  );
};

export default RegisterDetails;

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
  Link,
  Box,
  Avatar,
} from "@chakra-ui/react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { useForm } from "react-hook-form";

const AdminLogin = () => {
  const [show, setShow] = useState(false);
  const [succssfulLogin, setSuccssfulLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setShow(!show);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
  } = useForm();
  const watchEmail = watch("Email", "");
  const watchPassword = watch("Password", "");

  const onSubmit = (data) => {
    setIsLoading(true);
    console.log(data);

    if (!data.Email) {
      setError("Email", {
        type: "manual",
        message: "Email not recognised",
      });
    }

    if (!data.Password) {
      setError("Password", {
        type: "manual",
        message: "Password incorrect",
      });
    }

    if (data.Email !== "mawais2k2@gmail.com") {
      setError("Email", {
        type: "manual",
        message: "Email not recognised",
      });
    }
    setIsLoading(false);
    setSuccssfulLogin(true);
  };

  const isLoginFormValid = () => {
    return !watchEmail || watchPassword.length < 8;
  };

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
          {!succssfulLogin && (
            <VStack
              as="form"
              onSubmit={handleSubmit(onSubmit)}
              bg="#1D1D1D"
              borderTopRadius={{ base: "16px", md: "none" }}
              rounded={{ base: "", md: "lg" }}
              px={{ base: "15px", md: "140px" }}
              py={{ base: "40px", md: "60px" }}
            >
              <Stack align="center" mb="30px">
                <Heading
                  fontSize={{ base: "18px", md: "24px" }}
                  fontWeight="600"
                  color="white"
                >
                  Log in
                </Heading>
              </Stack>

              <VStack spacing={4} w="100%">
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
                <FormControl id="password">
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
              </VStack>
              <Stack direction="row" justify="end" w="100%">
                <Link color="#D2D2D2" fontSize={{ base: "12px", md: "14px" }}>
                  Forgot password?
                </Link>
              </Stack>
              <VStack w="100%" mt="30px" direction="column" gap="15px">
                <Button
                  bg={isLoginFormValid() ? "#2F2F2F" : "black"}
                  _hover={{
                    bg: isLoginFormValid() ? "#2F2F2F" : "black",
                  }}
                  color="white"
                  rounded="40px"
                  w="100%"
                  py="12px"
                  fontSize="14px"
                  fontWeight="600"
                  type="submit"
                  isDisabled={isLoginFormValid()}
                  isLoading={isLoading}
                >
                  Log in
                </Button>
                <Button
                  variant="outline"
                  borderColor="#2F2F2F"
                  bg="#1D1D1D"
                  _hover={{
                    bg: "#1D1D1D",
                  }}
                  color="white"
                  rounded="40px"
                  w="100%"
                  py="12px"
                  fontSize="14px"
                  fontWeight="600"
                >
                  Create an account
                </Button>
              </VStack>
            </VStack>
          )}

          {succssfulLogin && (
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
                  Awais
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
          )}
        </Stack>
      </Center>
    </Box>
  );
};

export default AdminLogin;

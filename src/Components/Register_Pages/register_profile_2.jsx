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
  Textarea,
  FormLabel,
  Image,
} from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const signupSchema = yup.object().shape({
  display_name: yup.string().required("Display name is required"),
  discription: yup.string().required("Discription is required"),
});
const Register_Profile_Two = ({ handleNext, handlePrevious }) => {
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
  const profilePicFile = watch("profile_pic");

  const profilePicPreviewUrl = profilePicFile?.[0]
    ? URL.createObjectURL(profilePicFile[0])
    : null;

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
              <Box>Back</Box>
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
                Your Profile 2/2
              </Box>
            </Stack>

            <VStack spacing={{ base: "20px", md: "30px" }} w="100%">
              <FormControl>
                <Box
                  as="label"
                  htmlFor="profile_pic_input"
                  w="100%"
                  display="inline-block"
                  border={
                    errors.profile_pic
                      ? "1px solid #E1526C"
                      : "1px solid #616161"
                  }
                  rounded="md"
                  cursor="pointer"
                >
                  {profilePicPreviewUrl ? (
                    <Center
                      w="100%"
                      flexDirection="column"
                      gap="16px"
                      fontSize="14px"
                      alignItems="center"
                      py={{ base: "24px", md: "24px" }}
                    >
                      <Image
                        rounded="full"
                        objectFit="cover"
                        src={profilePicPreviewUrl}
                        alt="Profile Pic"
                        style={{
                          width: "80px",
                          height: "80px",
                          display: "block",
                        }}
                      />
                      <Box color="#E1526C">Remove</Box>
                    </Center>
                  ) : (
                    // Your SVG placeholder component
                    <Center py={{ base: "24px", md: "24px" }} color="white">
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                      >
                        <Box>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="80"
                            height="81"
                            viewBox="0 0 80 81"
                            fill="none"
                          >
                            <rect
                              y="0.5"
                              width="80"
                              height="80"
                              rx="40"
                              fill="#616161"
                            />
                            <rect
                              x="41.0469"
                              y="28.0459"
                              width="24"
                              height="3"
                              transform="rotate(90 41.0469 28.0459)"
                              fill="black"
                            />
                            <rect
                              x="27.5469"
                              y="38.5459"
                              width="24"
                              height="3"
                              fill="black"
                            />
                          </svg>
                        </Box>
                        <Box color="#F2F2F2" mt="3">
                          Add a profile picture
                        </Box>
                      </Box>
                    </Center>
                  )}
                </Box>
                <Input
                  id="profile_pic_input"
                  type="file"
                  style={{ display: "none" }}
                  {...register("profile_pic")}
                />
                {errors.profile_pic && (
                  <Box color="#E1526C" fontSize="14px" mt="2">
                    <p>{errors.profile_pic.message}</p>
                  </Box>
                )}
              </FormControl>
              <FormControl>
                <FormLabel fontSize="14px" color="#D2D2D2">
                  Display name
                </FormLabel>
                <Input
                  bg="#2F2F2F"
                  borderColor={errors.display_name ? "#E1526C" : "#616161"}
                  rounded="md"
                  _hover={{
                    borderColor: "#616161",
                  }}
                  color="white"
                  type="text"
                  placeholder="Adam"
                  {...register("display_name")}
                  _placeholder={{
                    color: "#D2D2D2",
                    fontSize: { base: "12px", md: "14px" },
                  }}
                />
                <Box color="#E1526C" fontSize="14px" mt="5px">
                  {errors.display_name && <p>{errors.display_name.message}</p>}
                </Box>
              </FormControl>
              <FormControl>
                <FormLabel fontSize="14px" color="#D2D2D2">
                  Discription
                </FormLabel>
                <Textarea
                  bg="#2F2F2F"
                  borderColor={errors.discription ? "#E1526C" : "#616161"}
                  rounded="md"
                  _hover={{
                    borderColor: "#616161",
                  }}
                  color="white"
                  type="text"
                  placeholder="Describe yourself..."
                  {...register("discription")}
                  _placeholder={{
                    color: "#D2D2D2",
                    fontSize: { base: "12px", md: "14px" },
                  }}
                />
                <Box color="#E1526C" fontSize="14px" mt="5px">
                  {errors.discription && <p>{errors.discription.message}</p>}
                </Box>
              </FormControl>
            </VStack>

            <VStack w="100%" mt={{ base: "15px", md: "30px" }}>
              <Button
                color="white"
                rounded="40px"
                w="100%"
                bg={"black"}

                py="12px"
                fontSize="14px"
                fontWeight="600"
                type="submit"
                isLoading={isLoading}
              >
                Continue
              </Button>
              <Box color="#D2D2D2" fontWeight="400" fontSize="14px">
                Skip this step
              </Box>
            </VStack>
          </VStack>
        </Stack>
      </Center>
    </Box>
  );
};

export default Register_Profile_Two;

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
  Flex,
  Select,
} from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SessionHeader from "../Headers/SessionHeader";

const signupSchema = yup.object().shape({
  session_title: yup.string().required("Session title is required"),
  discription: yup.string().required("Discription is required"),
  rate_price: yup.string().required("Price price is required"),
  rate_type: yup.string().required("Rate type is required"),
});
const NewSessionsOne = ({ handleNext, handlePrevious }) => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
  } = useForm({ resolver: yupResolver(signupSchema) });
  const profilePicFile = watch("cover_image");

  const profilePicPreviewUrl = profilePicFile?.[0]
    ? URL.createObjectURL(profilePicFile[0])
    : null;

  console.log(profilePicPreviewUrl);

  const watchSessionTitle = watch("session_title", "");
  const watchDiscription = watch("discription", "");
  const watchRatePrice = watch("rate_price", "");

  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log(data);
    setIsLoading(false);
    handleNext();
  };

  return (
    <Box>
      <SessionHeader handleNext={handleNext} handlePrevious={handlePrevious} />
      <Center mt={{ base: "20px", xl: "40px" }}>
        <Stack
          minW={{ base: "100%", md: "640px" }}
          spacing={{ base: 6, xl: 12 }}
        >
          <VStack
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            bg="#ffffff"
            color="black"
            position="relative"
            borderTopRadius={{ base: "16px", md: "none" }}
            rounded={{ base: "", md: "lg" }}
            px={{ base: "15px", md: "24px" }}
            py={{ base: "40px", md: "32px" }}
          >
            <VStack spacing={{ base: "15px", md: "20px" }} w="100%">
              <FormControl>
                <FormLabel fontSize="14px">Display name</FormLabel>
                <Input
                  borderColor={errors.session_title ? "#E1526C" : "border"}
                  rounded="md"
                  _hover={{
                    borderColor: "#616161",
                  }}
                  type="text"
                  placeholder="Session title"
                  {...register("session_title")}
                  _placeholder={{
                    color: "text",
                    fontSize: { base: "12px", md: "14px" },
                  }}
                />
                <Box color="#E1526C" fontSize="14px" mt="5px">
                  {errors.session_title && (
                    <p>{errors.session_title.message}</p>
                  )}
                </Box>
              </FormControl>
              <FormControl>
                <FormLabel fontSize="14px">Discription</FormLabel>
                <Textarea
                  borderColor={errors.discription ? "#E1526C" : "border"}
                  rounded="md"
                  _hover={{
                    borderColor: "#616161",
                  }}
                  type="text"
                  placeholder="Describe this session"
                  {...register("discription")}
                  _placeholder={{
                    color: "text",
                    fontSize: { base: "12px", md: "14px" },
                  }}
                />
                <Box color="#E1526C" fontSize="14px" mt="5px">
                  {errors.discription && <p>{errors.discription.message}</p>}
                </Box>
              </FormControl>
              <FormControl>
                <Box
                  as="label"
                  htmlFor="profile_pic_input"
                  w="100%"
                  display="inline-block"
                  border={
                    errors.cover_image
                      ? "1px solid #E1526C"
                      : "1px solid #D2D2D2"
                  }
                  rounded="md"
                  cursor="pointer"
                >
                  {profilePicPreviewUrl ? (
                    <Box
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      gap="8"
                    >
                      <Box
                        width={{ base: "120px", xl: "240px" }}
                        height={{ base: "60px", xl: "120px" }}
                      >
                        <Image
                          objectFit="contain"
                          src={profilePicPreviewUrl}
                          alt="Profile Pic"
                          borderRadius="5px 0px 0px 5px"
                          W="100%"
                          h="100%"
                        />
                      </Box>
                      <Box color="#E1526C">Remove</Box>
                    </Box>
                  ) : (
                    // Your SVG placeholder component
                    <Box color="black">
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        gap="8"
                      >
                        <Box
                          width={{ base: "120px", xl: "240px" }}
                          height={{ base: "60px", xl: "120px" }}
                          overflow="hidden"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%" // Set SVG width to 100% of the container
                            height="100%" // Set SVG height to 100% of the container
                            viewBox="0 0 240 120"
                            fill="none"
                            preserveAspectRatio="xMidYMid meet" // This will scale the SVG while preserving its aspect ratio
                          >
                            <rect
                              width="240"
                              height="120"
                              rx="4"
                              fill="#E4E4E4"
                            />
                            <rect
                              x="121.5"
                              y="47.5469"
                              width="24"
                              height="3"
                              transform="rotate(90 121.5 47.5469)"
                              fill="white"
                            />
                            <rect
                              x="108"
                              y="58.0469"
                              width="24"
                              height="3"
                              fill="white"
                            />
                          </svg>
                        </Box>
                        <Box fontSize={{ base: "12px", xl: "16px" }}>
                          Add a cover image
                        </Box>
                      </Box>
                    </Box>
                  )}
                </Box>
                <Input
                  id="profile_pic_input"
                  type="file"
                  style={{ display: "none" }}
                  {...register("cover_image")}
                />
                {errors.cover_image && (
                  <Box color="#E1526C" fontSize="14px" mt="2">
                    <p>{errors.cover_image.message}</p>
                  </Box>
                )}
              </FormControl>
              <Box w="100%">
                <FormLabel>Rate</FormLabel>
                <Flex gap="24px">
                  <FormControl>
                    <Input
                      borderColor={errors.rate_price ? "#E1526C" : "border"}
                      rounded="md"
                      _hover={{
                        borderColor: "#616161",
                      }}
                      type="text"
                      placeholder="0.00"
                      {...register("rate_price")}
                      _placeholder={{
                        color: "text",
                        fontSize: { base: "12px", md: "14px" },
                      }}
                    />
                    <Box color="#E1526C" fontSize="14px" mt="5px">
                      {errors.rate_price && <p>{errors.rate_price.message}</p>}
                    </Box>
                  </FormControl>
                  <FormControl>
                    <Select
                      borderColor={errors.rate_type ? "#E1526C" : "border"}
                      rounded="md"
                      _hover={{
                        borderColor: "#616161",
                      }}
                      {...register("rate_type")}
                    >
                      <option value="per_hour">Per hour</option>
                      <option value="per_day">Per day</option>
                      <option value="per_week">Per week</option>
                    </Select>
                    <Box color="#E1526C" fontSize="14px" mt="5px">
                      {errors.rate_type && <p>{errors.rate_type.message}</p>}
                    </Box>
                  </FormControl>
                </Flex>
              </Box>
            </VStack>

            <VStack w="100%" mt={{ base: "15px", md: "30px" }}>
              <Button
                color="white"
                rounded="40px"
                w="100%"
                bg={"black"}
                _hover={{
                  bg:
                    !watchSessionTitle ||
                    !watchDiscription ||
                    !watchRatePrice ||
                    !profilePicPreviewUrl
                      ? ""
                      : "black",
                }}
                py="12px"
                fontSize="14px"
                fontWeight="600"
                type="submit"
                isDisabled={
                  !watchSessionTitle ||
                  !watchDiscription ||
                  !watchRatePrice ||
                  !profilePicPreviewUrl
                }
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

export default NewSessionsOne;

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
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";

import { Controller, useForm } from "react-hook-form";
import SessionBooked from "./SessionBooked";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import BookSessionFormHeader from "../Headers/BookSessionFormHeader";

const signupSchema = yup.object().shape({
  discription: yup.string().required("Discription is required"),
  notes: yup.string().required("Notes is required"),
  answer: yup.string().required("Answer is required"),
});
const BookSessionForm = ({ handleNext, handlePrevious }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showBooked, setShowBooked] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      discription: "",
      notes: "",
      answer: "",
    },
  });

  const sessionLocationOptions = [
    { value: "Intermidiate", label: "Intermidiate" },
    { value: "Advance", label: "Advance" },
    { value: "Expert", label: "Expert" },
  ];

  const watchNotes = watch("notes", "");
  const watchDiscription = watch("discription", "");
  const watchAnswer = watch("answer", "");

  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log(data);
    setIsLoading(false);
    setShowBooked(true);
  };

  if (showBooked) {
    return (
      <>
        <SessionBooked />
      </>
    );
  }

  return (
    <Box>
      <BookSessionFormHeader />
      <Center mt={{ base: "20px", xl: "40px" }}>
        <Stack
          minW={{ base: "100%", md: "640px" }}
          spacing={{ base: 6, xl: 12 }}
          px={{ base: "15px", xl: "0px" }}
        >
          <VStack
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            bg="#ffffff"
            color="black"
            position="relative"
            borderTopRadius={{ base: "16px", md: "none" }}
            rounded={{ base: "sm", md: "lg" }}
            px={{ base: "15px", md: "100px" }}
            py={{ base: "40px", md: "32px" }}
          >
            <Center>
              <Flex flexDirection="column" alignItems="center">
                <Box fontSize={{ base: "20px", xl: "24px" }} fontWeight="600">
                  Feedback session
                </Box>
                <Box mt="10px" color={"text"}>
                  Tue 10 Oct 2023, 10:00 - 11:00
                </Box>
                <Box fontSize="14px" fontWeight="500">
                  £80.00
                </Box>
              </Flex>
            </Center>
            <VStack spacing={{ base: "15px", md: "20px" }} w="100%">
              <FormControl mt="4" isInvalid={errors.answer}>
                <FormLabel>What’s your ability level?</FormLabel>
                <Controller
                  control={control}
                  name="answer"
                  render={({ field }) => (
                    <Select
                      {...field}
                      borderWidth="1px"
                      borderColor="gray.300"
                      _hover={{
                        borderWidth: "1px",
                        borderColor: "gray.300",
                      }}
                    >
                      <option
                        style={{ backgroundColor: "white", color: "black" }}
                        value=""
                      >
                        Choose answer
                      </option>
                      {sessionLocationOptions.map((option) => (
                        <option
                          style={{ backgroundColor: "white", color: "black" }}
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </option>
                      ))}
                    </Select>
                  )}
                />
                <FormErrorMessage>{errors.answer?.message}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel fontSize="14px">
                  Describe the feedback you are looking for
                </FormLabel>
                <Controller
                  control={control}
                  name="discription"
                  render={({ field }) => (
                    <Textarea
                      {...field}
                      borderColor={errors.discription ? "#E1526C" : "border"}
                      rounded="md"
                      _hover={{
                        borderColor: "#616161",
                      }}
                      type="text"
                      placeholder="Answer"
                      _placeholder={{
                        color: "text",
                        fontSize: { base: "12px", md: "14px" },
                      }}
                    />
                  )}
                />

                <FormErrorMessage color="#E1526C" fontSize="14px" mt="5px">
                  {errors.discription && <p>{errors.discription.message}</p>}
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel fontSize="14px">Additional notes</FormLabel>
                <Controller
                  control={control}
                  name="notes"
                  render={({ field }) => (
                    <Textarea
                      {...field}
                      borderColor={errors.notes ? "#E1526C" : "border"}
                      rounded="md"
                      _hover={{
                        borderColor: "#616161",
                      }}
                      type="text"
                      placeholder="Answer"
                      _placeholder={{
                        color: "text",
                        fontSize: { base: "12px", md: "14px" },
                      }}
                    />
                  )}
                />

                <FormErrorMessage color="#E1526C" fontSize="14px" mt="5px">
                  {errors.notes && <p>{errors.notes?.message}</p>}
                </FormErrorMessage>
              </FormControl>
            </VStack>

            <VStack w="100%" mt={{ base: "15px", md: "30px" }}>
              <Button
                color="white"
                rounded="40px"
                w="100%"
                bg={"black"}
                _hover={{
                  bg:
                    !watchNotes || !watchDiscription || !watchAnswer
                      ? ""
                      : "black",
                }}
                py="12px"
                fontSize="14px"
                fontWeight="600"
                type="submit"
                isDisabled={!watchNotes || !watchDiscription || !watchAnswer}
                isLoading={isLoading}
              >
                Book session
              </Button>
              <Text color="link" fontSize="12px" fontWeight="400">
                By booking a session, you agree to our Terms & Conditions
              </Text>
            </VStack>
          </VStack>
        </Stack>
      </Center>
    </Box>
  );
};

export default BookSessionForm;

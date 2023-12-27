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
  Text,
} from "@chakra-ui/react";
import { useFieldArray, useForm } from "react-hook-form";
import SessionHeader from "../Headers/SessionHeader";
import AddSessionField from "./AddSessionFeild";
const NewSessionsTwo = ({ handleNext, handlePrevious }) => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    // defaultValues: {
    //   fields: [{ question: "", answerType: "text", options: "" }],
    // },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "fields",
  });

  const addField = () => {
    append({ question: "", answerType: "text", options: "" });
  };

  const onSubmit = (data) => {
    console.log(data.fields);
    handleNext();
  };
  return (
    <Box>
      <SessionHeader handleNext={handleNext} handlePrevious={handlePrevious} />
      <Center mt={{ base: "10px", xl: "20px" }}>
        <VStack
          as={"form"}
          style={{ width: "100%", margin: "0 auto" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack
            minW={{ base: "100%", md: "640px" }}
            maxW={{ base: "100%", md: "640px" }}
            spacing={{ base: 6, xl: 4 }}
            px={{ base: "15px", md: "0px" }}
            py={{ base: "16px", md: "0px" }}
          >
            <VStack w="100%">
              <VStack w="100%" spacing={4}>
                {fields.map((item, index) => (
                  <AddSessionField
                    key={item.id}
                    register={register}
                    control={control}
                    index={index}
                    errors={errors}
                    watch={watch}
                    remove={remove}
                  />
                ))}
              </VStack>
            </VStack>
            <VStack color="black">
              <VStack spacing={{ base: "15px", md: "20px" }} w="100%">
                {fields.length === 0 && (
                  <Text>
                    Build a set of questions or request details that may help
                    prepare for your session. For example: “What skill level
                    would you describe yourself?” or “How many tracks would you
                    like me to review?”
                  </Text>
                )}

                <Button
                  color="black"
                  _hover={{
                    bg: "black",
                    color: "white",
                  }}
                  rounded="40px"
                  w="100%"
                  bg="graybtn"
                  py="12px"
                  fontSize="14px"
                  fontWeight="600"
                  onClick={addField}
                >
                  Add feild
                </Button>
              </VStack>

              <VStack w="100%" mt={{ base: "15px", md: "20px" }}>
                <Button
                  color="white"
                  rounded="40px"
                  _hover={{
                    bg: "graybtn",
                    color: "black",
                  }}
                  w="100%"
                  bg={"black"}
                  py="12px"
                  fontSize="14px"
                  fontWeight="600"
                  type="submit"
                >
                  Next
                </Button>
              </VStack>
            </VStack>
          </Stack>
        </VStack>
      </Center>
    </Box>
  );
};

export default NewSessionsTwo;

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
} from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SettingsHeader from "../Components/Headers/SettingsHeader";

const settingsSchema = Yup.object().shape({
  availability: Yup.string().required("Availability is required"),
  start: Yup.date().required("Start date and time are required."),
  end: Yup.date().required("End date and time are required."),
});
const Settings = ({ handleNext, handlePrevious }) => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
  } = useForm({ resolver: yupResolver(settingsSchema) });

  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log(data);
    setIsLoading(false);
  };

  return (
    <Box>
      <SettingsHeader />
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
            <VStack>
              <Heading size="lg" fontWeight="600">
                Settings
              </Heading>
            </VStack>
            <VStack spacing={{ base: "15px", md: "20px" }} w="100%">
              <FormControl mt="4" isInvalid={errors.start}>
                <FormLabel>Start Date</FormLabel>

                <Input
                  type="datetime-local"
                  borderWidth="1px"
                  borderColor="gray.300"
                  {...register("start")}
                  _hover={{
                    borderWidth: "1px",
                    borderColor: "gray.300",
                  }}
                  sx={{
                    "::-webkit-calendar-picker-indicator": {
                      filter: "invert(1)",
                      backgroundColor: "transparent",
                    },
                  }}
                />
                <FormErrorMessage>{errors.start?.message}</FormErrorMessage>
              </FormControl>

              <FormControl mt={4} isInvalid={errors.end}>
                <FormLabel>End Date</FormLabel>
                <Input
                  type="datetime-local"
                  borderWidth="1px"
                  borderColor="gray.300"
                  {...register("end")}
                  _hover={{
                    borderWidth: "1px",
                    borderColor: "gray.300",
                  }}
                  sx={{
                    "::-webkit-calendar-picker-indicator": {
                      filter: "invert(1)",
                      backgroundColor: "transparent",
                    },
                  }}
                />
                <FormErrorMessage>{errors.end?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.availability}>
                <FormLabel>Availability</FormLabel>
                <Select
                  borderColor={errors.availability ? "#E1526C" : "border"}
                  rounded="md"
                  _hover={{
                    borderColor: "#616161",
                  }}
                  {...register("availability")}
                >
                  <option value="per_hour">Per hour</option>
                  <option value="per_day">Per day</option>
                  <option value="per_week">Per week</option>
                </Select>
                <FormErrorMessage>
                  {errors.availability?.message}
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
                  bg: "black",
                }}
                py="12px"
                fontSize="14px"
                fontWeight="600"
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

export default Settings;

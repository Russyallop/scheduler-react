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
  earliestStartTime: Yup.string().required("Earliest start time is required"),
  latestFinishTime: Yup.string().required("Latest finish time is required"),
  availStartMonFri: Yup.string().required(
    "Start time you are available from mon to fri is required"
  ),
  availFinishMonFri: Yup.string().required(
    "Finish time mon to fri is required"
  ),
  availStartSat: Yup.string().required(
    "Start time you are available on Saturday is required"
  ),
  availFinishSat: Yup.string().required("Finish time on Saturday is required"),
  availStartSun: Yup.string().required(
    "Start time you are available on Sunday is required"
  ),
  availFinishSun: Yup.string().required("Finish time on Sunday is required"),
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

  const { dirtyFields } = watch() || {};

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
                Calendar Settings
              </Heading>
            </VStack>

            <VStack spacing={{ base: "15px", md: "20px" }} w="100%">
              <FormControl mt="4" isInvalid={errors.earliestStartTime}>
                <FormLabel>Earliest Time You Can Start</FormLabel>

                <Input
                  type="time"
                  borderWidth="1px"
                  borderColor="gray.300"
                  {...register("earliestStartTime")}
                  defaultValue={watch("earliestStartTime") || "09:00"}
                  _hover={{
                    borderWidth: "1px",
                    borderColor: "gray.300",
                  }}
                />
                <FormErrorMessage>
                  {errors.earliestStartTime?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl mt={4} isInvalid={errors.latestFinishTime}>
                <FormLabel>Latest Time You Can Finish</FormLabel>
                <Input
                  type="time"
                  borderWidth="1px"
                  borderColor="gray.300"
                  {...register("latestFinishTime")}
                  defaultValue={watch("latestFinishTime") || "17:00"}
                  _hover={{
                    borderWidth: "1px",
                    borderColor: "gray.300",
                  }}
                />
                <FormErrorMessage>
                  {errors.latestFinishTime?.message}
                </FormErrorMessage>
              </FormControl>

              <VStack>
                <Heading size="lg" fontWeight="600">
                  Availability Settings
                </Heading>
              </VStack>

              <FormControl mt={4} isInvalid={errors.availStartMonFri}>
                <FormLabel>
                  The Time You Are Available to Start From Mon-Fri
                </FormLabel>
                <Input
                  type="time"
                  borderWidth="1px"
                  borderColor="gray.300"
                  {...register("availStartMonFri")}
                  defaultValue={watch("availStartMonFri") || "09:00"}
                  _hover={{
                    borderWidth: "1px",
                    borderColor: "gray.300",
                  }}
                />
                <FormErrorMessage>
                  {errors.availStartMonFri?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl mt={4} isInvalid={errors.availFinishMonFri}>
                <FormLabel>The Time You Want to Finish Mon-Fri</FormLabel>
                <Input
                  type="time"
                  borderWidth="1px"
                  borderColor="gray.300"
                  {...register("availStartMonFri")}
                  defaultValue={watch("availFinishMonFri") || "17:00"}
                  _hover={{
                    borderWidth: "1px",
                    borderColor: "gray.300",
                  }}
                />
                <FormErrorMessage>
                  {errors.availFinishMonFri?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl mt={4} isInvalid={errors.availStartSat}>
                <FormLabel>
                  The Time You Are Available to Start From on Saturdays
                </FormLabel>
                <Input
                  type="time"
                  borderWidth="1px"
                  borderColor="gray.300"
                  {...register("availStartSat")}
                  defaultValue={watch("availStartSat") || "09:00"}
                  _hover={{
                    borderWidth: "1px",
                    borderColor: "gray.300",
                  }}
                />
                <FormErrorMessage>
                  {errors.availStartSat?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl mt={4} isInvalid={errors.availFinishSat}>
                <FormLabel>The Time You Want to Finish on Saturdays</FormLabel>
                <Input
                  type="time"
                  borderWidth="1px"
                  borderColor="gray.300"
                  {...register("availFinishSat")}
                  defaultValue={watch("availFinishSat") || "13:00"}
                  _hover={{
                    borderWidth: "1px",
                    borderColor: "gray.300",
                  }}
                />
                <FormErrorMessage>
                  {errors.availFinishSat?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl mt={4} isInvalid={errors.availStartSun}>
                <FormLabel>
                  The Time You Are Available to Start From on Sundays
                </FormLabel>
                <Input
                  type="time"
                  borderWidth="1px"
                  borderColor="gray.300"
                  {...register("availStartSun")}
                  defaultValue={watch("availStartSun") || "12:00"}
                  _hover={{
                    borderWidth: "1px",
                    borderColor: "gray.300",
                  }}
                />
                <FormErrorMessage>
                  {errors.availStartSun?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl mt={4} isInvalid={errors.availFinishSun}>
                <FormLabel>The Time You Want to Finish on Sundays</FormLabel>
                <Input
                  type="time"
                  borderWidth="1px"
                  borderColor="gray.300"
                  {...register("availFinishSun")}
                  defaultValue={watch("availFinishSun") || "19:00"}
                  _hover={{
                    borderWidth: "1px",
                    borderColor: "gray.300",
                  }}
                />
                <FormErrorMessage>
                  {errors.availFinishSun?.message}
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

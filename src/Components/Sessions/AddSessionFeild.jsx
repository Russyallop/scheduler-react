// AddSessionField.jsx
import React from "react";
import {
  FormControl,
  Input,
  Select,
  FormErrorMessage,
  VStack,
  FormLabel,
  Box,
  Flex,
} from "@chakra-ui/react";

export default function AddSessionField({
  register,
  control,
  watch,
  index,
  remove,
  errors,
}) {
  const questionName = `fields[${index}].question`;
  const answerTypeName = `fields[${index}].answerType`;
  const optionsName = `fields[${index}].options`;
  const getErrorMessage = (fieldName) => {
    return errors?.fields?.[index]?.[fieldName]?.message;
  };

  return (
    <VStack
      w="100%"
      px={{ base: "15px", xl: "32px" }}
      py={{ base: "12px", xl: "24px" }}
      bg="white"
      rounded="8px"
      spacing={4}
      alignItems="normal"
    >
      <Flex justifyContent="space-between" gap="4" alignItems="center">
        <Box textAlign="left" fontSize="14px" fontWeight="500">
          Field {index + 1}
        </Box>
        <Box color="red.400" onClick={() => remove(index)} cursor="pointer">
          Remove Field
        </Box>
      </Flex>
      <FormControl isInvalid={!!getErrorMessage("question")}>
        <Input
          borderColor={"border"}
          rounded="md"
          type="text"
          _placeholder={{
            color: "text",
            fontSize: { base: "12px", md: "14px" },
          }}
          placeholder="Ask a question or request details"
          {...register(questionName, {
            required: "Question is required",
          })}
        />
        <FormErrorMessage>{getErrorMessage("question")}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!getErrorMessage("answerType")}>
        <Select
          {...register(answerTypeName)}
          borderColor={"border"}
          rounded="md"
          type="text"
          bg="selectbg"
        >
          <option style={{ color: "#616161", fontSize: "14px" }} value="text">
            Text
          </option>
          <option value="multipleChoice">Multiple Choice</option>
        </Select>
        <FormErrorMessage>{getErrorMessage("answerType")}</FormErrorMessage>
      </FormControl>

      {watch(answerTypeName) === "multipleChoice" && (
        <>
          <FormControl isInvalid={!!getErrorMessage("options")}>
            <FormLabel fontSize="14px" textAlign="left">
              Options
            </FormLabel>
            <Input
              borderColor={"border"}
              rounded="md"
              type="text"
              _placeholder={{
                color: "text",
                fontSize: { base: "12px", md: "14px" },
              }}
              placeholder="Separate options/answers with a comma"
              {...register(optionsName, {
                required:
                  watch(answerTypeName) === "multipleChoice" &&
                  "Options are required for multiple choice",
              })}
            />
            <FormErrorMessage>{getErrorMessage("options")}</FormErrorMessage>
          </FormControl>
        </>
      )}
    </VStack>
  );
}

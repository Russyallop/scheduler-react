import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  FormErrorMessage,
  Box,
  Select,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const eventValidationSchema = Yup.object({
  start: Yup.date().required("Start date and time are required."),
  end: Yup.date().required("End date and time are required."),
  repeat: Yup.string().required("This field is required."),
});

const getFormattedDateTime = (date) => {
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return localDate.toISOString().slice(0, 16);
};
const getFormattedDateTimeSelectedSlot = (date) => {
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return localDate.toISOString().slice(0, 16);
};

// Example options for 'session name' and 'session location'
const sessionNameOptions = [
  { value: "strategy_meeting", label: "Strategy Meeting" },
  { value: "team_meeting", label: "Team Meeting" },
  { value: "client_meeting", label: "Client Meeting" },
  // ... other session names
];

const sessionLocationOptions = [
  { value: "conference_room_1", label: "Conference Room 1" },
  { value: "conference_room_2", label: "Conference Room 2" },
  { value: "head_office", label: "Head Office" },
  // ... other session locations
];

const repeatEventOptions = [
  { value: "Every day", label: "Every day" },
  { value: "Every Week", label: "Every Week" },
  { value: "Every Fortnight", label: "Every Fortnight" },
  { value: "Every Week Day", label: "Every Week Day" },
  { value: "No Repeat", label: "No Repeat" },
];
const EventModal = ({
  isOpen,
  onClose,
  onSubmit,
  selectedSlot,
  event,
  onDelete,
  events,
}) => {
  const toast = useToast();

  const defaultStart = selectedSlot && new Date(selectedSlot.start);
  const defaultEnd = selectedSlot && new Date(selectedSlot.end);

  // then set:
  if (defaultStart) {
    defaultStart.setHours(8, 0); // Set hours to 8 AM with 0 minutes
  }

  if (defaultEnd) {
    defaultEnd.setHours(10, 0); // Set hours to 10 AM with 0 minutes
  }
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(eventValidationSchema),
    defaultValues: {
      sessionName: event ? event.sessionName : sessionNameOptions[0].value,
      sessionLocation: event
        ? event.sessionLocation
        : sessionLocationOptions[0].value,
      start: event
        ? getFormattedDateTime(event.start)
        : selectedSlot
        ? getFormattedDateTimeSelectedSlot(defaultStart)
        : "",
      end: event
        ? getFormattedDateTime(event.end)
        : selectedSlot
        ? getFormattedDateTimeSelectedSlot(defaultEnd)
        : "",
      repeat: event?.repeat || "Every Week",
    },
  });

  const onFormSubmit = (data) => {
    const newEventStart = new Date(data.start).getTime();
    const newEventEnd = new Date(data.end).getTime();
    const isEventAlreadyPresent = events.some((event) => {
      const eventStart = new Date(event.start).getTime();
      const eventEnd = new Date(event.end).getTime();
      return eventStart === newEventStart && eventEnd === newEventEnd;
    });
    if (!event && isEventAlreadyPresent) {
      toast({
        title: "Event already exists.",
        description:
          "An event with the same start and end time already exists.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    const startDate = new Date(data.start);
    const endDate = new Date(data.end);
    const differenceInMilliseconds = endDate - startDate;
    const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);
    const hours = Math.floor(differenceInHours);
    const minutes = Math.round((differenceInHours - hours) * 60);
    const formattedTime =
      `${hours} ${hours === 1 ? "hr" : "hrs"}` +
      (minutes !== 0 ? ` ${minutes} min` : "");
    onSubmit({
      ...data,
      totalTime: formattedTime,
    });
    onClose();
    toast({
      title: "Event created.",
      description: `We've added your new event. Duration: ${formattedTime}`,
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
    reset();
  };

  const handleDelete = () => {
    if (event && onDelete) {
      onDelete(event.id); // Assuming each event has a unique 'id' property
    }
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="2xl">
      <ModalOverlay />
      <ModalContent
        bg="white"
        color="black"
        position="relative"
        py={{ base: "10px", xl: "40px" }}
      >
        <ModalCloseButton position="absolute" top="10px" left="10px" />
        <ModalHeader textAlign="center" fontSize="24px" fontWeight="600">
          New session
        </ModalHeader>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <ModalBody px={{ base: "10px", xl: "80px" }} pb={6}>
            <FormControl isInvalid={errors.sessionName}>
              <Controller
                control={control}
                name="sessionName"
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
                    {sessionNameOptions.map((option) => (
                      <option
                        style={{
                          backgroundColor: "white",
                          color: "black",
                        }}
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </Select>
                )}
              />
              <FormErrorMessage>{errors.sessionName?.message}</FormErrorMessage>
            </FormControl>

            <FormControl mt="4" isInvalid={errors.sessionLocation}>
              <Controller
                control={control}
                name="sessionLocation"
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
              <FormErrorMessage>
                {errors.sessionLocation?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl mt="4" isInvalid={errors.start}>
              <FormLabel>Start</FormLabel>
              <Controller
                name="start"
                control={control}
                render={({ field }) => (
                  <Input
                    type="datetime-local"
                    borderWidth="1px"
                    borderColor="gray.300"
                    _hover={{
                      borderWidth: "1px",
                      borderColor: "gray.300",
                    }}
                    sx={{
                      "::-webkit-calendar-picker-indicator": {
                        filter: "invert(1)", // Inverts the colors of the calendar icon
                        backgroundColor: "transparent", // Avoids a white square around the icon
                      },
                    }}
                    {...field}
                  />
                )}
              />
              <FormErrorMessage>{errors.start?.message}</FormErrorMessage>
            </FormControl>

            <FormControl mt={4} isInvalid={errors.end}>
              <FormLabel>End</FormLabel>
              <Controller
                name="end"
                control={control}
                render={({ field }) => (
                  <Input
                    type="datetime-local"
                    borderWidth="1px"
                    borderColor="gray.300"
                    _hover={{
                      borderWidth: "1px",
                      borderColor: "gray.300",
                    }}
                    sx={{
                      "::-webkit-calendar-picker-indicator": {
                        filter: "invert(1)", // Inverts the colors of the calendar icon
                        backgroundColor: "transparent", // Avoids a white square around the icon
                      },
                    }}
                    {...field}
                  />
                )}
              />
              <FormErrorMessage>{errors.end?.message}</FormErrorMessage>
            </FormControl>

            <FormControl mt="8" isInvalid={errors.repeat}>
              <FormLabel>Repeat</FormLabel>
              <Controller
                control={control}
                name="repeat"
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
                    {repeatEventOptions.map((option) => (
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
              <FormErrorMessage>{errors.repeat?.message}</FormErrorMessage>
            </FormControl>
            <Button
              type="submit"
              bg="black"
              color="white"
              fontWeight="bold"
              rounded="20px"
              w="full"
              mt="8"
              _hover={{
                border: "1px solid black",
                color: "black",
                bg: "white",
              }}
            >
              {event ? "Save" : "Add"} Event
            </Button>
            {event && (
              <Button
                bg="#E1526C"
                color="white"
                fontWeight="bold"
                rounded="20px"
                w="full"
                mt="4"
                onClick={handleDelete}
                _hover={{
                  color: "white",
                  bg: "#E1526C",
                }}
              >
                Delete Event
              </Button>
            )}
          </ModalBody>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default EventModal;

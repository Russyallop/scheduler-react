import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import {
  format,
  parse,
  startOfWeek,
  getDay,
  isSaturday,
  isSunday,
} from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { enGB } from "date-fns/locale";
import CustomToolbar from "./CustomToolbar";
import CustomDayHeader from "./weekview_header";
import EventModal from "./EventModal";
import "./calender.css";
import { Box, Tooltip, useToast } from "@chakra-ui/react";
import CalenderHeader from "../Headers/CalenderHeader";
const locales = {
  "en-GB": enGB,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { locale: enGB }),
  getDay,
  locales,
});

const MyCalendar = (props) => {
  const toast = useToast();
  const [view, setView] = useState("month");
  const [showModal, setShowModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const handleViewChange = (view) => {
    setView(view);
  };

  // Custom day cell style getter
  const dayPropGetter = (date) => {
    const dayOfWeek = getDay(date);
    const isWeekend = dayOfWeek === 6 || dayOfWeek === 0;
    if (isWeekend) {
      return {
        style: {
          backgroundColor: "#f0f0f0",
        },
      };
    }
    return {};
  };

  // Custom event style getter
  const eventPropGetter = (event) => {
    const isNarrowScreen = window.innerWidth <= 600;
    let newStyle = {
      backgroundColor: "lightgrey",
      color: "black",
      borderRadius: isNarrowScreen ? "20px" : "5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };

    // if (event.availability === "low") {
    //   newStyle.backgroundColor = "#FFF0BB";
    //   newStyle.border = "2px solid #FFA959";
    // } else if (event.availability === "available") {
    newStyle.backgroundColor = "#B0F0BA";
    newStyle.border = "2px solid #75BF5C";
    // } else if (event.availability === "booked") {
    //   newStyle.backgroundColor = "#FFD2E8";
    //   newStyle.border = "2px solid #E1526C";
    // }

    return {
      style: newStyle,
    };
  };

  const handleEventSelect = (event) => {
    console.log(event);
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleSlotSelect = (slotInfo) => {
    console.log(slotInfo);
    setSelectedEvent(null);

    const selectedDateStart = new Date(slotInfo.start);
    const dayOfWeek = getDay(selectedDateStart);
    const isWeekend =
      isSaturday(selectedDateStart) || isSunday(selectedDateStart);

    if (!isWeekend) {
      // Set the 'end' to the end of the day instead of the start of the next day
      // Here, we assume a full workday event from 9 AM to 5 PM as an example
      const startOfWorkday = new Date(selectedDateStart.setHours(9, 0, 0, 0));
      const endOfWorkday = new Date(selectedDateStart.setHours(17, 0, 0, 0));

      // If your app requires the whole day event then you could set:
      // const endOfDay = new Date(selectedDateStart.setHours(23, 59, 59, 999));

      setSelectedSlot({ start: startOfWorkday, end: endOfWorkday });
      setShowModal(true);
    } else {
      console.log("Events cannot be added on weekends.");
      // Assuming 'toast' is defined and imported from Chakra-UI
      toast({
        title: "Events cannot be added on weekends.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // ...

  const handleFormSubmit = (formData) => {
    // ... handling for existing events ...

    let newEvents = [];
    const eventToAdd = { ...formData, id: Math.random() };
    newEvents.push(eventToAdd);

    const currentMonth = new Date(formData.start).getMonth();
    const endTime =
      new Date(formData.end).getTime() - new Date(formData.start).getTime();

    let currentDate = new Date(formData.start);

    // Updated getNextDate logic
    const getNextDate = {
      "Every day": (date) => addDaySkippingWeekends(date),
      "Every Week": (date) => addWeekSkippingWeekends(date),
      "Every Fortnight": (date) => {
        const nextDate = new Date(date.setDate(date.getDate() + 14));
        return nextDate.getDay() === 0 || nextDate.getDay() === 6
          ? addDaySkippingWeekends(nextDate)
          : nextDate;
      },
      "Every Week Day": (date) => addDaySkippingWeekends(date),
      // ... you can add more repetition options if needed ...
    };

    while (
      formData.repeat &&
      getNextDate[formData.repeat] &&
      currentDate.getMonth() === currentMonth
    ) {
      currentDate = getNextDate[formData.repeat](currentDate);
      if (currentDate.getMonth() !== currentMonth) {
        break; // do not add events beyond the current month
      }
      newEvents.push({
        ...formData,
        id: Math.random(),
        start: currentDate,
        end: new Date(currentDate.getTime() + endTime),
      });
    }

    setEvents([...events, ...newEvents]);

    setSelectedEvent(null);
    setShowModal(false);
  };

  const addDaySkippingWeekends = (date) => {
    const nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + 1); // add a day initially
    while (nextDate.getDay() === 0 || nextDate.getDay() === 6) {
      // 0 = Sunday, 6 = Saturday
      nextDate.setDate(nextDate.getDate() + 1); // keep adding a day until it’s not a weekend
    }
    return nextDate;
  };

  const addWeekSkippingWeekends = (date) => {
    let nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + 7); // Add 7 days to the current date
    // If the new date is a weekend, move to next Monday
    while (nextDate.getDay() === 0 || nextDate.getDay() === 6) {
      nextDate.setDate(nextDate.getDate() + 1);
    }
    return nextDate;
  };

  // ...

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId));
  };

  const CustomEvent = ({ event }) => {
    return (
      <Box marginLeft={{ base: "0px", xl: "10px" }}>
        <Box
          display={{ base: "none", md: "block" }}
          fontSize="14px"
          fontWeight="700"
          fontStyle="normal"
        >
          {event.sessionName}
        </Box>
        {/* <Box
          display={{ base: "block", md: "none" }}
          fontSize="12px"
          fontWeight="700"
          fontStyle="normal"
        >
          {event.title_sm}
        </Box> */}
        <Box
          // display={{ base: "none", md: "block" }}
          fontSize="14px"
          fontWeight="500"
          fontStyle="normal"
        >
          {event.totalTime}
        </Box>
      </Box>
    );
  };

  return (
    <>
      <CalenderHeader />
      <Box bg="white" rounded={"10px"}>
        <Calendar
          localizer={localizer}
          events={events}
          dayPropGetter={dayPropGetter}
          eventPropGetter={eventPropGetter}
          startAccessor="start"
          endAccessor="end"
          view={view}
          style={{ height: 1000 }}
          views={["month", "week", "day"]}
          onView={handleViewChange}
          onSelectSlot={handleSlotSelect}
          onSelectEvent={handleEventSelect}
          selectable={true}
          components={{
            toolbar: (props) => <CustomToolbar {...props} view={view} />,
            event: CustomEvent,
            week: {
              header: CustomDayHeader,
            },
          }}
        />
      </Box>
      {showModal && (
        <EventModal
          isOpen={showModal}
          onClose={handleCloseModal}
          onSubmit={handleFormSubmit}
          selectedSlot={selectedSlot}
          event={selectedEvent}
          onDelete={handleDeleteEvent}
          events={events}
        />
      )}
    </>
  );
};

export default MyCalendar;

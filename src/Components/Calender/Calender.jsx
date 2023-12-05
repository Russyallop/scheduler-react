import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { isSameDay } from "date-fns";
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
import "./calender.css";
import { Box, Tooltip } from "@chakra-ui/react";
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

const myEventsList = [
  {
    title: "5 hours",
    title_sm: "5 hrs",
    start: new Date(2023, 11, 14, 4, 0),
    end: new Date(2023, 11, 14, 8, 0),
    availability: "available",
    description: "Availabe",
  },

  {
    title: "25 hours",
    title_sm: "5 hrs",
    start: new Date(2023, 11, 13, 6, 0),
    end: new Date(2023, 11, 13, 8, 0),
    availability: "available",
    description: "Availabe",
  },

  {
    title: "Fully Booked",
    title_sm: "Full",
    start: new Date(2023, 11, 7, 10, 0),
    end: new Date(2023, 11, 7, 20, 0),
    availability: "booked",
    description: "",
  },
  {
    title: "2 hours",
    title_sm: "2 hrs",
    start: new Date(2023, 11, 1, 1, 0),
    end: new Date(2023, 11, 1, 12, 0),
    availability: "low",
    description: "Low Availability",
  },
  {
    title: "5 hours",
    title_sm: "5 hrs",
    start: new Date(2023, 11, 19, 6, 0),
    end: new Date(2023, 11, 19, 8, 0),
    availability: "available",
    description: "Availabe",
  },
  {
    title: "2 hours",
    title_sm: "2 hrs",
    start: new Date(2023, 11, 6, 10, 0),
    end: new Date(2023, 11, 6, 12, 0),
    availability: "low",
    description: "Low Availability",
  },
  {
    title: "2 hours",
    title_sm: "2 hrs",
    start: new Date(2023, 11, 28, 10, 0),
    end: new Date(2023, 11, 28, 12, 0),
    availability: "low",
    description: "Low Availability",
  },
  {
    title: "2 hours",
    title_sm: "2 hrs",
    start: new Date(2023, 11, 20, 10, 0),
    end: new Date(2023, 11, 20, 12, 0),
    availability: "low",
    description: "Low Availability",
  },
  {
    title: "5 hours",
    title_sm: "5 hrs",
    start: new Date(2023, 11, 21, 10, 0),
    end: new Date(2023, 11, 21, 15, 0),
    availability: "available",
    description: "Available",
  },
  {
    title: "5 hours",
    title_sm: "5 hrs",
    start: new Date(2023, 11, 5, 10, 0),
    end: new Date(2023, 11, 5, 15, 0),
    availability: "available",
    description: "Available",
  },
  {
    title: "5 hours",
    title_sm: "5 hrs",
    start: new Date(2023, 11, 25, 10, 0),
    end: new Date(2023, 11, 25, 15, 0),
    availability: "available",
    description: "Available",
  },
  {
    title: "Fully Booked",
    title_sm: "Full",
    start: new Date(2023, 11, 22, 10, 0),
    end: new Date(2023, 11, 22, 20, 0),
    availability: "booked",
    description: "",
  },
  {
    title: "Fully Booked",
    title_sm: "Full",
    start: new Date(2023, 11, 12, 10, 0),
    end: new Date(2023, 11, 12, 20, 0),
    availability: "booked",
    description: "",
  },
  {
    title: "Fully Booked",
    title_sm: "Full",
    start: new Date(2023, 11, 9, 10, 0),
    end: new Date(2023, 11, 9, 20, 0),
    availability: "booked",
    description: "",
  },
  // ... other events
];

const MyCalendar = (props) => {
  const [view, setView] = React.useState("month");

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

    if (event.availability === "low") {
      newStyle.backgroundColor = "#FFF0BB";
      newStyle.border = "2px solid #FFA959";
    } else if (event.availability === "available") {
      newStyle.backgroundColor = "#B0F0BA";
      newStyle.border = "2px solid #75BF5C";
    } else if (event.availability === "booked") {
      newStyle.backgroundColor = "#FFD2E8";
      newStyle.border = "2px solid #E1526C";
    }

    return {
      style: newStyle,
    };
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
          {event.title}
        </Box>
        <Box
          display={{ base: "block", md: "none" }}
          fontSize="12px"
          fontWeight="700"
          fontStyle="normal"
        >
          {event.title_sm}
        </Box>
        <Box
          display={{ base: "none", md: "block" }}
          fontSize="12px"
          fontWeight="500"
          fontStyle="normal"
        >
          {event.description}
        </Box>
      </Box>
    );
  };

  return (
    <Box bg="white" rounded={"10px"}>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        dayPropGetter={dayPropGetter}
        eventPropGetter={eventPropGetter}
        startAccessor="start"
        endAccessor="end"
        view={view}
        style={{ height: 1000 }}
        views={["month", "week", "day"]}
        onView={handleViewChange}
        components={{
          toolbar: (props) => <CustomToolbar {...props} view={view} />,
          event: CustomEvent,
          week: {
            header: CustomDayHeader,
          },
        }}
      />
    </Box>
  );
};

export default MyCalendar;

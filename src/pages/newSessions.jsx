import { useState } from "react";
import { Box } from "@chakra-ui/react";
import RegisterDetails from "../Components/Register_Pages/register_detail";
import Register_Profile_One from "../Components/Register_Pages/register_profile_1";
import Register_Profile_Two from "../Components/Register_Pages/register_profile_2";
import NewSessionsOne from "../Components/Sessions/NewSessionOne";
import NewSessionsTwo from "../Components/Sessions/NewSessionTwo";
import NewSessionThree from "../Components/Sessions/NewSessionThree";

const NewSessions = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handlePrevious = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const steps = [
    {
      content: (
        <NewSessionsOne
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      ),
    },
    {
      content: (
        <NewSessionsTwo
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      ),
    },
    {
      content: (
        <NewSessionThree
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      ),
    },
  ];

  return <Box>{steps[activeStep].content}</Box>;
};

export default NewSessions;

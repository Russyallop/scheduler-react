import { useState } from "react";
import { Box } from "@chakra-ui/react";
import RegisterDetails from "../Components/Register_Pages/register_detail";
import Register_Profile_One from "../Components/Register_Pages/register_profile_1";
import Register_Profile_Two from "../Components/Register_Pages/register_profile_2";

const Register = () => {
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
        <RegisterDetails
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      ),
    },
    {
      content: (
        <Register_Profile_One
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      ),
    },
    {
      content: (
        <Register_Profile_Two
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      ),
    },
  ];

  return <Box>{steps[activeStep].content}</Box>;
};

export default Register;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const theme = extendTheme({
  colors: {
    white: "#ffffff",
    text: "#616161",
    border: "#D2D2D2",
    graybtn: "#E4E4E4",
    selectbg: "#F2F2F2",
    link: "#2F2F2F",
    dull_black: "#1D1D1D",
    deletecolor: "#E1526C",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
  // </React.StrictMode>
);

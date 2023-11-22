import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

// Define custom theme for ChakraProvider
const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

// Get the root element and create a root instance
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application using ChakraProvider and BrowserRouter
root.render(
  
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);

/**  
 * 
 ChakraProvider: A component from Chakra UI that enables consistent styling 
 and theming across React applications, providing access to Chakra UI's theming 
 system and components.

BrowserRouter: A component from React Router that enables client-side routing in 
single-page React applications, handling URL changes and rendering different components 
based on the current URL path.

*/
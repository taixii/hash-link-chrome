import React from "react";
import Router from "./Router";
import { ChakraProvider, ThemeProvider } from "@chakra-ui/react";
import { extendedTheme, theme } from "./style/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider theme={extendedTheme}>
        <Router />
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default App;

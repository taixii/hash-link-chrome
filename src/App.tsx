import React from "react";
import AppRouter from "./Router";
import { ChakraProvider, ThemeProvider } from "@chakra-ui/react";
import { extendedTheme, theme } from "./style/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider theme={extendedTheme}>
        <AppRouter />
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default App;

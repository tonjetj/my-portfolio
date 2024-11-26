import React from "react";
import Work from "./components/Work/index.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme/index.ts";
import { GlobalStyles } from "./styles/globalStyles.ts";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Work />
    </ThemeProvider>
  );
};

export default App;

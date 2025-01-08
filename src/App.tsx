import React from "react";
import Layout from "./components/Layout/index.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme/index.ts";
import { GlobalStyles } from "./styles/globalStyles.ts";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
};

export default App;

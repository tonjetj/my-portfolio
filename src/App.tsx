import React from "react";
import Layout from "./components/Layout/index.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme/index.ts";
import { GlobalStyles } from "./styles/global/globalStyles.ts";
import { LanguageProvider } from "./components/Language/index.tsx";

const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
      <GlobalStyles />
      <Layout />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;

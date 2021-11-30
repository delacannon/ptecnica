import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "styles/theme";
import { NavBar } from "./navbar";

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <NavBar />
        <main>{children}</main>
      </>
    </ThemeProvider>
  );
};

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    margin: 0;
    padding: 0;
    background: hsl(0, 0%, 90%);
    font-family: 'Helvetica', Arial, Helvetica, sans-serif;
  }
`;

import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { NavBar } from "../Navbar";
import { useAppSelector } from "hooks/redux-hooks";
import {
  GlobalLayoutStyles,
  LoadingContainer,
  LoadingSpinner,
  Footer,
  PageContainer,
} from "./styles";

export const Layout = ({ children }) => {
  const { loading } = useAppSelector((state) => state.appReducer);

  return (
    <ThemeProvider theme={theme}>
      <GlobalLayoutStyles />
      <PageContainer>
        {loading && (
          <LoadingContainer>
            <LoadingSpinner />
          </LoadingContainer>
        )}
        <NavBar />
        <main>{children}</main>
        <Footer>Prueba ver 1.0 | {new Date().getFullYear()}</Footer>
      </PageContainer>
    </ThemeProvider>
  );
};

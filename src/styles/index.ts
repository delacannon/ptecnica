import styled, { createGlobalStyle, keyframes } from "styled-components";
import { theme } from "./theme";
import { Link } from "react-router-dom";

export const GlobalLayoutStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica', Arial, Helvetica, sans-serif;
    color: hsl(0, 0%, 100%);
    background-image: radial-gradient(
    circle,
    rgba(100, 100, 152, 1) 0%,
    rgba(180, 100, 152, 1) 50%,
    rgba(255, 99, 71, 1) 100%
  );
  }
`;

export const fadein = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Header = styled.h1`
  text-align: center;
  margin: 0 auto;
  padding: 2rem;
`;

export const Container = styled.div`
  @media only screen and ${theme.breakpoints.small} {
    max-width: 95%;
  }
  @media only screen and ${theme.breakpoints.medium} {
    max-width: 75%;
  }
  @media only screen and ${theme.breakpoints.large} {
    max-width: 60%;
  }
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-bottom: 4.5rem;
`;

export const Text = styled.p`
  padding: 2rem;
  line-height: 1.8rem;
  font-size: 1.2rem;
`;

export const LinkSpan = styled(Link)`
  font-size: inherit;
  color: tomato;
  text-decoration: none;
  &:hover {
    color: black;
  }
`;

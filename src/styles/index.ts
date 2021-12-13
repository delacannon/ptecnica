import styled, { keyframes } from "styled-components";
import { theme } from "./theme";
import { Link } from "react-router-dom";

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
    max-width: 78%;
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

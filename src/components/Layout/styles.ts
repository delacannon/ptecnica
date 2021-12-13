import styled, { createGlobalStyle } from "styled-components";
import { fadein, rotate } from "styles";

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

export const LoadingSpinner = styled.div`
  animation: ${rotate} 1s linear infinite;
  border-top: 4px solid tomato;
  border-right: 4px solid tomato;
  border-bottom: 4px solid tomato;
  border-left: 8px dashed tomato;
  background: transparent;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;

export const LoadingContainer = styled.div`
  height: 100vh;
  min-height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.16);
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transition: all 0.3s cubic-bezier(0.32, 0.32, 0.32, 1);
  transition: all 0.4s cubic-bezier(0.155, 0.84, 0.44, 1);
  animation: ${fadein} 0.3s linear;
`;

export const Footer = styled.footer`
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
`;

export const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

import styled from "styled-components";
import { fadein, rotate } from "styles";

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

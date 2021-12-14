import styled from "styled-components";
import { fadein } from "styles";
import type { PageNumberButtonProps } from ".";

export const PageNumberButton = styled.li<PageNumberButtonProps>`
  padding: 0.4rem;
  text-align: center;
  margin: 0.4rem;
  text-transform: bold;
  font-size: 1.4rem;
  width: 2rem;
  border-radius: 0.4rem;
  border: 2.25px solid white;
  cursor: pointer;
  background: ${(props) => props.btnColor.backgroundColor};
  color: ${(props) => props.btnColor.textColor};
  pointer-events: ${(props) => props.btnColor.pointerEvents};
  &:hover {
    color: ${(props) => props.btnColor.textColor};
    background: ${(props) => props.btnColor.backgroundColor};
  }
  animation: ${fadein} 0.6s linear;
`;

export const btnStyle = [
  {
    backgroundColor: "tomato",
    textColor: "#000000",
    pointerEvents: "none",
  },
  {
    backgroundColor: "transparent",
    textColor: "white",
    pointerEvents: "auto",
  },
];

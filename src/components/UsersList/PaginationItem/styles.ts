import styled from "styled-components";
import type { IPaginationItemBtn } from ".";

export const PaginationItemBtn = styled.li<IPaginationItemBtn>`
  padding: 0.4rem;
  text-align: center;
  margin: 0.4rem;
  text-transform: bold;
  background: ${(props) => props.btnColor.backgroundColor};
  color: ${(props) => props.btnColor.textColor};
  font-size: 1.4rem;
  width: 2rem;
  border-radius: 0.4rem;
  border: 2.25px solid white;
  cursor: pointer;
  pointer-events: ${(props) => props.btnColor.pointerEvents};
  &:hover {
    color: ${(props) => props.btnColor.textColor};
    background: ${(props) => props.btnColor.backgroundColor};
  }
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

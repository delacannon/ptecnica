import styled from "styled-components";
import { fadein } from "styles";

export const UserContainer = styled.div`
  border: 2px solid black;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  background: white;
  box-shadow: 8px 16px tomato;
  font-family: "Helvetica", arial, sans-serif;
  font-size: 14px;
  line-height: 18px;
  -webkit-transition: all 0.4s cubic-bezier(0.165, 0.44, 0.44, 1);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    background: #f0f0f0;
    -webkit-transform: scale(1.1, 1.1);
    transform: scale(1.1, 1.1);
    box-shadow: 1px 1px tomato;
  }
  animation: ${fadein} 0.3s linear;
  cursor: pointer;
`;

export const UserAvatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const UserName = styled.p`
  font-weight: bold;
  font-size: 1rem;
  color: black;
  margin-bottom: 0.2em;
  margin-right: 0.3em;
`;

export const UserEmail = styled.span`
  font-weight: bold;
  font-size: 1.4rem;
  color: tomato;
  margin-top: 0.8rem;
  margin-right: 0.3em;
`;

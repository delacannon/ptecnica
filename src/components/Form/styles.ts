import styled from "styled-components";

export const FormContent = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
`;

export const Span = styled.span`
  font-size: 1rem;
  text-align: left;
  padding: 0.7rem;
  color: white;
`;

export const Input = styled.input`
  padding: 1rem;
  margin: 0.25rem;
  font-size: 1.25rem;
  letter-spacing: 0.1rem;
  color: tomato;
  outline: none;
  font-weight: bold;
`;

export const InputButton = styled.input`
  padding: 0.5rem;
  margin: 8px 0.2rem;
  outline: none;
  width: auto;
  border: 2px solid tomato;
  text-decoration: none;
  cursor: pointer;
  background: white;
  font-size: 1.4rem;
  -webkit-transition: all 0.3s cubic-bezier(0.12, 0.65, 0.28, 1);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    box-shadow: 4px 8px black;
    color: tomato;
  }
`;

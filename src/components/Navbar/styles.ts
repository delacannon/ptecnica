import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  height: 64px;
  background-color: white;
  box-shadow: rgba(43, 83, 135, 0.08) 0px 3px 8px 0px;
  display: flex;
  align-items: center;
`;

export const NavContent = styled.div`
  flex-basis: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavBrand = styled.div`
  margin: 0 0px;
  width: 120px;
`;

export const NavBrandName = styled(Link)`
  font-size: 36px;
  color: tomato;
  text-decoration: none;
`;

export const NavButton = styled(Link)`
  padding: 0.5rem;
  margin: 0 0.2rem;
  width: auto;
  border: 2px solid tomato;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    box-shadow: 4px 4px tomato;
  }
`;

export const StyledLink = styled.span`
  color: black;
  text-decoration: none;
  margin: 1rem;
  position: relative;
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  width: auto;
`;

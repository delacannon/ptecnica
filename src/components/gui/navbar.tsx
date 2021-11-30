import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks";
import { logout } from "store/actions";
import styled from "styled-components";

export const NavBar = () => {
  const { token } = useAppSelector((state) => state.appReducer);
  const dispatch = useAppDispatch();

  return (
    <NavContainer>
      <NavContent>
        <NavBrand>
          <NavBrandName to=".">La Liga</NavBrandName>
        </NavBrand>
        <ButtonsContainer>
          {token && (
            <NavButton to="/users">
              <StyledLink>Users</StyledLink>
            </NavButton>
          )}

          {!token ? (
            <NavButton to="/login">
              <StyledLink>Login</StyledLink>
            </NavButton>
          ) : (
            <StyledLink onClick={() => dispatch(logout())}>
              👋 Cerrar sessión
            </StyledLink>
          )}
        </ButtonsContainer>
      </NavContent>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  width: 100%;
  height: 64px;
  background-color: white;
  box-shadow: rgba(43, 83, 135, 0.08) 0px 3px 8px 0px;
  display: flex;
  align-items: center;
`;

const NavContent = styled.div`
  flex-basis: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavBrand = styled.div`
  margin: 0 0px;
  width: 120px;
`;

const NavBrandName = styled(Link)`
  font-size: 36px;
  color: tomato;
  text-decoration: none;
`;

const NavButton = styled(Link)`
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

const StyledLink = styled.span`
  color: black;
  text-decoration: none;
  margin: 1rem;
  position: relative;
  cursor: pointer;
  &:hover {
    color: gray;
  }
`;
const ButtonsContainer = styled.div`
  width: auto;
`;

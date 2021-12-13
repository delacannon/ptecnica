import { useAppDispatch, useAppSelector } from "hooks/redux-hooks";
import { logoutAction } from "store/action-creators";
import {
  NavContainer,
  NavBrand,
  ButtonsContainer,
  StyledLink,
  NavBrandName,
  NavButton,
  NavContent,
} from "./styles";
export const NavBar = () => {
  const { token } = useAppSelector((state) => state.appReducer);
  const dispatch = useAppDispatch();

  return (
    <NavContainer>
      <NavContent>
        <NavBrand>
          <NavBrandName to={!token ? "." : "/users"}>DEV</NavBrandName>
        </NavBrand>
        <ButtonsContainer>
          <NavButton
            to="/login"
            onClick={() => {
              if (token) dispatch(logoutAction());
            }}
          >
            <StyledLink>{!token ? `👤 Login` : `👋  Cerrar Sesión`}</StyledLink>
          </NavButton>
        </ButtonsContainer>
      </NavContent>
    </NavContainer>
  );
};

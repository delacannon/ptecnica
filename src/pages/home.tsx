import { Navigate } from "react-router-dom";
import { useAppSelector } from "hooks/redux-hooks";
import styled from "styled-components";

export const Home = () => {
  const { token } = useAppSelector((state) => state.appReducer);

  return (
    <UsersContainer>
      <UsersHeader>HOME</UsersHeader>
      {token ? (
        <Navigate to={"/users"} />
      ) : (
        <LoginTextHome>Prueba técnica React</LoginTextHome>
      )}
    </UsersContainer>
  );
};

const UsersContainer = styled.div`
  width: 500px;
  margin: 1rem auto;
`;

const UsersHeader = styled.h2`
  text-align: center;
  text-transform: uppercase;
`;

const LoginTextHome = styled.p`
  text-align: center;
  text-transform: uppercase;
  padding: 2rem;
`;

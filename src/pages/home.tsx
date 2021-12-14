import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "hooks/redux-hooks";
import { Container, Text, LinkSpan } from "styles";
import { Header } from "styles";

export const HomePage = () => {
  const { token } = useAppSelector((state) => state.appReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/users");
    }
  }, [token, navigate]);

  return (
    <Container>
      <Header>Bienvenido</Header>
      <Text>
        Prueba técnica React. Vamos a realizar una pequeña y sencilla aplicación
        tipo SPA con React que se conecte a una API de pruebas. El objetivo es{" "}
        <LinkSpan to={"/login"}>autenticar</LinkSpan> en ella y acceder a un{" "}
        <LinkSpan to={"/users"}>listado</LinkSpan> de usuarios. Si no está
        autenticado, el usuario no deberá poder acceder a la vista de listado.
      </Text>
    </Container>
  );
};

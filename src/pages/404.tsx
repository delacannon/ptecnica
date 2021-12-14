import { Container, Header, LinkSpan, Text } from "styles";

export const NotFoundPage = () => (
  <Container>
    <Header>Error 404</Header>
    <Text>
      La página a la que intentas acceder no existe. Puedes volver al{" "}
      <LinkSpan to={"."}>inicio</LinkSpan>, probar de hacer{" "}
      <LinkSpan to={"/login"}>login</LinkSpan> o bien visitar el{" "}
      <LinkSpan to={"/listado"}>listado</LinkSpan> de usuarios.
    </Text>
  </Container>
);

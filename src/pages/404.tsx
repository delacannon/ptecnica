import { Container, Header, LinkSpan, Text } from "styles";

export const NotFoundPage = () => (
  <Container>
    <Header>Error 404</Header>
    <Text>
      La página a la que intentas acceder no existe.{" "}
      <LinkSpan to={"."}>Volver</LinkSpan>
    </Text>
  </Container>
);

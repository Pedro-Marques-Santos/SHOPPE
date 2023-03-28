import { Header } from "../../components/header-components/Header";
import { Product } from "../../components/product-components/Product";
import { Container, ContentContainer } from "./styles";

export function ViewProduct() {
  return (
    <ContentContainer>
      <Header />
      <Container>
        <Product />
      </Container>
    </ContentContainer>
  );
}

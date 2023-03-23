import { Container, ContainerProduct, Price, Product, Title } from "./styles";

import bestproduct from "../../../assets/bestproduct.png";

export function Bestproduct() {
  return (
    <Container>
      <Product>
        <ContainerProduct>
          <Title>Gold big hoops</Title>
          <Price>$ 68,00</Price>
          <button>View Product</button>
        </ContainerProduct>
      </Product>
      <img src={bestproduct} alt="img" />
    </Container>
  );
}

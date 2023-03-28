import { Container, ContainerTotal, Title, Totals } from "./styles";

export function PriceTotals() {
  return (
    <Container>
      <Title>Cart totals</Title>
      <ContainerTotal>
        <h1>TOTAL</h1>
        <Totals>$ 40,00</Totals>
      </ContainerTotal>
      <button type="submit">PROCEED TO CHECKOUT</button>
    </Container>
  );
}

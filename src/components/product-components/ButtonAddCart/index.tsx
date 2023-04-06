import { Container } from "./styles";

interface IButtonAddCart {
  handleAddToCard: () => void;
}

export function ButtonAddCart({ handleAddToCard }: IButtonAddCart) {
  return <Container onClick={handleAddToCard}>ADD TO CART</Container>;
}

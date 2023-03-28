import { Container, Price, Title } from "./styles";

interface IShopCard {
  img: string;
  name: string;
  price: string;
  type?: string;
}

export function ShopCard({ img, name, price, type }: IShopCard) {
  return (
    <Container type={type}>
      <img src={img} alt="product" />
      <Title>{name}</Title>
      <Price>$ {price}</Price>
    </Container>
  );
}

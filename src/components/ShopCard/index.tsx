import { Container, Price, Title } from "./styles";

interface IShopCard {
  img: string;
  name: string;
  price: string;
}

export function ShopCard({ img, name, price }: IShopCard) {
  return (
    <Container>
      <img src={img} alt="product" />
      <Title>{name}</Title>
      <Price>$ {price}</Price>
    </Container>
  );
}

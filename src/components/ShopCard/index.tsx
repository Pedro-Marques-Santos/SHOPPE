/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container, Price, Title } from "./styles";
import { useNavigate } from "react-router-dom";

interface IProduct {
  name: string;
  price: number;
  size: number;
  img: string;
  id: number;
  img2?: string;
  qtd?: number;
}

interface IShopCard {
  img: string;
  name: string;
  price: number;
  type?: string;
  id: number;
}

export function ShopCard({ img, name, price, type, id }: IShopCard) {
  const navegate = useNavigate();

  function goPageViewProduct() {
    navegate("/ViewProduct", {
      state: {
        data: {
          id: id,
          typeProduct: "common",
        },
      },
    });
  }

  return (
    <Container type={type} onClick={goPageViewProduct}>
      <img src={img} alt="product" />
      <Title>{name}</Title>
      <Price>
        {price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </Price>
    </Container>
  );
}

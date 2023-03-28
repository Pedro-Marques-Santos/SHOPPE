import { ImgCardCart } from "../ImgCardCart";
import { QtdProduct } from "../QtdProduct";
import {
  CartText,
  Container,
  ContainerQtdCartCard,
  Price,
  Title,
  Type,
} from "./styles";

import { AiOutlineCloseCircle } from "react-icons/ai";

interface ICartCard {
  img: string;
  title: string;
  price: string;
  qtd: string;
}

export function CartCard({ img, title, price }: ICartCard) {
  return (
    <Container>
      <ImgCardCart img={img} />
      <CartText>
        <Title>{title}</Title>
        <Type>Black / Medium</Type>
        <Price>{price}</Price>
      </CartText>
      <ContainerQtdCartCard>
        <QtdProduct />
      </ContainerQtdCartCard>
      <i>
        <AiOutlineCloseCircle />
      </i>
    </Container>
  );
}

import { useContext } from "react";
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
import { ProductsLocalStorageContext } from "../../../context/ProductsLocalStorage";

interface IProduct {
  name: string;
  price: number;
  size: number;
  img: string;
  id: number;
  img2?: string;
  qtd?: number;
  idcard?: string;
}

interface ICartCard {
  idcard?: string;
  img: string;
  title: string;
  price: number;
  qtd?: number;
  img2?: string;
}

export function CartCard({ img, title, price, qtd, img2, idcard }: ICartCard) {
  const { listProductsLocalStorage, removeProductLocalStorage } = useContext(
    ProductsLocalStorageContext
  );

  function removeProductCart() {
    removeProductLocalStorage(
      listProductsLocalStorage.find(
        (product) => product.idcard === idcard
      ) as IProduct
    );
  }

  return (
    <Container>
      <ImgCardCart img={img2 ?? img} />
      <CartText>
        <Title>{title}</Title>
        <Type>Black / Medium</Type>
        <Price>
          {" "}
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Price>
      </CartText>
      <ContainerQtdCartCard>
        <QtdProduct qtd={qtd} idcard={idcard} />
      </ContainerQtdCartCard>
      <i onClick={removeProductCart}>
        <AiOutlineCloseCircle />
      </i>
    </Container>
  );
}

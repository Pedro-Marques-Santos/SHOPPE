import { ButtonAddCart } from "../ButtonAddCart";
import { QtdProduct } from "../QntProduct";
import {
  AboutProduct,
  Container,
  ContainerQtdProductsAndButtonCart,
  ContainerSizeAndCategory,
  Price,
  SizeAndCategory,
  Title,
} from "./styles";

interface ICardTextProduct {
  title: string;
  price: number;
  aboutProduct: string;
  sizeProduct: number;
  categoryProduct: string;
}

export function CardTextProduct({
  title,
  price,
  aboutProduct,
  sizeProduct,
  categoryProduct,
}: ICardTextProduct) {
  return (
    <Container>
      <Title>{title}</Title>
      <Price>
        {" "}
        {price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </Price>
      <AboutProduct>{aboutProduct}</AboutProduct>
      <ContainerQtdProductsAndButtonCart>
        <QtdProduct />
        <ButtonAddCart />
      </ContainerQtdProductsAndButtonCart>
      <ContainerSizeAndCategory>
        <SizeAndCategory>
          SKU: <span>{sizeProduct}</span>
        </SizeAndCategory>
        <SizeAndCategory>
          Category: <span>{categoryProduct}</span>
        </SizeAndCategory>
      </ContainerSizeAndCategory>
    </Container>
  );
}

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
  price: string;
  aboutProduct: string;
  sizeProduct: string;
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
      <Price>{price}</Price>
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

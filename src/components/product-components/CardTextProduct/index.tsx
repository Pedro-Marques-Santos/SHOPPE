/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
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

interface IProduct {
  name: string;
  price: number;
  size: number;
  img: string;
  id: number;
  img2?: string;
  qtd?: number;
}

interface ICardTextProduct {
  title: string;
  price: number;
  aboutProduct: string;
  sizeProduct: number;
  categoryProduct: string;
  listProducts: IProduct[];
  product: {
    name: string;
    price: number;
    size: number;
    img: string;
    id: number;
    img2?: string;
    qtd?: number;
  };
}

export function CardTextProduct({
  title,
  price,
  aboutProduct,
  sizeProduct,
  categoryProduct,
  product,
}: ICardTextProduct) {
  const [qtd, setQtd] = useState(1);
  const [listProducts, setListProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (localStorage.getItem("products")) {
      setListProducts(JSON.parse(localStorage.getItem("products")!));
    }
  }, []);

  function handleAddToCard() {
    product = {
      ...product,
      qtd: qtd,
    };
    setListProducts([...listProducts, product]);
    localStorage.setItem("products", JSON.stringify(listProducts));
  }

  useEffect(() => {
    if (listProducts.length > 0) {
      localStorage.setItem("products", JSON.stringify(listProducts));
    }
  }, [listProducts]);

  return (
    <Container>
      <Title>{title}</Title>
      <Price>
        {" "}
        {price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </Price>
      <AboutProduct>{aboutProduct}</AboutProduct>
      <ContainerQtdProductsAndButtonCart>
        <QtdProduct qtd={qtd} setQtd={setQtd} />
        <ButtonAddCart handleAddToCard={handleAddToCard} />
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

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect, useState } from "react";
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
import { ProductsLocalStorageContext } from "../../../context/ProductsLocalStorage";

import { v4 as uuidv4 } from "uuid";

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
    idcard?: string;
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
  const { reloadListProductsLocalStorage } = useContext(
    ProductsLocalStorageContext
  );

  useEffect(() => {
    if (localStorage.getItem("products")) {
      setListProducts(JSON.parse(localStorage.getItem("products")!));
    }
  }, []);

  function handleAddToCard() {
    product = {
      ...product,
      qtd: qtd,
      idcard: uuidv4(),
    };
    setListProducts([...listProducts, product]);
  }

  //os dados precisam ser renderizados para salvar os novos elementos
  useEffect(() => {
    if (listProducts.length > 0) {
      localStorage.setItem("products", JSON.stringify(listProducts));
      reloadListProductsLocalStorage();
    }
  }, [listProducts, reloadListProductsLocalStorage]);

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

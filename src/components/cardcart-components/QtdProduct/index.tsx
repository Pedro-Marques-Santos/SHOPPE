/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Container, LessQtd, MoreQtd, Qtd } from "./styles";
import { ProductsLocalStorageContext } from "../../../context/ProductsLocalStorage";

interface IQtdProduct {
  qtd?: number;
  idcard?: string;
}

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

export function QtdProduct({ qtd, idcard }: IQtdProduct) {
  // const { listProductsLocalStorage, removeProductLocalStorage } = useContext(
  //   ProductsLocalStorageContext
  // );

  // function increaseQtd() {
  //   let qtdproduct = ++qtd!;

  //   let product = listProductsLocalStorage.find(
  //     (product) => product.idcard === idcard
  //   ) as IProduct;

  //   product = {
  //     ...product,
  //     qtd: qtdproduct,
  //   };

  //   console.log(product);
  // }

  // function decreaseQtd() {}

  return (
    <Container>
      <LessQtd>-</LessQtd>
      <Qtd>{qtd}</Qtd>
      <MoreQtd>+</MoreQtd>
    </Container>
  );
}

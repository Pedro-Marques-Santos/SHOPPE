/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from "react-router-dom";
import {
  Container,
  ContainerErrorId,
  ErrorButton,
  ErrorId,
  ErrorTitle,
} from "./styles";

import img from "../../../assets/images-card/Hair Pin Set of 3.svg";
import { ImgProduct } from "../ImgProduct";
import { CardTextProduct } from "../CardTextProduct";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../../context/Products";

interface IProductProps {
  id: number;
}

interface IProduct {
  name: string;
  price: number;
  size: number;
  img: string;
  id: number;
}

export function Product({ id }: IProductProps) {
  const navegate = useNavigate();
  const productsContext = useContext(ProductsContext);

  const product: IProduct[] = Object.values(
    productsContext?.products?.AllProducts ?? []
  );

  const productSelected = product.find((e) => e.id === id);

  if (
    !productsContext ||
    !productsContext.products?.BestProduct ||
    !productsContext.products?.AllProducts
  ) {
    return <></>;
  }

  function goPageHome() {
    navegate("/");
  }

  if (!productSelected) {
    return (
      <ContainerErrorId>
        <ErrorId>Error</ErrorId>
        <ErrorTitle>
          select an item from the Home or Shop page to access that page!
        </ErrorTitle>
        <ErrorButton onClick={goPageHome}>HOMEPAGE</ErrorButton>
      </ContainerErrorId>
    );
  }

  return (
    <Container>
      <ImgProduct img={productSelected.img} />
      <CardTextProduct
        title={productSelected.name}
        price={productSelected.price}
        aboutProduct={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. "
        }
        sizeProduct={productSelected.size}
        categoryProduct={"Fashion, Style"}
      />
    </Container>
  );
}

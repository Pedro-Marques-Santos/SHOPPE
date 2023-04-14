import { useNavigate } from "react-router-dom";
import {
  Container,
  ContainerErrorId,
  ErrorButton,
  ErrorId,
  ErrorTitle,
} from "./styles";

import { ImgProduct } from "../ImgProduct";
import { CardTextProduct } from "../CardTextProduct";
import { useContext } from "react";
import { ProductsContext } from "../../../context/Products";

interface IProductProps {
  id: number;
  typeProduct: string;
  listProducts: IProduct[];
}

interface IProduct {
  name: string;
  price: number;
  size: number;
  img: string;
  id: number;
  img2?: string;
  qtd?: number;
}

export function Product({ id, typeProduct, listProducts }: IProductProps) {
  const navegate = useNavigate();
  const productsContext = useContext(ProductsContext);

  const product: IProduct[] = Object.values(
    productsContext?.products?.AllProducts ?? []
  );

  const bestprodct =
    (productsContext?.products?.BestProduct as unknown as IProduct) ??
    undefined;

  let productSelected: IProduct | undefined;
  typeProduct === "common"
    ? (productSelected = product.find((e) => e.id === id) as
        | IProduct
        | undefined)
    : (productSelected = bestprodct);

  function goPageHome() {
    navegate("/");
  }

  if (
    !productsContext ||
    !productsContext.products?.BestProduct ||
    !productsContext.products?.AllProducts
  ) {
    return <></>;
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
      <ImgProduct img={productSelected.img2 ?? productSelected.img} />
      <CardTextProduct
        product={productSelected}
        title={productSelected.name}
        price={productSelected.price}
        aboutProduct={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. "
        }
        sizeProduct={productSelected.size}
        categoryProduct={"Fashion, Style"}
        listProducts={listProducts}
      />
    </Container>
  );
}

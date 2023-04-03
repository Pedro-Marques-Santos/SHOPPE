import { Introduction } from "../Introduction";
import { Container, ContainerCardShopLatest } from "./styles";
import { ShopCard } from "../../ShopCard";
import { useContext } from "react";
import { ProductsContext } from "../../../context/Products";

interface IProduct {
  name: string;
  price: number;
  size: number;
  img: string;
  id: number;
  img2?: string;
}

export function ShopLatest() {
  const productsContext = useContext(ProductsContext);

  if (
    !productsContext ||
    !productsContext.products?.BestProduct ||
    !productsContext.products?.BestProduct
  ) {
    return <></>;
  }

  const allproducts = Object.values(productsContext.products.AllProducts);

  return (
    <Container>
      <Introduction />
      <ContainerCardShopLatest>
        {allproducts.map((product: IProduct) => (
          <ShopCard
            key={product.id}
            img={product.img}
            name={product.name}
            price={product.price}
            id={product.id}
          />
        ))}
      </ContainerCardShopLatest>
    </Container>
  );
}

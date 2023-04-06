import { Container } from "./styles";
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
  qtd?: number;
}

interface IDescktop {
  search: string;
}

export function Descktop({ search }: IDescktop) {
  const productsContext = useContext(ProductsContext);

  if (
    !productsContext ||
    !productsContext.products?.BestProduct ||
    !productsContext.products?.BestProduct
  ) {
    return <></>;
  }

  const allproducts = Object.values(productsContext.products.AllProducts);

  const lowerSearch = search.toLocaleLowerCase();

  const filteredAllProducts: IProduct[] =
    search.length > 0
      ? allproducts.filter((product: IProduct) =>
          product.name.toLocaleLowerCase().includes(lowerSearch)
        )
      : [];

  return (
    <Container>
      {search.length > 0
        ? filteredAllProducts.map((product: IProduct) => (
            <ShopCard
              type="descktop"
              key={product.id}
              img={product.img}
              name={product.name}
              price={product.price}
              id={product.id}
            />
          ))
        : allproducts.map((product: IProduct) => (
            <ShopCard
              type="descktop"
              key={product.id}
              img={product.img}
              name={product.name}
              price={product.price}
              id={product.id}
            />
          ))}
    </Container>
  );
}

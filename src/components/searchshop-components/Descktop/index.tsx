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
}

export function Descktop() {
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
      {allproducts.map((product: IProduct) => (
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

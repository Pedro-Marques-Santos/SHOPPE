import { Container, ContainerProduct, Price, Product, Title } from "./styles";
import { useContext } from "react";
import { ProductsContext } from "../../../context/Products";
import { useNavigate } from "react-router-dom";

interface IProduct {
  name: string;
  price: number;
  size: number;
  img: string;
  id: number;
}

export function Bestproduct() {
  const navegate = useNavigate();
  const productsContext = useContext(ProductsContext);

  if (
    !productsContext ||
    !productsContext.products?.BestProduct ||
    !productsContext.products?.BestProduct
  ) {
    return <></>;
  }

  const product = productsContext.products.BestProduct as unknown as IProduct;

  function goPageViewProduct() {
    navegate("/ViewProduct", {
      state: {
        data: {
          id: product.id,
          typeProduct: "best",
        },
      },
    });
  }

  return (
    <Container>
      <Product>
        <ContainerProduct key={product.id}>
          <Title>{product.name}</Title>
          <Price>
            {product.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </Price>
          <button onClick={goPageViewProduct}>View Product</button>
        </ContainerProduct>
      </Product>
      <img src={product.img} alt="img" />
    </Container>
  );
}

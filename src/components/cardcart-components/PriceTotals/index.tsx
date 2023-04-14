import { useContext, useEffect, useState } from "react";
import { Container, ContainerTotal, Title, Totals } from "./styles";
import { ProductsLocalStorageContext } from "../../../context/ProductsLocalStorage";

export function PriceTotals() {
  const { listProductsLocalStorage } = useContext(ProductsLocalStorageContext);
  const [priceTotal, setPriceTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    listProductsLocalStorage.forEach((product) => {
      total += product.price * product.qtd!;
      setPriceTotal(total);
    });
  }, [listProductsLocalStorage]);

  return (
    <Container>
      <Title>Cart totals</Title>
      <ContainerTotal>
        <h1>TOTAL</h1>
        <Totals>
          {listProductsLocalStorage.length
            ? priceTotal.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            : "adicione produtos ao carrinho!"}
        </Totals>
      </ContainerTotal>
      <button type="submit">PROCEED TO CHECKOUT</button>
    </Container>
  );
}

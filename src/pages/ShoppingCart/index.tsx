import { CartCard } from "../../components/cardcart-components/CartCard";
import { Header } from "../../components/header-components/Header";
import { Container, ContainerCart, ContentContainer, Title } from "./styles";

import { PriceTotals } from "../../components/cardcart-components/PriceTotals";
import { Footer } from "../../components/footer-components/Footer";
import { useContext } from "react";

import { v4 as uuidv4 } from "uuid";
import { ProductsLocalStorageContext } from "../../context/ProductsLocalStorage";

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

export function ShoppingCart() {
  const productsLocalStorage = useContext(ProductsLocalStorageContext);

  return (
    <ContentContainer>
      <Header />
      <Container>
        <Title>Shopping Cart</Title>
        <ContainerCart>
          {productsLocalStorage!.listProductsLocalStorage.map(
            (product: IProduct) => (
              <CartCard
                key={uuidv4()}
                idcard={product.idcard}
                img={product.img}
                title={product.name}
                price={product.price}
                qtd={product.qtd}
                img2={product.img2}
              />
            )
          )}
        </ContainerCart>
        <PriceTotals />
        <Footer />
      </Container>
    </ContentContainer>
  );
}

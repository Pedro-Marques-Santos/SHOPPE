import { CartCard } from "../../components/cardcart-components/CartCard";
import { Header } from "../../components/header-components/Header";
import { Container, ContainerCart, ContentContainer, Title } from "./styles";

import img from "../../assets/images-card/Hair Pin Set of 3.svg";
import { PriceTotals } from "../../components/cardcart-components/PriceTotals";
import { Footer } from "../../components/footer-components/Footer";

export function ShoppingCart() {
  return (
    <ContentContainer>
      <Header />
      <Container>
        <Title>Shopping Cart</Title>
        <ContainerCart>
          <CartCard
            img={img}
            title={"Kaede Hair Pin"}
            price={"$ 20,00"}
            qtd={"1"}
          />
          <CartCard
            img={img}
            title={"Kaede Hair Pin"}
            price={"$ 20,00"}
            qtd={"1"}
          />
        </ContainerCart>
        <PriceTotals />
        <Footer />
      </Container>
    </ContentContainer>
  );
}

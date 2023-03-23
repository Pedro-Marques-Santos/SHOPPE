import { Bestproduct } from "../../components/bestproduct-components/Bestproduct";
import { Footer } from "../../components/footer-components/Footer";
import { Header } from "../../components/header-components/Header";
import { ShopLatest } from "../../components/shoplatest-components/ShopLatest";
import { Container, ContentContainer } from "./styles";

export function Home() {
  return (
    <ContentContainer>
      <Header />
      <Container>
        <Bestproduct />
        <ShopLatest />
        <Footer />
      </Container>
    </ContentContainer>
  );
}

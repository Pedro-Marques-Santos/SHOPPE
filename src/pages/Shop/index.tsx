import { Footer } from "../../components/footer-components/Footer";
import { Header } from "../../components/header-components/Header";
import { ShopDescktop } from "../../components/ShopDescktop";
import { Container, ContentContainer } from "./styles";

export function Shop() {
  return (
    <ContentContainer>
      <Header />
      <Container>
        <ShopDescktop />
        <Footer />
      </Container>
    </ContentContainer>
  );
}

import { Descktop } from "../searchshop-components/Descktop";
import { SearchShop } from "../searchshop-components/SearchShop";
import { Container } from "./styles";

export function ShopDescktop() {
  return (
    <Container>
      <SearchShop />
      <Descktop />
    </Container>
  );
}

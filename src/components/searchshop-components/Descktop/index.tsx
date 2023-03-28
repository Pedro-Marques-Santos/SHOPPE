import { Container } from "./styles";

import img from "../../../assets/images-card/Hair Pin Set of 3.svg";
import img2 from "../../../assets/images-card/Hal Earrings.svg";
import img3 from "../../../assets/images-card/Kaede Hair Pin Set Of 3.svg";
import img4 from "../../../assets/images-card/Lira Earrings.svg";
import img5 from "../../../assets/images-card/Plaine Necklace.svg";
import img6 from "../../../assets/images-card/Yuki Hair Pin Set of 3.svg";
import { ShopCard } from "../../ShopCard";

export function Descktop() {
  return (
    <Container>
      <ShopCard type="descktop" img={img} name="Lira Earrings" price="20,00" />
      <ShopCard type="descktop" img={img2} name="Hal Earrings" price="25,00" />
      <ShopCard
        type="descktop"
        img={img3}
        name="Kaede Hair Pin Set Of 3"
        price="19,00"
      />
      <ShopCard
        type="descktop"
        img={img4}
        name="Hair Pin Set of 3"
        price="30,00"
      />
      <ShopCard
        type="descktop"
        img={img5}
        name="Plaine Necklace"
        price="40,00"
      />
      <ShopCard
        type="descktop"
        img={img6}
        name="Yuki Hair Pin Set of 3"
        price="19,00"
      />
    </Container>
  );
}

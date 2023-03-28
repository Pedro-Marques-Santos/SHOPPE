import { Container } from "./styles";

import img from "../../../assets/images-card/Hair Pin Set of 3.svg";
import { ImgProduct } from "../ImgProduct";
import { CardTextProduct } from "../CardTextProduct";

export function Product() {
  return (
    <Container>
      <ImgProduct img={img} />
      <CardTextProduct
        title={"Lira Earrings"}
        price={"$ 20,00"}
        aboutProduct={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. "
        }
        sizeProduct={"12"}
        categoryProduct={"Fashion, Style"}
      />
    </Container>
  );
}

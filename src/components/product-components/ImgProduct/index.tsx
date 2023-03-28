import { Container } from "./styles";

interface IImgProduct {
  img: string;
}

export function ImgProduct({ img }: IImgProduct) {
  return (
    <Container href="##">
      <img src={img} alt="" />
    </Container>
  );
}

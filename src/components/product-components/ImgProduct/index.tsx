import { Container } from "./styles";

interface IImgProduct {
  img: string;
}

export function ImgProduct({ img }: IImgProduct) {
  return (
    <Container>
      <img src={img} alt="" />
    </Container>
  );
}

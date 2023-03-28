import { Container } from "./styles";

interface IImgCardCart {
  img: string;
}

export function ImgCardCart({ img }: IImgCardCart) {
  return (
    <Container>
      <img src={img} alt="" />
    </Container>
  );
}

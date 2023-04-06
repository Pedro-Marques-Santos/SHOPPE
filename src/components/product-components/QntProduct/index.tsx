import { Container, LessQtd, MoreQtd, Qtd } from "./styles";

interface IQtdProduct {
  qtd: number;
  setQtd: React.Dispatch<React.SetStateAction<number>>;
}

export function QtdProduct({ qtd, setQtd }: IQtdProduct) {
  function increaseQtd() {
    setQtd(++qtd);
  }

  function decreaseQtd() {
    if (qtd > 1) {
      setQtd(--qtd);
    }
  }

  return (
    <Container>
      <LessQtd onClick={decreaseQtd}>-</LessQtd>
      <Qtd>{qtd}</Qtd>
      <MoreQtd onClick={increaseQtd}>+</MoreQtd>
    </Container>
  );
}

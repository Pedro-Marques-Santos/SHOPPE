import { useContext } from "react";
import { Container, LessQtd, MoreQtd, Qtd } from "./styles";
import { ProductsLocalStorageContext } from "../../../context/ProductsLocalStorage";

interface IQtdProduct {
  qtd?: number;
  idcard?: string;
}

interface IProduct {
  name: string;
  price: number;
  size: number;
  img: string;
  id: number;
  img2?: string;
  qtd?: number;
  idcard?: string;
}

export function QtdProduct({ qtd, idcard }: IQtdProduct) {
  const { listProductsLocalStorage, modifyQtdProdctLocalStorage } = useContext(
    ProductsLocalStorageContext
  );

  function increaseQtd() {
    let qtdproduct = ++qtd!;

    let product = listProductsLocalStorage.find(
      (product) => product.idcard === idcard
    ) as IProduct;

    product = {
      ...product,
      qtd: qtdproduct,
    };

    modifyQtdProdctLocalStorage(product, idcard!);
  }

  function decreaseQtd() {
    if (qtd) {
      if (qtd > 1) {
        let qtdproduct = --qtd!;

        let product = listProductsLocalStorage.find(
          (product) => product.idcard === idcard
        ) as IProduct;

        product = {
          ...product,
          qtd: qtdproduct,
        };

        modifyQtdProdctLocalStorage(product, idcard!);
      }
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

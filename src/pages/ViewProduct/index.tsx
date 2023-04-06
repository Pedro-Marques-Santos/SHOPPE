import { Header } from "../../components/header-components/Header";
import { Product } from "../../components/product-components/Product";
import { Container, ContentContainer } from "./styles";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

interface IProduct {
  name: string;
  price: number;
  size: number;
  img: string;
  id: number;
  img2?: string;
  qtd?: number;
}

interface CustomizedState {
  data: {
    id: number;
    typeProduct: string;
    listProducts: IProduct[];
    setListProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  } | null;
}

export function ViewProduct() {
  const [idProduct, setIdProduct] = useState(0);
  const [typeProduct, setTypeProduct] = useState("");

  const location = useLocation();

  const state = location.state as CustomizedState;

  const id = state!.data!.id;
  const typeproduct = state!.data!.typeProduct;
  const listProducts = state.data!.listProducts;

  useEffect(() => {
    setIdProduct(id);
    setTypeProduct(typeproduct);
  }, [id, typeProduct, typeproduct]);

  if (!id) {
    return <>Error</>;
  }

  return (
    <ContentContainer>
      <Header />
      <Container>
        <Product
          id={idProduct}
          typeProduct={typeProduct}
          listProducts={listProducts}
        />
      </Container>
    </ContentContainer>
  );
}

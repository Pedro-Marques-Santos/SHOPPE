import { Header } from "../../components/header-components/Header";
import { Product } from "../../components/product-components/Product";
import { Container, ContentContainer } from "./styles";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

interface CustomizedState {
  data: {
    id: number;
    typeProduct: string;
  } | null;
}

export function ViewProduct() {
  const [idProduct, setIdProduct] = useState(0);
  const [typeProduct, setTypeProduct] = useState("");

  const location = useLocation();

  const state = location.state as CustomizedState;

  const id = state!.data!.id;
  const typeproduct = state!.data!.typeProduct;

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
        <Product id={idProduct} typeProduct={typeProduct} />
      </Container>
    </ContentContainer>
  );
}

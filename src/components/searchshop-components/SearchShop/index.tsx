import { Container, IconSearch, Input, Title } from "./styles";

import { AiOutlineSearch } from "react-icons/ai";
import { InputMinAndMax } from "../InputMinAndMax";

export function SearchShop() {
  return (
    <Container>
      <Title>Shop</Title>
      <Input>
        <input type="text" placeholder="search..." />
      </Input>
      <IconSearch>
        <AiOutlineSearch />
      </IconSearch>
      <InputMinAndMax />
    </Container>
  );
}

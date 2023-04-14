import { Container, IconSearch, Input, Title } from "./styles";

import { AiOutlineSearch } from "react-icons/ai";

interface ISearchShop {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setSearchRangeMax: React.Dispatch<React.SetStateAction<number>>;
  setSearchRangeMin: React.Dispatch<React.SetStateAction<number>>;
  searchRangeMax: number;
  searchRangeMin: number;
}

export function SearchShop({ search, setSearch }: ISearchShop) {
  return (
    <Container>
      <Title>Shop</Title>
      <Input>
        <input
          type="text"
          placeholder="search..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </Input>
      <IconSearch>
        <AiOutlineSearch />
      </IconSearch>
    </Container>
  );
}

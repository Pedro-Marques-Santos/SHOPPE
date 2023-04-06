import { Container, IconSearch, Input, Title } from "./styles";

import { AiOutlineSearch } from "react-icons/ai";
import { InputMinAndMax } from "../InputMinAndMax";

interface ISearchShop {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setSearchRangeMax: React.Dispatch<React.SetStateAction<number>>;
  setSearchRangeMin: React.Dispatch<React.SetStateAction<number>>;
  searchRangeMax: number;
  searchRangeMin: number;
}

export function SearchShop({
  search,
  setSearch,
  searchRangeMax,
  setSearchRangeMax,
  searchRangeMin,
  setSearchRangeMin,
}: ISearchShop) {
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
      <InputMinAndMax
        searchRangeMax={searchRangeMax}
        setSearchRangeMax={setSearchRangeMax}
        searchRangeMin={searchRangeMin}
        setSearchRangeMin={setSearchRangeMin}
      />
    </Container>
  );
}

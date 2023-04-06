import { useState } from "react";
import { Descktop } from "../searchshop-components/Descktop";
import { SearchShop } from "../searchshop-components/SearchShop";
import { Container } from "./styles";

export function ShopDescktop() {
  const [search, setSearch] = useState("");

  const [searchRangeMax, setSearchRangeMax] = useState(100);
  const [searchRangeMin, setSearchRangeMin] = useState(0);

  console.log(searchRangeMax, searchRangeMin);

  return (
    <Container>
      <SearchShop
        searchRangeMax={searchRangeMax}
        setSearchRangeMax={setSearchRangeMax}
        searchRangeMin={searchRangeMin}
        setSearchRangeMin={setSearchRangeMin}
        search={search}
        setSearch={setSearch}
      />
      <Descktop search={search} />
    </Container>
  );
}

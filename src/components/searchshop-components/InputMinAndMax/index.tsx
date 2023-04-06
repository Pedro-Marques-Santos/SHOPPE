import { Container, Input, Title } from "./styles";

interface IInputMinAndMax {
  setSearchRangeMax: React.Dispatch<React.SetStateAction<number>>;
  setSearchRangeMin: React.Dispatch<React.SetStateAction<number>>;
  searchRangeMax: number;
  searchRangeMin: number;
}

export function InputMinAndMax({
  setSearchRangeMin,
  setSearchRangeMax,
  searchRangeMax,
  searchRangeMin,
}: IInputMinAndMax) {
  return (
    <Container>
      <Title>Price Range</Title>
      <Input>
        <h1>Min</h1>
        <input
          type="number"
          onChange={(e) => setSearchRangeMin(e.target.valueAsNumber)}
          min={0}
          maxLength={2}
          max={searchRangeMax}
          value={searchRangeMin}
        />
      </Input>
      <Input>
        <h1>Max</h1>
        <input
          type="number"
          onChange={(e) => setSearchRangeMax(e.target.valueAsNumber)}
          max={100}
          maxLength={3}
          min={searchRangeMin}
          value={searchRangeMax}
        />
      </Input>
    </Container>
  );
}

import { Container, Input, Title } from "./styles";

export function InputMinAndMax() {
  return (
    <Container>
      <Title>Price Range</Title>
      <Input>
        <h1>Min</h1>
        <input type="number" defaultValue={0} />
      </Input>
      <Input>
        <h1>Max</h1>
        <input type="number" defaultValue={100} />
      </Input>
    </Container>
  );
}

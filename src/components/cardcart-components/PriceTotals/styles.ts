import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid gray;
  padding: 10px;
  padding-bottom: 25px;
  h1 {
    font-size: 16px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
  }
  button {
    margin-top: 10px;
    height: 40px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.div`
  color: var(--gold-black);
  font-size: 24px;
  font-weight: 500;
  line-height: 43px;
  letter-spacing: 0em;
`;

export const ContainerTotal = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;

export const Totals = styled.div`
  font-size: 17px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0em;
`;

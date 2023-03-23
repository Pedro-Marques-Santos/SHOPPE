import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  background: var(--gray-light);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 800px;
    min-width: 500px;
    width: 60%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    img {
      order: 1;
      min-width: 100px;
      width: 100%;
    }
  }
`;

export const Product = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    order: 2;
  }
`;

export const ContainerProduct = styled.div`
  button {
    margin-top: 30px;
    color: var(--gold-black);
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;

    height: 53px;
    width: 193px;
    border-radius: 6px;
    border: 2px solid var(--gold-black);
    background: var(--gray-light);
  }
  @media (max-width: 768px) {
    button {
      margin-bottom: 10px;
    }
  }
`;

export const Title = styled.div`
  color: var(--gold-black);
  font-size: 20px;
  font-weight: 500;
  line-height: 43px;
  letter-spacing: 0em;
`;

export const Price = styled.div`
  color: var(--gold-black);
  font-size: 18px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0em;
`;

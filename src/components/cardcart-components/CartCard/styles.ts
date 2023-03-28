import styled from "styled-components";

export const Container = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;

  padding-bottom: 45px;
  margin-bottom: 45px;
  border-bottom: 1px solid #d8d8d8;

  i {
    z-index: 2;
    cursor: pointer;
    position: relative;
    top: -20px;
    left: 20px;
    font-size: 25px;
    color: gray;
    font-weight: 400;
  }

  @media (max-width: 500px) {
    padding-bottom: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    i {
      top: -405px;
      left: 135px;
    }
  }
`;

export const ContainerQtdCartCard = styled.div`
  @media (max-width: 500px) {
    max-width: 200px;
    min-width: 50px;
    width: 100%;
  }
`;

export const CartText = styled.div`
  max-width: 200px;
  min-width: 50px;
  width: 100%;
`;

export const Title = styled.div`
  margin: 0 auto;
  width: 150px;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Type = styled.div`
  width: 150px;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  color: gray;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Price = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  width: 150px;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  color: var(--gold);
  @media (max-width: 500px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  padding-left: 20px;
  @media (max-width: 768px) {
    min-width: 300px;
    width: 100%;
    padding-left: 0px;
  }
`;

export const Title = styled.div`
  color: var(--gold-black);
  font-size: 24px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0em;
`;

export const Price = styled.div`
  margin-top: 8px;
  color: var(--gold);
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
`;

export const AboutProduct = styled.div`
  margin-top: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: justify;
  color: #707070;
`;

export const ContainerQtdProductsAndButtonCart = styled.div`
  margin-top: 40px;
  display: flex;
`;

export const ContainerSizeAndCategory = styled.div`
  margin-top: 66px;
`;

export const SizeAndCategory = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  span {
    font-weight: 400;
    color: var(--gray-dark);
  }
`;

import styled from "styled-components";

export const Container = styled.a`
  cursor: pointer;
  width: 50%;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
    padding-top: 100px;
    min-width: 300px;
    max-width: 400px;
    width: 100%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

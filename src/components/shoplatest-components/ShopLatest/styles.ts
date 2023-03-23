import styled from "styled-components";

export const Container = styled.div`
  margin-top: 60px;
`;

export const ContainerCardShopLatest = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(302px), 302px));
  gap: 30px;
  justify-content: space-between;
  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

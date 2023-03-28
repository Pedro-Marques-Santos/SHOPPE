import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(250px), 250px));
  gap: 30px;
  justify-content: center;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

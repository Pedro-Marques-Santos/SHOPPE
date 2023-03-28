import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  @media (max-width: 768px) {
    padding-top: 270px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

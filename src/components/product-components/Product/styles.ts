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

export const ContainerErrorId = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const ErrorId = styled.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 43px;
  letter-spacing: 0em;
`;

export const ErrorTitle = styled.div`
  max-width: 350px;
  font-size: 17px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
`;

export const ErrorButton = styled.button`
  margin-top: 20px;
  height: 43px;
  width: 100px;
  border-radius: 4px;
  border: 1px solid #000000;
  background: white;
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  color: var(--gold-black);
  font-size: 27px;
  font-weight: 500;
  line-height: 43px;
  letter-spacing: 0em;
`;

export const Input = styled.div`
  input {
    margin-top: 50px;
    padding-bottom: 10px;
    padding-left: 10px;
    font-size: 16.5px;
    outline: none;
    height: 30px;
    width: 100%;
    border: none;
    border-bottom: 1px solid #d8d8d8;
  }
`;

export const IconSearch = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: end;
  margin-top: -26px;
  margin-right: 10px;
  color: grey;
  font-size: 20px;
`;

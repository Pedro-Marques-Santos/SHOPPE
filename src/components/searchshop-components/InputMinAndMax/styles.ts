import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
`;

export const Input = styled.div`
  display: flex;
  h1 {
    font-size: 14px;
    font-weight: 400;
    margin-right: 14px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    height: 30px;
    width: 30px;
  }
  input {
    font-size: 15px;
    border-radius: 10px;
    text-align: center;
    outline: none;
    height: 30px;
    width: 80px;
    border: 1px solid #d8d8d8;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  color: var(gold-black);
  margin-bottom: 12px;
`;

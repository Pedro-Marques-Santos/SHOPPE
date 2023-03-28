import styled from "styled-components";

export const Container = styled.div`
  margin-right: 23px;
  display: flex;
`;

export const LessQtd = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  background: var(--gray-light);
  color: var(--gold-black);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const MoreQtd = styled.div`
  color: var(--gold-black);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  background: var(--gray-light);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Qtd = styled.div`
  color: var(--gold-black);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  background: var(--gray-light);
`;

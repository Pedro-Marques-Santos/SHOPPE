import styled from "styled-components";

interface IContainerProps {
  type?: string;
}

export const Container = styled.div<IContainerProps>`
  cursor: pointer;
  img {
    border-radius: 8px;
    width: ${(props) => (props.type === "descktop" ? "250px" : "300px")};
  }
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
`;

export const Price = styled.div`
  color: var(--gold-black);
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
`;

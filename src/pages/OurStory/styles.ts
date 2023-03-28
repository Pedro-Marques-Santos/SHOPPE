import styled from "styled-components";

export const ContentContainer = styled.div``;

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  max-width: 680px;
  width: 100%;
  padding-left: 8px;
  padding-right: 8px;

  h1 {
    font-size: 25px;
    font-weight: 500;
    line-height: 43px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 18px;
    color: var(--gold-black);
  }

  h2 {
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--gold-black);
  }

  p {
    margin-top: 18px;
    font-size: 16px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 60px;
  }

  img {
    width: 100%;
  }

  ul {
    margin-bottom: 40px;
  }
`;

export const ListPost = styled.div`
  padding: 10px;
  color: var(--gold-black);
`;

export const Title = styled.div`
  color: var(--gold-black);
  font-size: 23px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0em;
  margin-bottom: 12px;
`;

export const TextPost = styled.div`
  margin-top: 18px;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 18px;
`;

export const ContainerFooter = styled.div`
  margin: 0 auto;
  max-width: 1248px;
  width: 100%;
  padding-left: 8px;
  padding-right: 8px;
`;

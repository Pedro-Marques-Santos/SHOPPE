import styled from "styled-components";

export const ContentContainer = styled.div`
  background: white;
  position: fixed;
  z-index: 10;
  top: 0;
  color: var(--gold-black);
  width: 100%;
  box-shadow: 0px 1px 6px 0px #0000001a;
  display: flex;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1248px;
  width: 100%;
`;

export const Menu = styled.div`
  margin-top: 14px;
  margin-bottom: 14px;
  display: flex;
  justify-content: space-between;
`;

export const Tag = styled.div`
  margin-left: 8px;
  display: flex;
  align-items: center;
  img {
    cursor: pointer;
    width: 90px;
  }
`;

export const LineMenu = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  border: 0.5px dashed #d8d7d6;
  height: 17px;
`;

export const Pages = styled.div`
  padding-right: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const PagesBar = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
`;

export const ProgessBar = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 500px) {
    display: flex;
    margin-right: 8px;
    align-items: center;
    justify-content: center;
    i {
      font-size: 23px;
      color: var(--gold);
    }
  }
`;

interface MenuBarProps {
  stateProgessBar: boolean;
}

export const MenuBar = styled.div<MenuBarProps>`
  display: none;
  @media (max-width: 500px) {
    display: ${(props) => (props.stateProgessBar === true ? "block" : "none")};
  }
`;

export const IconMenu = styled.div`
  font-weight: 100;
  color: var(--gold-black);
  display: flex;
  i {
    cursor: pointer;
    font-size: 22px;
  }
  margin-right: 25px;
  :last-child {
    margin-right: 0;
  }
`;

export const Item = styled.div`
  cursor: pointer;
  margin-right: 40px;
  :nth-child(3) {
    margin-right: 0;
  }
  @media (max-width: 500px) {
    margin-right: 0px;
    margin-bottom: 18px;
  }
`;

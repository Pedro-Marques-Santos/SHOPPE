import { useState } from "react";
import {
  Container,
  ContentContainer,
  IconMenu,
  Item,
  LineMenu,
  Menu,
  MenuBar,
  Pages,
  PagesBar,
  ProgessBar,
  Tag,
} from "./styles";

import logo from "../../../assets/SHOPPE.svg";

export function Header() {
  const [progressBar, setProgessBar] = useState(false);

  return (
    <ContentContainer>
      <Container>
        <Menu>
          <Tag>
            <img src={logo} alt="logo" />
          </Tag>
          <ProgessBar onClick={() => setProgessBar(!progressBar)}>
            <i className="material-symbols-outlined">density_small</i>
          </ProgessBar>
          <Pages>
            <Item>Shop</Item>
            <Item>Our Story</Item>
            <Item>Home</Item>
            <LineMenu></LineMenu>
            <IconMenu>
              <i className="material-symbols-outlined">search</i>
            </IconMenu>
            <IconMenu>
              <i className="material-symbols-outlined">shopping_cart</i>
            </IconMenu>
          </Pages>
        </Menu>
        <MenuBar stateProgessBar={progressBar}>
          <PagesBar>
            <Item>Shop</Item>
            <Item>Blog</Item>
            <Item>Our Story</Item>
            <Item>My shopping cart</Item>
          </PagesBar>
        </MenuBar>
      </Container>
    </ContentContainer>
  );
}

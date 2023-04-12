import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

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
  QtdCart,
  Tag,
} from "./styles";

import logo from "../../../assets/SHOPPE.svg";
import { ProductsLocalStorageContext } from "../../../context/ProductsLocalStorage";

export function Header() {
  const productsLocalStorage = useContext(ProductsLocalStorageContext);

  const [progressBar, setProgessBar] = useState(false);

  const navegate = useNavigate();

  function goPageShop() {
    navegate("/Shop");
  }

  function goPageHome() {
    navegate("/");
  }

  function goOurStory() {
    navegate("/OurStory");
  }

  function goPageCart() {
    navegate("/ShoppingCart");
  }

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
            <Item onClick={goPageShop}>Shop</Item>
            <Item onClick={goOurStory}>Our Story</Item>
            <Item onClick={goPageHome}>Home</Item>
            <LineMenu></LineMenu>
            <IconMenu onClick={goPageShop}>
              <i className="material-symbols-outlined">search</i>
            </IconMenu>
            <IconMenu onClick={goPageCart}>
              <i className="material-symbols-outlined">shopping_cart</i>
              <QtdCart>
                {productsLocalStorage!.listProductsLocalStorage.length > 0
                  ? productsLocalStorage!.listProductsLocalStorage.length.toString()
                  : ""}
              </QtdCart>
            </IconMenu>
          </Pages>
        </Menu>
        <MenuBar stateProgessBar={progressBar}>
          <PagesBar>
            <Item onClick={goPageShop}>Shop</Item>
            <Item onClick={goOurStory}>Our Story</Item>
            <Item onClick={goPageHome}>Home</Item>
            <Item onClick={goPageCart}>My shopping cart</Item>
          </PagesBar>
        </MenuBar>
      </Container>
    </ContentContainer>
  );
}

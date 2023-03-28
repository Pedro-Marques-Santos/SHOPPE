/* eslint-disable @typescript-eslint/no-unused-vars */
import { Home } from "./pages/Home";
import { OurStory } from "./pages/OurStory";
import { Shop } from "./pages/Shop";
import { ShoppingCart } from "./pages/ShoppingCart";
import { ViewProduct } from "./pages/ViewProduct";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <ShoppingCart />
      <GlobalStyle />
    </>
  );
}

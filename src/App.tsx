/* eslint-disable @typescript-eslint/no-unused-vars */
import { Home } from "./pages/Home";
import { OurStory } from "./pages/OurStory";
import { Shop } from "./pages/Shop";
import { ShoppingCart } from "./pages/ShoppingCart";
import { ViewProduct } from "./pages/ViewProduct";
import { GlobalStyle } from "./styles/global";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsProvider } from "./context/Products";

export function App() {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/OurStory" element={<OurStory />}></Route>
        </Routes>
        <Routes>
          <Route path="/Shop" element={<Shop />}></Route>
        </Routes>
        <Routes>
          <Route path="/ViewProduct" element={<ViewProduct />}></Route>
        </Routes>
        <Routes>
          <Route path="/ShoppingCart" element={<ShoppingCart />}></Route>
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ProductsProvider>
  );
}

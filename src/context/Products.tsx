import { createContext, ReactNode, useEffect, useState } from "react";

import allproducts from "../data/index";

interface ProductsProviderProps {
  children: ReactNode;
}

interface IAllproducts {
  LiraEarrings: {};
  HalEarrings: {};
  KaedeHairPinSetOf3: {};
  HairPinSetof3: {};
  PlaineNecklace: {};
  YukiHairPinSetof3: {};
}

interface IBestProducts {
  BestProduct: {
    Goldbighoops: {};
  };
}

interface IProducts {
  AllProducts: IAllproducts;
  BestProduct: IBestProducts;
}

type TProductsContextProps = {
  products: IProducts | null;
};

export const ProductsContext = createContext<TProductsContextProps | null>(
  null
);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<IProducts | null>(null);

  useEffect(() => {
    let productsshop = allproducts[0] as unknown as IProducts;
    setProducts(productsshop);
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}

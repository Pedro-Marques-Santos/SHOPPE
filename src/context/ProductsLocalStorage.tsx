import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

interface ProductsLocalStorageProviderProps {
  children: ReactNode;
}

interface IProduct {
  name: string;
  price: number;
  size: number;
  img: string;
  id: number;
  img2?: string;
  qtd?: number;
  idcard?: string;
}

type TProductsLocalStorageContextProps = {
  listProductsLocalStorage: IProduct[];
  reloadListProductsLocalStorage(): void;
  removeProductLocalStorage(product: IProduct): void;
  modifyQtdProdctLocalStorage(product: IProduct, idcard: string): void;
  saveNewProductFromListProduct(product: IProduct): void;
};

export const ProductsLocalStorageContext =
  createContext<TProductsLocalStorageContextProps>(
    {} as TProductsLocalStorageContextProps
  );

export function ProductsLocalStorageProvider({
  children,
}: ProductsLocalStorageProviderProps) {
  //lista de produtos atulizada pelo localstorage
  const [listProductsLocalStorage, setListProductsLocalStorage] = useState<
    IProduct[]
  >([]);

  //lista de produtos local, recebe os dados do localstorage para atualizar ou editar os produtos
  const [listProducts, setListProducts] = useState<IProduct[]>(
    JSON.parse(localStorage.getItem("products")!) ?? []
  );

  useEffect(() => {
    if (localStorage.getItem("products")) {
      setListProductsLocalStorage(
        JSON.parse(localStorage.getItem("products")!)
      );
    }
  }, []);

  // vai somente criar os dados em memória uma única vez, mesmo colocando no useffect nao vai gerar loop
  const reloadListProductsLocalStorage = useCallback(() => {
    setListProductsLocalStorage(JSON.parse(localStorage.getItem("products")!));
  }, []);

  function saveNewListProductsLocalStorage(products: IProduct[]) {
    setListProducts(products);
    reloadListProductsLocalStorage();
  }

  function saveNewProductFromListProduct(product: IProduct) {
    setListProducts([...listProducts, product]);
    reloadListProductsLocalStorage();
  }

  useEffect(() => {
    if (listProducts.length >= 0) {
      localStorage.setItem("products", JSON.stringify(listProducts));
      reloadListProductsLocalStorage();
    }
  }, [listProducts, reloadListProductsLocalStorage]);

  function removeProductLocalStorage(product: IProduct) {
    saveNewListProductsLocalStorage(
      listProductsLocalStorage.filter(
        (productStorage) => productStorage.idcard !== product.idcard
      )
    );
  }

  function modifyQtdProdctLocalStorage(product: IProduct, idcard: string) {
    let modifylistProducts = listProducts.map((p) =>
      p.idcard !== idcard ? p : product
    );
    saveNewListProductsLocalStorage(modifylistProducts);
  }

  return (
    <ProductsLocalStorageContext.Provider
      value={{
        listProductsLocalStorage,
        reloadListProductsLocalStorage,
        removeProductLocalStorage,
        modifyQtdProdctLocalStorage,
        saveNewProductFromListProduct,
      }}
    >
      {children}
    </ProductsLocalStorageContext.Provider>
  );
}

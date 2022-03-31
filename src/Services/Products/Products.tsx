import { createContext, FC, useContext, useState } from 'react';
import { Product } from 'Core/Product/Product.types';

const ProductsContext = createContext<Product[]>([]);

export const ProductsProvider: FC = ({ children }) => {
  const [products] = useState<Product[]>([
    { name: 'product1', price: 2 },
    { name: 'product2', price: 10 },
    { name: 'product3', price: 20 },
    { name: 'product4', price: 30 },
  ]);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export function useProducts() {
  return useContext(ProductsContext);
}

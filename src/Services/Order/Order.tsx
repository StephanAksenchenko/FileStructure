import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { Order } from 'Core/Order/Order.types';
import { Product } from 'Core/Product/Product.types';

type OrderContext = {
  state: Order;
  setState: Dispatch<SetStateAction<Order>>;
};

const init = {
  products: [] as Product[],
};

const OrderContext = createContext<OrderContext>({
  state: init,
} as OrderContext);

export const OrderProvider: FC = ({ children }) => {
  const [state, setState] = useState(init);

  return (
    <OrderContext.Provider value={{ state, setState }}>
      {children}
    </OrderContext.Provider>
  );
};

export function useOrder() {
  const { state, setState } = useContext(OrderContext);

  const add = (product: Product) => {
    setState({
      ...state,
      products: [...state.products, product],
    });
  };

  const getProducts = () => {
    return state.products;
  };

  const getSum = () => {
    return state.products.reduce((result, product) => {
      return result + product.price;
    }, 0);
  };

  return {
    add,
    getProducts,
    getSum,
  };
}

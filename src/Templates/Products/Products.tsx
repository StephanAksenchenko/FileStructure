import { FC } from 'react';
import ProductList from 'Widgets/ProductList';
import { ProductsProvider, useProducts } from 'Services/Products';
import { OrderProvider, useOrder } from 'Services/Order/';
import CartList from 'Widgets/CartList/';
import css from './Products.module.css';

const Template: FC = () => {
  return (
    <ProductsProvider>
      <OrderProvider>
        <Body />
      </OrderProvider>
    </ProductsProvider>
  );
};

const Body: FC = () => {
  const products = useProducts();
  const { add, getProducts, getSum } = useOrder();
  const productsInCart = getProducts();
  const sum = getSum();

  return (
    <div className={css.root}>
      <ProductList products={products} add={add} />
      <CartList products={productsInCart} sum={sum} />
    </div>
  );
};

export default Template;

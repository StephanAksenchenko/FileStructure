import { FC } from 'react';
import { Order } from 'Core/Order/Order.types';
import Card from 'Shared/Components/Card';

const CartList: FC<{ products: Order['products']; sum: number }> = ({
  products,
  sum,
}) => {
  return (
    <Card>
      <h2> Ваша корзина:</h2>
      <ul>
        {products.map((product, i) => {
          return (
            <li key={i}>
              {product.name} - {product.price}
            </li>
          );
        })}
      </ul>
      <h3>Итого: {sum} руб.</h3>
    </Card>
  );
};

export default CartList;

import css from './ProductList.module.css';
import { FC } from 'react';
import { Product } from 'Core/Product/Product.types';
import Text from 'Shared/Components/Text';
import Button from 'Shared/Components/Button';
import Card from 'Shared/Components/Card';

const ProductList: FC<{
  products: Product[];
  add: (product: Product) => void;
}> = ({ products, add }) => {
  return (
    <Card>
      <h2>Купите наш товар:</h2>
      {products.map((product, i) => {
        return (
          <div key={i} className={css.item}>
            <Text>
              {product.name} - {product.price}
            </Text>
            <Button onClick={() => add(product)}>купить</Button>
          </div>
        );
      })}
    </Card>
  );
};

export default ProductList;

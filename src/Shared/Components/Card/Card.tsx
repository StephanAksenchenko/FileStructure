import { FC } from 'react';
import css from './Card.module.css';

const Card: FC = ({ children }) => {
  return <div className={css.root}>{children}</div>;
};

export default Card;

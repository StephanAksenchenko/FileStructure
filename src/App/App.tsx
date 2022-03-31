import { FC } from 'react';

/**
 * Здесь можем расположить всё, что нужно (кроме глобальных стилей. Ограничение Next js)
 *
 * Apollo client
 * ErrorBoundary
 * Global contexts
 * and more other
 */
const App: FC = ({ children }) => {
  return <div>{children}</div>;
};

export default App;

import type { AppProps } from 'next/app';
import 'App/App.css';
import App from 'App';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <App>
      <Component {...pageProps} />
    </App>
  );
}

export default MyApp;

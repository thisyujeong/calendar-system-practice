import '../styles/globals.css';
import App from 'next/app';
import type { AppProps } from 'next/app';
import { wrapper } from '../store';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp);

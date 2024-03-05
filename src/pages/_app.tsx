import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import '@/styles/globals.scss';
import { store } from '@/redux/store';
export default function App({
  router,
  Component,
  pageProps,
  ...rest
}: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

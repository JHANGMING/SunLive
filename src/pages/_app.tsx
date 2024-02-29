import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import wrapper from '@/redux/store';
import '@/styles/globals.scss';

export default function App({
  Component,
  pageProps,
  router,
  ...rest
}: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

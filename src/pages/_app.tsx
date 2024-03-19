import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import '@/constants/styles/globals.css';
import '@/constants/styles/keyframes.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};
export default App;

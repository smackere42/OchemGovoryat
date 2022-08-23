import { YMInitializer } from 'react-yandex-metrika';

import '../styles/globals.css'
import '../styles/reset.css'
import '../styles/mainStyles.scss'

function MyApp({ Component, pageProps }) {
  return (
    <YMInitializer
      accounts={[90074848]}
      options={{
        webvisor: true,
        clickmap: true,
      }}
      version="2"
    >
      <Component {...pageProps} />
    </YMInitializer>
  );
}

export default MyApp

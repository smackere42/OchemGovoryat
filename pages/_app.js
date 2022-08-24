import { YMInitializer } from 'react-yandex-metrika';

import '../styles/globals.css'
import '../styles/reset.css'
import '../styles/mainStyles.scss'

function MyApp({ Component, pageProps }) {
  return (
    <YMInitializer
      accounts={[76933960]}
      options={{
        webvisor: true,
        clickmap: true,
        accurateTrackBounce:true,
        webvisor:true,
      }}
      version="2"
    >
      <Component {...pageProps} />
    </YMInitializer>
  );
}

export default MyApp

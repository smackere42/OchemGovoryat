import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
            <link
              rel="stylesheet"
              href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
              integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
              crossOrigin=""
            />
            <script
              src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
              integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
              crossOrigin=""
            />
            <link
              rel='stylesheet'
              href='https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css'
            />
            <link
              rel='stylesheet'
              href='https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.Default.css'
            />
            <script
              src='https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js'
            />
            <title>Что говорят в России?</title>
          </head>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

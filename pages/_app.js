import Head from 'next/head';

// Import wallpaper animation css
import '../background/style.css';

import '../fonts/fonts.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (<>
	   <Head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	   </Head>
	   <Component {...pageProps} />
   </>);
}


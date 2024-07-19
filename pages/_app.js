import "@/styles/globals.css";
import Nav from "@/components/buttom_nav";
import {APIProvider} from '@vis.gl/react-google-maps';

export default function App({ Component, pageProps }) {
  return (
    <APIProvider apiKey={'AIzaSyBwA7pyze0XndTMMLOhspsQdFq8Xj52_eY'} onLoad={() => console.log('Maps API has loaded.')}>
      <div  className="fixed h-screen inset-0">
            <Component {...pageProps} />
            <Nav/>
      </div>
    </APIProvider>
  );
}

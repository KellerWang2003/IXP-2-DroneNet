import "@/styles/globals.css";
import Nav from "@/components/buttom_nav";

export default function App({ Component, pageProps }) {
  return (
    <div  className="fixed h-screen inset-0">
          <Component {...pageProps} />
          <Nav/>
    </div>
  );
}

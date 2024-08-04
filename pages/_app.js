import "@/styles/globals.css";
import Nav from "@/components/buttom_nav";
import { IdProvider } from "../context/idContext";

export default function App({ Component, pageProps }) {
  return (
    <IdProvider>
      <div className="fixed h-screen inset-0 no-scrollbar">
        <Component {...pageProps} />
        <Nav />
      </div>
    </IdProvider>
  );
}

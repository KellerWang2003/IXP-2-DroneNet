import "@/styles/globals.css";
import Nav from "@/components/buttom_nav";
import { IdProvider } from "./idContext";

export default function App({ Component, pageProps }) {
  return (
    <IdProvider>
      <div className="fixed h-screen inset-0">
        <Component {...pageProps} />
        <Nav />
      </div>
    </IdProvider>
  );
}

import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  // Hide navbar on a particular page
  if (router.pathname === "/" || router.pathname === "/Hospital") {
    return <Component {...pageProps} />;
  }

  // Render navbar on all other pages
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

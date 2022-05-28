import "../styles/globals.css";
import type { AppProps } from "next/app";
import useLocalStorage from "../hooks/useLocalStorage";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "@material/react-button/dist/button.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useLocalStorage("theme", dark);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  useEffect(() => {
    setIsMounted(true);
  }, [setTheme, theme]);

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      {isMounted && <Component {...pageProps} />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme={theme.title === "light" ? "light" : "dark"}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  );
}

export default MyApp;

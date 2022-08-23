import type { AppProps } from "next/app";
import { defaultTheme, Provider, SSRProvider } from "@adobe/react-spectrum";
import MainLayout from "../components/MainLayout";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Provider theme={defaultTheme}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </SSRProvider>
  );
}

export default MyApp;

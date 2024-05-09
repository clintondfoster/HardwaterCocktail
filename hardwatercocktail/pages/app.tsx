import type { AppProps } from "next/app";
import RootLayout from "./RootLayout";
import "./globals.css";


function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <div className="App">
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
    </div>
  </>
  );
}

export default App;

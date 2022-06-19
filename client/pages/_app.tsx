import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { ApolloProvider } from "@apollo/client";
import { client } from "../service/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;

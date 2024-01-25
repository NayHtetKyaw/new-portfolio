import { Theme, Container } from "@radix-ui/themes";
import "../styles/globals.css";
import { AppProps } from "next/app";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <Theme appearance="dark" accentColor="blue" grayColor="sand">
      <Container>
        <Component {...pageProps} />
      </Container>
    </Theme>
  );
}

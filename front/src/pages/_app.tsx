import "@/styles/globals.css";
import type { AppProps } from "next/app";
if (process.env.NODE_ENV === "development") {
  if (typeof window === "undefined") {
    import("./../mocks/server").then(({ server }) => {
      server.listen({ onUnhandledRequest: "bypass" });
    });
  } else {
    import("./../mocks/browser").then(({ worker }) => {
      worker.start({ onUnhandledRequest: "bypass" });
    });
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

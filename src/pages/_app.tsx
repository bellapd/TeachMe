// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

import { ClerkProvider } from "@clerk/nextjs";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
const clerk_pub_key = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider
    publishableKey={clerk_pub_key}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

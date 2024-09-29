import { AppProps } from "next/app";
import Script from "next/script";
import { useEffect, useRef } from "react";

function usePrevious(value: string) {
  let ref = useRef<string>();

  useEffect(() => {
      ref.current = value;
  }, [value]);

  return ref.current;
}

export default function App({ Component, pageProps, router }: AppProps) {
  let previousPathname = usePrevious(router.pathname);

  return (
      <>
          <Script
              id="my-scriptGA-1"
              strategy="lazyOnload"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />

          <Script id="my-scriptGA-2" strategy="lazyOnload">
              {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
              page_path: window.location.pathname,
              });
              `}
          </Script>
      </>
  );
}
import Script from "next/script";

export default function App() {
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
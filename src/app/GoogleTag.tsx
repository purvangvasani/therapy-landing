// components/GoogleTag.js
import Script from 'next/script';

const GoogleTag = () => (
  <>
    {/* Load gtag.js script */}
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=AW-17252260215"
      strategy="afterInteractive"
    />
    
    {/* Initialize gtag */}
    <Script id="gtag-init" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-17252260215');
      `}
    </Script>
  </>
);

export default GoogleTag;

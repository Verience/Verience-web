import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  getGtmId,
  getMetaPixelId,
  isProduction,
  pushToDataLayer,
  trackPageView,
} from '../../lib/analytics';

function isGtmLoaded() {
  return Boolean(document.querySelector('script[src*="googletagmanager.com/gtm.js"]'));
}

function injectGtm(gtmId) {
  if (isGtmLoaded() || document.getElementById('gtm-script')) return;

  pushToDataLayer({ 'gtm.start': Date.now(), event: 'gtm.js' });

  const script = document.createElement('script');
  script.id = 'gtm-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.appendChild(script);

  if (document.getElementById('gtm-noscript')) return;

  const noscript = document.createElement('noscript');
  noscript.id = 'gtm-noscript';
  noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
  document.body.prepend(noscript);
}

function injectMetaPixel(pixelId) {
  if (typeof window.fbq === 'function' || document.getElementById('meta-pixel-script')) return;

  const initSnippet = `
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${pixelId}');
    fbq('track', 'PageView');
  `;

  const script = document.createElement('script');
  script.id = 'meta-pixel-script';
  script.textContent = initSnippet;
  document.head.appendChild(script);

  if (document.getElementById('meta-pixel-noscript')) return;

  const noscript = document.createElement('noscript');
  noscript.id = 'meta-pixel-noscript';
  noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1" alt="" />`;
  document.body.appendChild(noscript);
}

/**
 * Loads GTM (configure GA4 + Meta Pixel tags inside GTM when possible).
 * Optional VITE_META_PIXEL_ID loads Meta Pixel directly in production only.
 */
export default function Analytics() {
  const { pathname } = useLocation();
  const initialized = useRef(false);

  useEffect(() => {
    if (!isProduction()) return;

    const gtmId = getGtmId();
    const pixelId = getMetaPixelId();

    if (!initialized.current) {
      if (gtmId && !isGtmLoaded()) injectGtm(gtmId);
      if (pixelId) injectMetaPixel(pixelId);
      initialized.current = true;
    }

    if (isGtmLoaded() || gtmId) {
      trackPageView(pathname);
    }
  }, [pathname]);

  return null;
}

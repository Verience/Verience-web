/** Analytics IDs from environment — never hardcode in components. */

export function isProduction() {
  return import.meta.env.PROD;
}

export function getGtmId() {
  const id = import.meta.env.VITE_GTM_ID?.trim();
  return id || null;
}

/** Optional: load Meta Pixel directly when not configured inside GTM. */
export function getMetaPixelId() {
  const id = import.meta.env.VITE_META_PIXEL_ID?.trim();
  return id || null;
}

export function pushToDataLayer(event) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

export function trackPageView(path) {
  pushToDataLayer({
    event: 'page_view',
    page_path: path,
    page_location: `${window.location.origin}${path}`,
    page_title: document.title,
  });
}

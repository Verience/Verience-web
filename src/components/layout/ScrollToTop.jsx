import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

let lenisInstance = null;

export function setLenisInstance(lenis) {
  lenisInstance = lenis;
}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

import { useEffect } from 'react';

/**
 * Fades elements in as they enter the viewport. Observes any element
 * carrying a `data-reveal` attribute and flips `data-revealed` on it once.
 */
const useReveal = (): void => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const reveal = (element: Element) => element.setAttribute('data-revealed', 'true');

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll('[data-reveal]').forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal(entry.target);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    );

    document
      .querySelectorAll('[data-reveal]:not([data-revealed])')
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
};

export default useReveal;

import React from 'react';

/** X (formerly Twitter) — lucide-react has no current mark, so hand-rolled. */
export const XIcon: React.FC<{ size?: number }> = ({ size = 15 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path
      fill="currentColor"
      d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
    />
  </svg>
);

/** Bluesky butterfly mark. */
export const BlueskyIcon: React.FC<{ size?: number }> = ({ size = 17 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      fill="currentColor"
      d="M12 10.8C10.85 8.6 7.8 4.5 5 2.6 2.3.8 1.3 1.1.6 1.5c-.8.4-1 1.7-1 2.5 0 .8.4 6.6.7 7.6.9 3.1 4.2 4.2 7.2 3.8-4.3.6-8.2 2.2-3.1 7.9 5.6 5.7 7.7-1.2 8.6-4.3.9 3.1 2.4 9.7 8.5 4.3 4.8-4.3 1.5-7.3-2.8-7.9 3 .4 6.3-.7 7.2-3.8.3-1 .7-6.8.7-7.6 0-.8-.2-2.1-1-2.5-.7-.4-1.7-.7-4.4 1.1-2.8 1.9-5.9 6-7 8.2Z"
    />
  </svg>
);

/** Small "external link" arrow — matches the mark used on footnote links. */
export const ExternalArrow: React.FC<{ size?: number }> = ({ size = 10 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      fill="currentColor"
      d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"
    />
  </svg>
);

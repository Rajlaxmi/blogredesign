import React from 'react';

/** Renders `**text**` segments as <b>, used for author-list self-bolding. */
const Bold: React.FC<{ text: string }> = ({ text }) => (
  <>
    {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
      part.startsWith('**') && part.endsWith('**') ? (
        <b key={i} className="text-fg">
          {part.slice(2, -2)}
        </b>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      ),
    )}
  </>
);

export default Bold;

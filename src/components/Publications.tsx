import React from 'react';
import Bold from './Bold';
import { ExternalArrow } from './icons';
import { publications } from '../content/publications';

const Publications: React.FC = () => (
  <ol className="mt-10 flex flex-col gap-8">
    {publications.map((pub, i) => (
      <li
        key={pub.title}
        className="max-w-measure border-t border-rule pt-6 first:border-t-0 first:pt-0"
        data-reveal
        style={{ '--reveal-delay': `${Math.min(i, 4) * 60}ms` } as React.CSSProperties}
      >
        <p className="text-[0.95rem] leading-snug text-fg">{pub.title}</p>
        <p className="mt-2 text-[0.85rem] text-muted">
          <Bold text={pub.authors} />
        </p>
        <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.8rem]">
          <span className="text-faint">{pub.venue}</span>
          {pub.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footnote-link text-[0.8rem]"
            >
              {link.label}
              <ExternalArrow size={9} />
            </a>
          ))}
        </p>
      </li>
    ))}
  </ol>
);

export default Publications;

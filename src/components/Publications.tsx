import React from 'react';
import Bold from './Bold';
import { ExternalArrow } from './icons';
import { asset } from '../lib/asset';
import { publications } from '../content/publications';

const Publications: React.FC = () => (
  <ol className="mt-10 flex flex-col gap-8">
    {publications.map((pub) => (
      <li
        key={pub.title}
        className="max-w-measure border-t border-rule pt-6 first:border-t-0 first:pt-0"
      >
        <p className="text-sm leading-snug text-fg">{pub.title}</p>
        <p className="mt-2 text-xs text-muted">
          <Bold text={pub.authors} />
        </p>
        <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
          <span className="text-faint">{pub.venue}</span>
          {pub.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footnote-link text-xs"
            >
              {link.label}
              <ExternalArrow size={9} />
            </a>
          ))}
        </p>
        {pub.image && (
          <img
            src={asset(pub.image)}
            alt={`Figure from "${pub.title}"`}
            className="mt-4 w-full border border-rule object-cover"
          />
        )}
      </li>
    ))}
  </ol>
);

export default Publications;

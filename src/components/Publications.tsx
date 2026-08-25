import React from 'react';
import Bold from './Bold';
import { ExternalArrow } from './icons';
import { publications } from '../content/publications';

const Publications: React.FC = () => (
  <ol className="mt-10 flex flex-col gap-8">
    {publications.map((pub, i) => {
      const details = (
        <div>
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
        </div>
      );

      return (
        <li
          key={pub.title}
          className={`border-t border-rule pt-6 first:border-t-0 first:pt-0 ${
            pub.image ? 'max-w-3xl' : 'max-w-measure'
          }`}
          data-reveal
          style={{ '--reveal-delay': `${Math.min(i, 4) * 60}ms` } as React.CSSProperties}
        >
          {pub.image ? (
            <div className="grid gap-6 sm:grid-cols-[1fr_14rem] sm:items-center">
              {details}
              <img
                src={pub.image}
                alt={`Figure from "${pub.title}"`}
                className="w-full border border-rule object-cover"
              />
            </div>
          ) : (
            details
          )}
        </li>
      );
    })}
  </ol>
);

export default Publications;

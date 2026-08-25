import React from 'react';
import { ExternalArrow } from './icons';
import { research } from '../content/research';

const Research: React.FC = () => (
  <div className="mt-10 flex flex-col gap-12">
    {research.map((item) => {
      const details = (
        <div>
          <h2 className="text-sm font-semibold text-fg">{item.title}</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-rule px-2.5 py-0.5 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">{item.description}</p>
          <ol className="mt-4 flex flex-col gap-4">
            {item.links.map((link, linkIndex) => (
              <li key={link.url} className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-xs text-faint">{linkIndex + 1}.</span>
                <div>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footnote-link text-sm"
                  >
                    {link.label}
                    <ExternalArrow size={9} />
                  </a>
                  {link.note && (
                    <p className="mt-1 text-xs leading-relaxed text-muted">{link.note}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      );

      return (
        <div
          key={item.title}
          className={`border-t border-rule pt-8 first:border-t-0 first:pt-0 ${
            item.image ? '' : 'max-w-measure'
          }`}
        >
          {item.image ? (
            <div className="grid gap-10 sm:grid-cols-[38rem_1fr] sm:gap-20 sm:items-start">
              {details}
              <img
                src={item.image}
                alt={`Illustration for "${item.title}"`}
                className="w-4/5 object-cover"
              />
            </div>
          ) : (
            details
          )}
        </div>
      );
    })}
  </div>
);

export default Research;

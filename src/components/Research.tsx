import React from 'react';
import Section from './Section';
import { ExternalArrow } from './icons';
import { research } from '../content/research';

const Research: React.FC = () => (
  <Section
    id="research"
    index="03"
    label="research"
    lead="Current research directions."
  >
    <div className="mt-8 flex flex-col gap-12">
      {research.map((item, i) => (
        <div
          key={item.title}
          className="max-w-measure"
          data-reveal
          style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
        >
          <h3 className="text-[1rem] font-medium text-fg">{item.title}</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-rule px-2.5 py-0.5 text-[0.7rem] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-4 text-[0.9rem] leading-relaxed text-muted">{item.description}</p>
          <ol className="mt-4 flex flex-col gap-4">
            {item.links.map((link, linkIndex) => (
              <li key={link.url} className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-[0.8rem] text-faint">{linkIndex + 1}.</span>
                <div>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footnote-link text-[0.85rem]"
                  >
                    {link.label}
                    <ExternalArrow size={9} />
                  </a>
                  {link.note && (
                    <p className="mt-1 text-[0.85rem] leading-relaxed text-muted">{link.note}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  </Section>
);

export default Research;

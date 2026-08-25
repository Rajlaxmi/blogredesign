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
          <ul className="mt-4 flex flex-col gap-1.5">
            {item.links.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footnote-link text-[0.82rem]"
                >
                  {link.label}
                  <ExternalArrow size={9} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

export default Research;

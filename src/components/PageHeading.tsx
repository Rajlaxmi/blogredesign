import React from 'react';

interface PageHeadingProps {
  title: string;
  lead?: string;
  children: React.ReactNode;
}

/**
 * Shared shell for the routed pages: big serif title, optional lead line,
 * then a flat content column — no sticky rail, no cards. Mirrors the
 * title-plus-list layout daivikpatel.me uses for its own subpages.
 */
const PageHeading: React.FC<PageHeadingProps> = ({ title, lead, children }) => (
  <section className="mx-auto max-w-page px-6 sm:px-10">
    <div className="max-w-2xl pb-24 pt-28 sm:pt-36">
      <h1 className="font-serif text-display font-normal text-fg" data-reveal>
        {title}
      </h1>
      {lead && (
        <p className="mt-4 max-w-measure text-sm leading-relaxed text-muted" data-reveal>
          {lead}
        </p>
      )}
      {children}
    </div>
  </section>
);

export default PageHeading;

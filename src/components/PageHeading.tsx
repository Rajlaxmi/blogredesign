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
 *
 * Only the title/lead are held to reading width; children get the full
 * page width to work with, so a wide item (e.g. a two-column entry with
 * an image) isn't silently clipped by this wrapper.
 */
const PageHeading: React.FC<PageHeadingProps> = ({ title, lead, children }) => (
  <section className="mx-auto max-w-page px-6 sm:px-10">
    <div className="pb-24 pt-28 sm:pt-36">
      <div className="max-w-2xl">
        <h1 className="font-serif text-display font-normal text-fg">{title}</h1>
        {lead && (
          <p className="mt-4 max-w-measure text-sm leading-relaxed text-muted">{lead}</p>
        )}
      </div>
      {children}
    </div>
  </section>
);

export default PageHeading;

import React from 'react';

interface SectionProps {
  id: string;
  label: string;
  index: string;
  lead?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/**
 * Structural unit: a sticky counter/label rail on the left, content column
 * on the right, separated by a single hairline — no cards, no shadows.
 */
const Section: React.FC<SectionProps> = ({ id, label, index, lead, children, className = '' }) => (
  <section id={id} className={`border-t border-rule ${className}`}>
    <div className="mx-auto max-w-page px-6 sm:px-10">
      <div className="grid gap-8 py-16 md:grid-cols-[7rem_minmax(0,1fr)] md:gap-14 md:py-24 lg:grid-cols-[11rem_minmax(0,1fr)]">
        <div className="md:sticky md:top-28 md:self-start" data-reveal>
          <h2 className="eyebrow flex items-baseline gap-3 md:flex-col md:gap-2">
            <span className="text-faint">{index}</span>
            <span>{label}</span>
          </h2>
        </div>

        <div className="min-w-0">
          {lead && (
            <p className="max-w-measure text-[1rem] leading-[1.6] text-fg" data-reveal>
              {lead}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  </section>
);

export default Section;

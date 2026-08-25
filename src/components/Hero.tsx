import React from 'react';
import SocialLinks from './SocialLinks';

/**
 * Dictionary-entry hero: name, phonetic guide, part of speech, numbered
 * definitions, then a footnotes row of social links. Mirrors the format
 * daivikpatel.me uses for its own name treatment.
 */
const Hero: React.FC = () => (
  <section id="hero" className="mx-auto max-w-page px-6 sm:px-10">
    <div className="max-w-2xl pb-16 pt-28 sm:pt-36">
      <h1 className="font-serif text-display font-normal text-fg" data-reveal>
        arna <span className="mx-1 inline-block text-faint">·</span> ghosh
      </h1>

      <p className="mb-1 mt-2 text-xs text-muted" data-reveal>
        /ˈɑːr.nə ɡoʊʃ/
      </p>
      <p className="mb-6 text-sm text-muted" data-reveal>
        noun
      </p>

      <div className="flex flex-col gap-3 text-[0.95rem] leading-relaxed text-muted" data-reveal>
        <p>
          <span className="mr-3 text-muted">1.</span>
          research scientist at{' '}
          <span className="font-medium text-fg">Google Research</span>, studying how artificial
          and biological systems learn.
        </p>
        <p>
          <span className="mr-3 text-muted">2.</span>
          PhD in computer science from{' '}
          <a
            href="https://mila.quebec/en"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-fg link"
          >
            Mila – Quebec AI Institute
          </a>{' '}
          and{' '}
          <a
            href="https://www.mcgill.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-fg link"
          >
            McGill University
          </a>
          , advised by Blake Richards; worked on neuro-inspired representation learning and
          biologically-plausible credit assignment. PhD internships at Meta on neuromotor
          interfaces.
        </p>
        <p>
          <span className="mr-3 text-muted">3.</span>
          before that: MSc at McGill on deep learning for neuroimaging, and a BTech in electrical
          engineering from{' '}
          <a
            href="http://www.iitkgp.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-fg link"
          >
            IIT Kharagpur
          </a>
          .
        </p>
        <p>
          <span className="mr-3 text-muted">4.</span>
          current philosophy: representation geometry first — it reveals how systems, artificial
          or biological, actually <b className="text-fg">learn</b>.
        </p>
      </div>

      <div className="mt-16 flex flex-wrap items-end justify-between gap-6" data-reveal>
        <div>
          <p className="mb-3 text-xs text-muted">footnotes</p>
          <SocialLinks />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

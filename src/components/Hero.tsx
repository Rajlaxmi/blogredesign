import React from 'react';

/**
 * Dictionary-entry hero: name, phonetic guide, part of speech, numbered
 * definitions, and a portrait held in the margin. Mirrors the format
 * daivikpatel.me uses for its own name treatment. Social links live in the
 * footer, not here.
 */
const Hero: React.FC = () => (
  <section id="hero" className="mx-auto max-w-page px-6 sm:px-10">
    <div className="grid gap-12 pb-16 pt-28 sm:pt-36 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16">
      <div className="max-w-2xl">
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
            , advised by{' '}
            <a
              href="https://linclab.mila.quebec/team/blake"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-fg link"
            >
              Blake Richards
            </a>
            ; focused on neuro-inspired unsupervised representation learning and
            biologically-plausible credit assignment algorithms. PhD internships at Meta,
            developing deep learning models for neuromotor interfaces.
          </p>
          <p>
            <span className="mr-3 text-muted">3.</span>
            before that: MSc at McGill, under the supervision of{' '}
            <a
              href="https://boudriaslab.com/en/team/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-fg link"
            >
              Marie-Hélène Boudrias
            </a>{' '}
            and{' '}
            <a
              href="https://www.mcgill.ca/bbme/georgios-mitsis"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-fg link"
            >
              Georgios Mitsis
            </a>
            , developing deep learning techniques to advance neuroimaging analysis; and a BTech in
            electrical engineering from{' '}
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
      </div>

      <div data-reveal style={{ '--reveal-delay': '160ms' } as React.CSSProperties}>
        <img
          src="/arna.jpg"
          alt="Arna Ghosh"
          className="aspect-[4/5] w-full max-w-[15rem] border border-rule object-cover"
        />
      </div>
    </div>
  </section>
);

export default Hero;

import React from 'react';

/** Extended bio, shown on the home page under the hero. Numbered points, no rail. */
const About: React.FC = () => (
  <ol className="mt-10 flex max-w-measure flex-col gap-4 text-[0.9rem] leading-relaxed text-muted" data-reveal>
    <li className="flex gap-3">
      <span className="mt-0.5 shrink-0 text-faint">1.</span>
      <span>
        PhD in Computer Science at{' '}
        <a href="https://mila.quebec/en" target="_blank" rel="noopener noreferrer" className="link-quiet">
          Mila-Quebec AI Institute
        </a>{' '}
        and{' '}
        <a href="https://www.mcgill.ca/" target="_blank" rel="noopener noreferrer" className="link-quiet">
          McGill University
        </a>
        , under the supervision of{' '}
        <a
          href="https://linclab.mila.quebec/team/blake"
          target="_blank"
          rel="noopener noreferrer"
          className="link-quiet"
        >
          Blake Richards
        </a>
        , focused on neuro-inspired unsupervised representation learning and biologically-plausible
        credit assignment algorithms.
      </span>
    </li>
    <li className="flex gap-3">
      <span className="mt-0.5 shrink-0 text-faint">2.</span>
      <span>PhD internships at Meta, developing deep learning models for neuromotor interfaces.</span>
    </li>
    <li className="flex gap-3">
      <span className="mt-0.5 shrink-0 text-faint">3.</span>
      <span>
        MSc, also at McGill University, under the supervision of{' '}
        <a href="https://boudriaslab.com/en/team/" target="_blank" rel="noopener noreferrer" className="link-quiet">
          Marie-Hélène Boudrias
        </a>{' '}
        and{' '}
        <a
          href="https://www.mcgill.ca/bbme/georgios-mitsis"
          target="_blank"
          rel="noopener noreferrer"
          className="link-quiet"
        >
          Georgios Mitsis
        </a>
        , developing deep learning techniques to advance neuroimaging analysis.
      </span>
    </li>
    <li className="flex gap-3">
      <span className="mt-0.5 shrink-0 text-faint">4.</span>
      <span>
        Undergraduate degree in Electrical Engineering from{' '}
        <a href="http://www.iitkgp.ac.in/" target="_blank" rel="noopener noreferrer" className="link-quiet">
          Indian Institute of Technology Kharagpur
        </a>
        .
      </span>
    </li>
  </ol>
);

export default About;

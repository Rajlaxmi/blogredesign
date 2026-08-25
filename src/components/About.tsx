import React from 'react';

/** Extended bio, shown on the home page under the hero. Flat paragraphs, no rail. */
const About: React.FC = () => (
  <div className="mt-10 flex max-w-measure flex-col gap-5 text-[0.9rem] leading-relaxed text-muted" data-reveal>
    <p>
      Previously, I completed a PhD in Computer Science at{' '}
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
      , where I focused on neuro-inspired unsupervised representation learning and
      biologically-plausible credit assignment algorithms. My PhD internships at Meta involved
      developing deep learning models for neuromotor interfaces.
    </p>
    <p>
      During my MSc, also at McGill University, under the supervision of{' '}
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
      , I developed deep learning techniques to advance neuroimaging analysis. I obtained my
      undergraduate degree in Electrical Engineering from{' '}
      <a href="http://www.iitkgp.ac.in/" target="_blank" rel="noopener noreferrer" className="link-quiet">
        Indian Institute of Technology Kharagpur
      </a>
      .
    </p>
  </div>
);

export default About;

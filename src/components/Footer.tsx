import React from 'react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => (
  <footer id="contact" className="border-t border-rule">
    <div className="mx-auto max-w-page px-6 py-12 sm:px-10">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow mb-3">get in touch</p>
          <SocialLinks />
        </div>
        <p className="eyebrow">© {new Date().getFullYear()} Arna Ghosh</p>
      </div>
    </div>
  </footer>
);

export default Footer;

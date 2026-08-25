import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { XIcon, BlueskyIcon, ExternalArrow } from './icons';
import { socials } from '../content/socials';

const ICONS: Record<string, React.FC<{ size?: number }>> = {
  github: ({ size }) => <Github size={size} />,
  linkedin: ({ size }) => <Linkedin size={size} />,
  x: XIcon,
  bluesky: BlueskyIcon,
  mail: ({ size }) => <Mail size={size} />,
};

const SocialLinks: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    {socials.map(({ label, url, icon }) => {
      const Icon = ICONS[icon];
      return (
        <a
          key={label}
          href={url}
          target={icon === 'mail' ? undefined : '_blank'}
          rel="noopener noreferrer"
          aria-label={label}
          className="footnote-link"
        >
          <Icon size={16} />
          <ExternalArrow />
        </a>
      );
    })}
  </div>
);

export default SocialLinks;

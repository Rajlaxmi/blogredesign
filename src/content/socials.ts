export interface Social {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'x' | 'bluesky' | 'mail';
}

export const socials: Social[] = [
  { label: 'GitHub', url: 'https://github.com/arnaghosh', icon: 'github' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/arna-ghosh-47852b73', icon: 'linkedin' },
  { label: 'X', url: 'https://twitter.com/arna_ghosh', icon: 'x' },
  { label: 'Bluesky', url: 'https://bsky.app/profile/arnaghosh.bsky.social', icon: 'bluesky' },
  { label: 'Email', url: 'mailto:arnag@google.com', icon: 'mail' },
];

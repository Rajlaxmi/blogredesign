import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import useTheme from '../hooks/useTheme';

const NAV_ITEMS = [
  { id: 'about', label: 'about' },
  { id: 'publications', label: 'publications' },
  { id: 'research', label: 'research' },
  { id: 'contact', label: 'contact' },
];

interface HeaderProps {
  activeSection?: string;
}

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [theme, toggleTheme] = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        isScrolled ? 'border-b border-rule bg-bg/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-page items-center justify-between px-6 py-5 sm:px-10">
        <button
          type="button"
          onClick={() => scrollTo('hero')}
          className="text-sm tracking-[0.02em] text-fg transition-colors duration-300 hover:text-muted"
        >
          arna
        </button>

        <div className="flex items-center gap-6">
          <nav className="hidden md:block" aria-label="Sections">
            <ul className="flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    aria-current={activeSection === item.id ? 'true' : undefined}
                    className={`text-[0.8rem] transition-colors duration-300 hover:text-fg ${
                      activeSection === item.id ? 'text-fg' : 'text-muted'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="text-faint transition-colors duration-300 hover:text-fg"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

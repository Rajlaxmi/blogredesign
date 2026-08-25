import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import useTheme from '../hooks/useTheme';

const NAV_ITEMS = [
  { to: '/', label: 'about' },
  { to: '/publications', label: 'publications' },
  { to: '/research', label: 'research' },
];

const Header: React.FC = () => {
  const [theme, toggleTheme] = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

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
        <Link to="/" className="text-sm tracking-[0.02em] text-fg transition-colors duration-300 hover:text-muted">
          arna
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden md:block" aria-label="Pages">
            <ul className="flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    aria-current={pathname === item.to ? 'page' : undefined}
                    className={`text-sm transition-colors duration-300 hover:text-fg ${
                      pathname === item.to ? 'text-fg' : 'text-muted'
                    }`}
                  >
                    {item.label}
                  </Link>
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

import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import useReveal from '../hooks/useReveal';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useReveal();

  // Each page mounts a fresh Layout, so this doubles as scroll-to-top on nav.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

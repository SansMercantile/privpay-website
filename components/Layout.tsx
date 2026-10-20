import React from 'react';
import Link from 'next/link';
import { BUSINESS_CTA, PRIV_CORE, PRIV_HUB, PRESS_HUB, CONTACT } from '@/lib/site';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-nexus-dark text-white flex flex-col">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-nexus-dark/80 border-b border-nexus-gold/20">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-xl font-bold tracking-wide">
              <span className="text-white">Priv</span>
              <span className="text-nexus-gold">Pay</span>
            </span>
            <span className="hidden sm:inline text-xs uppercase tracking-[0.3em] text-nexus-gray-400 group-hover:text-nexus-gold transition-colors">
              Sans Mercantile
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <a
              href={PRIV_HUB}
              className="hidden sm:inline text-sm text-nexus-gray-300 hover:text-white transition-colors"
            >
              The Priv system
            </a>
            <a
              href={BUSINESS_CTA}
              className="px-5 py-2 rounded-xl bg-nexus-gold text-black text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Talk to us
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-28">{children}</main>

      <footer className="border-t border-nexus-accent/20 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-nexus-gray-400">
          <p>
            © {new Date().getFullYear()} Sans Mercantile. PrivPay is a{' '}
            <a href={PRIV_HUB} className="text-nexus-gold hover:text-nexus-accent transition-colors">
              Priv
            </a>{' '}
            product.
          </p>
          <nav className="flex flex-wrap justify-center gap-6">
            <a href={PRIV_HUB} className="hover:text-white transition-colors">
              Priv
            </a>
            <a href={PRIV_CORE} className="hover:text-white transition-colors">
              Priv Core
            </a>
            <a href={PRESS_HUB} className="hover:text-white transition-colors">
              Press
            </a>
            <a href={CONTACT} className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

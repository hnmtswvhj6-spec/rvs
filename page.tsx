'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-ivory/95 backdrop-blur-sm border-b border-taupe shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-max flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className={`font-serif text-xl tracking-wide transition-colors ${
            scrolled || !isHome ? 'text-brown-deep' : isHome ? 'text-ivory' : 'text-brown-deep'
          }`}
        >
          Rose Vale Studio
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`label transition-colors ${
                  pathname === href ? 'text-brown-deep' : 'text-umber hover:text-brown-deep'
                } ${scrolled || !isHome ? '' : isHome ? '!text-ivory/80 hover:!text-ivory' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className={`btn-primary text-xs py-2.5 px-6 ${
                !scrolled && isHome ? '!bg-ivory !text-brown-deep hover:!bg-taupe' : ''
              }`}
            >
              Start a Project
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-2 ${
            scrolled || !isHome ? 'text-brown-deep' : 'text-ivory'
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-current transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden bg-ivory border-t border-taupe overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="container-max py-6 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="label text-brown-deep"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link href="/contact" className="btn-primary text-xs py-2.5 px-6 w-full text-center" onClick={() => setOpen(false)}>
              Start a Project
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

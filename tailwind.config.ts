import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brown-deep text-ivory/70">
      <div className="container-max py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-b border-ivory/10 pb-12 mb-10">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl text-ivory mb-3">Rose Vale Studio</p>
            <p className="text-sm leading-relaxed text-ivory/60 max-w-xs">
              Nature-inspired murals and fine art for meaningful spaces. Edmonton, Alberta.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="label text-ivory/40 mb-5">Navigate</p>
            <ul className="space-y-3">
              {['Portfolio', 'Services', 'Process', 'About', 'Contact'].map(page => (
                <li key={page}>
                  <Link
                    href={`/${page.toLowerCase()}`}
                    className="text-sm text-ivory/60 hover:text-ivory transition-colors"
                  >
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label text-ivory/40 mb-5">Get in Touch</p>
            <div className="space-y-3 text-sm text-ivory/60">
              <p>
                <a href="mailto:studiorosevale@gmail.com" className="hover:text-ivory transition-colors">
                  studiorosevale@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:5879893073" className="hover:text-ivory transition-colors">
                  587-989-3073
                </a>
              </p>
              <p>Edmonton, Alberta</p>
              <div className="pt-2">
                <a
                  href="https://instagram.com/" {/* TODO: Replace with your Instagram handle */}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ivory/60 hover:text-ivory transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-ivory/30">
          <p>© {new Date().getFullYear()} Rose Vale Studio. All rights reserved.</p>
          <p>Kaitlyn Riesen — Fine Art · Murals · Commissions</p>
        </div>
      </div>
    </footer>
  );
}

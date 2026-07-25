import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import SMPLLogo from './Logo.jsx';

const navItems = [
  ['/', 'Home'],
  ['/mro', 'MRO'],
  ['/government-supply', 'Government Supply'],
  ['/construction-materials', 'Construction Materials'],
  ['/about', 'About Us'],
  // ['/career', 'Career'],
  // ['/contact', 'Contact Us'],
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <NavLink to="/" className="shrink-0 transition-transform duration-300 hover:scale-105">
          <SMPLLogo variant="dark" />
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `group relative rounded-lg px-3 py-2 text-[14px] font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-brand'
                    : 'text-slate-600 hover:text-navy-900'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{label}</span>
                  {/* animated underline */}
                  <span
                    className={`pointer-events-none absolute inset-x-3 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-brand transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                      isActive ? 'scale-x-100' : ''
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/30 active:translate-y-0"
          >
            Get in Touch
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 transition-colors duration-300 hover:bg-slate-100 lg:hidden"
          aria-label="Toggle menu"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-5 bg-current transition-all duration-300 ${
                mobileOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 bg-current transition-opacity duration-200 ${
                mobileOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-[2px] w-5 bg-current transition-all duration-300 ${
                mobileOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 ease-in-out lg:hidden ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {navItems.map(([path, label], i) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              onClick={() => setMobileOpen(false)}
              style={{ transitionDelay: mobileOpen ? `${i * 40}ms` : '0ms' }}
              className={({ isActive }) =>
                `translate-y-0 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-brand/5 text-brand'
                    : 'text-slate-600 hover:translate-x-1 hover:bg-slate-50'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-dark active:scale-95"
          >
            Get in Touch
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}

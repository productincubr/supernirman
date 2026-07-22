import { Link } from 'react-router-dom';
import SMPLLogo from './Logo.jsx';

const links = [
  ['/', 'Home'],
  ['/mro', 'MRO'],
  ['/government-supply', 'Government Supply'],
  ['/construction-materials', 'Construction Materials'],
  ['/about', 'About Us'],
  ['/career', 'Career'],
  // ['/contact', 'Contact Us'],
];

export default function SiteFooter() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Top row: Logo + Nav */}
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <SMPLLogo variant="light" />
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map(([path, label]) => (
              <Link
                key={path}
                to={path}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10" />

        {/* Copyright */}
        <p className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Supernirman Materials Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

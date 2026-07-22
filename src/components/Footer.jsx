import { useState } from 'react';
import { Link } from 'react-router-dom';
import SMPLLogo from './Logo.jsx';

const quickLinks = [
  ['/about', 'About Us'],
  ['/mro', 'Products'],
  ['/career', 'Careers'],
  ['/contact', 'Contact Us'],
  ['/privacy', 'Privacy Policy'],
];

const navLinks = [
  ['/', 'Home'],
  ['/mro', 'MRO'],
  ['/government-supply', 'Government Supply'],
  ['/construction-materials', 'Construction Materials'],
  ['/about', 'About Us'],
  ['/career', 'Career'],
];

export default function SiteFooter() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <footer className="bg-navy-900 text-slate-300">
      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1.5fr_1.3fr]">

          {/* Column 1 — Logo + Quick Links */}
          <div>
            <SMPLLogo variant="light" />
            <h4 className="mb-4 mt-8 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2.5">
              {quickLinks.map(([path, label]) => (
                <Link
                  key={path}
                  to={path}
                  className="w-fit text-sm text-slate-400 transition-colors hover:text-brand"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 2 — Contact Information */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Contact Information
            </h4>

            <div className="flex gap-3">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <svg className="h-4 w-4 text-brand" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Supernirman Materials Pvt. Ltd. (Formerly known as Creditopedia Finance Pvt. Ltd.)
                501, Veritas Business Suites, Sector 53, Gurgaon 122002, Haryana
              </p>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <svg className="h-4 w-4 text-brand" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <a href="mailto:info@crefin.co.in" className="text-sm text-slate-400 transition-colors hover:text-brand">
                info@crefin.co.in
              </a>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <svg className="h-4 w-4 text-brand" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <a href="tel:+919999999999" className="text-sm text-slate-400 transition-colors hover:text-brand">
                +91 99999 99999
              </a>
            </div>
          </div>

          {/* Column 3 — Get in Touch form */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Get in Touch!
            </h4>

            {submitted ? (
              <div className="flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                Message sent successfully!
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="3"
                  value={form.message}
                  onChange={handleChange}
                  className="resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
                />
                <button
                  onClick={handleSubmit}
                  className="mt-1 rounded-lg bg-brand px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Nav links row */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map(([path, label]) => (
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
      </div>

      {/* Copyright + WhatsApp */}
      {/* <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Supernirman Materials Pvt. Ltd. All Rights Reserved.
          </p> */}
          {/* <a
            href="https://wa.me/9199104 57575"
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
            aria-label="Chat on WhatsApp"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
          </a> */}
        {/* </div> */}
      {/* </div> */} 
    </footer>
  );
}
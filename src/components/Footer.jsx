import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SMPLLogo from './Logo.jsx';

const footerNavLinks = [
  ['/', 'Home'],
  ['/mro', 'MRO'],
  ['/government-supply', 'Government Supply'],
  ['/construction-materials', 'Construction Materials'],
  ['/about', 'About Us'],
  // ['/contact', 'Contact Us'],
];

/* ──────────────────────────────────────────────
   BRAND / CLIENT LOGOS DATA
   ────────────────────────────────────────────── */
const brandLogos = [
  { name: 'Gallant',   src: 'https://s3.ap-south-1.amazonaws.com/crefinprod/brand/090ce51cbd_1763441713_Gallant.jpeg' },
  { name: 'Uniline',   src: 'https://s3.ap-south-1.amazonaws.com/crefinprod/brand/7a2f84f683_1765864071_Uniline.webp' },
  { name: 'Eastman',   src: 'https://s3.ap-south-1.amazonaws.com/crefinprod/brand/9aa47cc8c9_1768036894_Eastman.png' },
  { name: 'Accufine',  src: 'https://s3.ap-south-1.amazonaws.com/crefinprod/brand/e156cf0e3b_1772104133_Accufine.jpeg' },
  { name: 'Atlantis',  src: 'https://s3.ap-south-1.amazonaws.com/crefinprod/brand/a965f57f33_1773037568_Atlantis.jpeg' },
  { name: 'Oxalis Diagnostics', src: 'https://s3.ap-south-1.amazonaws.com/crefinprod/brand/932ef8cb5d_1773126728_Oxalis_Diagnostics.jpeg' },
  { name: 'Waig Solar', src: 'https://s3.ap-south-1.amazonaws.com/crefinprod/brand/e25a5c5c29_1773484236_Waig_Solar.jpeg' },
  { name: 'RR Kabel',  src: 'https://s3.ap-south-1.amazonaws.com/crefinprod/brand/5f51632acf_1773725958_RR_Kabel.png' },
  { name: 'Oneiric',   src: 'https://s3.ap-south-1.amazonaws.com/crefinprod/brand/036c0b1dcd_1773751464_Oneiric.webp' },
  { name: 'Amaron',    src: 'https://s3.ap-south-1.amazonaws.com/crefinprod/brand/9db50c722c_1780481603_Amaron.jpeg' },
];

const badgeColors = [
  'bg-blue-500/10 text-blue-300',
  'bg-amber-500/10 text-amber-300',
  'bg-emerald-500/10 text-emerald-300',
  'bg-rose-500/10 text-rose-300',
  'bg-violet-500/10 text-violet-300',
  'bg-cyan-500/10 text-cyan-300',
];
function colorForName(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return badgeColors[Math.abs(hash) % badgeColors.length];
}
function initialsOf(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

/* ──────────────────────────────────────────────
   SINGLE BRAND TILE — dark-theme version
   (glass card on navy background + graceful fallback)
   ────────────────────────────────────────────── */
function BrandLogo({ name, src }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 shadow-sm shadow-slate-100/80 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:h-20 sm:w-32">
      {!failed ? (
        <img
          src={src}
          alt={name}
          title={name}
          className="max-h-9 max-w-full object-contain opacity-90 sm:max-h-12"
          loading="eager"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex flex-col items-center gap-1">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold sm:h-9 sm:w-9 ${colorForName(
              name
            )}`}
          >
            {initialsOf(name)}
          </div>
          <span className="text-[9px] font-medium text-slate-500">{name}</span>
        </div>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────
   BRAND / CLIENT LOGO SCROLLER — smooth rAF marquee
   ────────────────────────────────────────────── */
function FooterBrandScroller() {
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  // Tripled so the reset point never shows a visible gap
  const marqueeLogos = [...brandLogos, ...brandLogos, ...brandLogos];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frameId;
    const speed = 0.5; // px per frame

    const step = () => {
      if (!pausedRef.current) {
        const setWidth = track.scrollWidth / 3;
        posRef.current -= speed;
        if (setWidth > 0 && Math.abs(posRef.current) >= setWidth) {
          posRef.current += setWidth;
        }
        track.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
      }
      frameId = requestAnimationFrame(step);
    };
    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="border-b border-slate-200/80 bg-gradient-to-br from-black via-slate-50 to-slate-100/90 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-brand">
          Trusted Partners
        </p>
        <h4 className="mt-2 text-center text-base font-semibold text-slate-800">
          Brands We Work With
        </h4>
      </div>

      <div
        className="relative mt-6 w-full overflow-hidden"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white/95 to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white/95 to-transparent sm:w-28" />

        <div
          ref={trackRef}
          className="flex w-max gap-6 sm:gap-8"
          style={{ willChange: 'transform' }}
        >
          {marqueeLogos.map((brand, i) => (
            <BrandLogo key={`${brand.name}-${i}`} name={brand.name} src={brand.src} />
          ))}
        </div>
      </div>
    </div>
  );
}

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
    <footer className="relative overflow-hidden bg-slate-200 text-slate-700 shadow-[0_-10px_35px_rgba(15,23,42,0.06)]">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.7),transparent_45%,rgba(255,255,255,0.35))]" />
      <FooterBrandScroller />

      {/* Main footer grid */}
      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1.5fr_1.3fr]">

          {/* Column 1 — Logo + Quick Links */}
          <div>
            <SMPLLogo variant="light" />
            <h4 className="mb-4 mt-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-900">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2.5">
              {footerNavLinks.map(([path, label]) => (
                <Link
                  key={path}
                  to={path}
                  className="w-fit text-sm font-medium text-slate-600 transition-all duration-300 hover:text-brand"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 2 — Contact Information */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-900">
              Contact Information
            </h4>

            <div className="flex gap-3">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <svg className="h-4 w-4 text-brand" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">
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
              <a href="mailto:info@crefin.co.in" className="text-sm text-slate-600 transition-colors hover:text-brand">
                info@crefin.co.in
              </a>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <svg className="h-4 w-4 text-brand" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <a href="tel:+919910457575" className="text-sm text-slate-600 transition-colors hover:text-brand">
                +91 99104 57575
              </a>
            </div>
          </div>

          {/* Column 3 — Get in Touch form */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-900">
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
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="3"
                  value={form.message}
                  onChange={handleChange}
                  className="resize-none rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
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
      <div className="relative border-t border-slate-200/80 bg-white/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerNavLinks.map(([path, label]) => (
              <Link
                key={path}
                to={path}
                className="text-sm font-medium text-slate-500 transition-colors hover:text-brand"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
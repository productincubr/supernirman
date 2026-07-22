import { Link } from 'react-router-dom';

/* ──────────────────────────────────────────────
   INLINE SVG ICONS
   ────────────────────────────────────────────── */
const ArrowRight = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);
const UserIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const MapPinIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
);
const ShieldCheckIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
);
const AwardIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
);
const TruckIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
);
const TargetIcon = ({ className = 'w-7 h-7' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const BuildingIcon = ({ className = 'w-7 h-7' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22V12h6v10M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01"/></svg>
);
const LandmarkIcon = ({ className = 'w-7 h-7' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/><line x1="2" y1="18" x2="22" y2="18"/></svg>
);
const CheckCircleIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
);
const PackageIcon = ({ className = 'w-8 h-8' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="m16.5 9.4-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
);
const GlobeIcon = ({ className = 'w-8 h-8' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);

/* ──────────────────────────────────────────────
   INDUSTRY ICONS (for "Industries We Serve")
   ────────────────────────────────────────────── */
const OilIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M6 20V4l6 4 6-4v16"/><path d="M6 12h12"/><path d="M6 16h12"/></svg>
);
const BoltIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const RoadIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 22 2 2h20l-2 20H4z"/><path d="M12 6v2M12 12v2M12 18v2"/></svg>
);
const FactoryIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M2 20h20"/><path d="M5 20V8l5 4V8l5 4V4h4a1 1 0 0 1 1 1v15"/><path d="M8 16h.01M12 16h.01M16 16h.01"/></svg>
);
const GovtIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 21h18M3 10h18M5 6l7-3 7 3"/><path d="M4 10v11M20 10v11M8 10v11M12 10v11M16 10v11"/></svg>
);
const MoreDotsIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="19" cy="12" r="1.5" fill="currentColor"/></svg>
);

/* ──────────────────────────────────────────────
   HERO BACKGROUND — Construction Building SVG
   ────────────────────────────────────────────── */
function BuildingIllustration() {
  return (
    <svg
      viewBox="0 0 700 600"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute right-0 top-0 h-full w-[65%] object-cover opacity-60"
      preserveAspectRatio="xMaxYMid slice"
    >
      <defs>
        <linearGradient id="fadeLeft" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0B1A2F" stopOpacity="1" />
          <stop offset="30%" stopColor="#0B1A2F" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#0B1A2F" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="steelGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B6B9F" />
          <stop offset="100%" stopColor="#1A3D5E" />
        </linearGradient>
        <linearGradient id="glassGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A5F8F" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1A3A5F" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0D2240" />
          <stop offset="50%" stopColor="#0F2D50" />
          <stop offset="100%" stopColor="#0B1A2F" />
        </linearGradient>
      </defs>

      {/* Sky background */}
      <rect width="700" height="600" fill="url(#skyGrad)" />

      {/* Ambient glow */}
      <ellipse cx="400" cy="350" rx="250" ry="200" fill="#1A4070" opacity="0.3" />
      <ellipse cx="500" cy="300" rx="150" ry="120" fill="#2563EB" opacity="0.08" />

      {/* ─── BUILDING 1 (main, center-right) ─── */}
      {/* Floor beams */}
      {[120, 190, 260, 330, 400, 470, 540].map((y) => (
        <rect key={`f1-${y}`} x="250" y={y} width="300" height="4" fill="#2A4A6A" opacity="0.9" />
      ))}
      {/* Vertical columns */}
      {[250, 310, 370, 430, 490, 550].map((x) => (
        <rect key={`c1-${x}`} x={x} y="120" width="6" height="480" fill="url(#steelGrad)" opacity="0.85" />
      ))}
      {/* Glass panels */}
      {[120, 190, 260, 330, 400, 470].map((y) =>
        [250, 310, 370, 430, 490].map((x) => (
          <rect key={`g-${x}-${y}`} x={x + 8} y={y + 6} width={52} height={60} fill="url(#glassGrad)" rx="1" />
        ))
      )}
      {/* Light reflections on glass */}
      {[200, 270, 340, 410].map((y) =>
        [260, 380, 500].map((x) => (
          <rect key={`r-${x}-${y}`} x={x} y={y} width="2" height="40" fill="#5A9AD5" opacity="0.3" />
        ))
      )}

      {/* ─── BUILDING 2 (far right, taller) ─── */}
      {[80, 150, 220, 290, 360, 430, 500, 570].map((y) => (
        <rect key={`f2-${y}`} x="570" y={y} width="130" height="3" fill="#1E3A5A" opacity="0.7" />
      ))}
      {[570, 610, 650, 700].map((x) => (
        <rect key={`c2-${x}`} x={x} y="80" width="5" height="520" fill="#1E3A5A" opacity="0.6" />
      ))}
      {[80, 150, 220, 290, 360, 430, 500].map((y) =>
        [570, 610, 650].map((x) => (
          <rect key={`g2-${x}-${y}`} x={x + 6} y={y + 5} width={33} height={60} fill="#1A3050" opacity="0.4" rx="1" />
        ))
      )}

      {/* ─── CRANE ─── */}
      <rect x="300" y="20" width="5" height="110" fill="#3A6A9A" opacity="0.7" />
      <rect x="250" y="22" width="150" height="3" fill="#3A6A9A" opacity="0.7" />
      <rect x="305" y="22" width="2" height="0" fill="#3A6A9A" opacity="0" />
      {/* crane cable */}
      <line x1="380" y1="25" x2="380" y2="95" stroke="#4A8AC0" strokeWidth="1" opacity="0.5" />
      <line x1="260" y1="25" x2="300" y2="60" stroke="#4A8AC0" strokeWidth="1" opacity="0.4" />
      {/* crane hook */}
      <rect x="376" y="90" width="8" height="12" fill="#4A8AC0" opacity="0.5" rx="1" />

      {/* ─── BUILDING 3 (left, shorter) ─── */}
      {[300, 370, 440, 510].map((y) => (
        <rect key={`f3-${y}`} x="150" y={y} width="120" height="3" fill="#1A3050" opacity="0.5" />
      ))}
      {[150, 190, 230, 270].map((x) => (
        <rect key={`c3-${x}`} x={x} y="300" width="4" height="300" fill="#1A3050" opacity="0.5" />
      ))}

      {/* Ground level */}
      <rect x="0" y="590" width="700" height="10" fill="#0B1A2F" />

      {/* Warm light spots (windows lit) */}
      <rect x="320" y="480" width="8" height="12" fill="#D4A843" opacity="0.4" rx="1" />
      <rect x="440" y="345" width="8" height="12" fill="#D4A843" opacity="0.3" rx="1" />
      <rect x="500" y="415" width="8" height="12" fill="#D4A843" opacity="0.25" rx="1" />

      {/* Fade overlay from left */}
      <rect width="700" height="600" fill="url(#fadeLeft)" />
    </svg>
  );
}

/* ──────────────────────────────────────────────
   SECTION 1 — HERO
   ────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy-900" style={{ minHeight: '560px' }}>
      <BuildingIllustration />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-32 pt-16 md:pt-20 lg:pb-36">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Supernirman Materials Private Limited
        </p>

        <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.15] text-white md:text-5xl lg:text-[3.4rem]">
          Trusted Industrial,{' '}
          <br className="hidden sm:block" />
          Construction{' '}
          <span className="text-brand">&amp;</span>
          <br className="hidden sm:block" />{' '}
          <span className="text-brand">Government</span> Supply
          <br className="hidden sm:block" />{' '}
          Partner Across India
        </h1>

        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-400">
          Delivering reliable products and procurement
          solutions that build progress and power industries.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/mro"
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Explore Solutions
            <ArrowRight />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5"
          >
            Talk to an Expert
            <UserIcon />
          </Link>
        </div>
      </div>

      {/* Stats bar — floating at the bottom edge */}
      {/* <div className="relative z-10 mx-auto -mb-16 max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl md:grid-cols-4">
          {[
            { icon: <MapPinIcon className="w-6 h-6 text-brand" />, title: 'Pan India', sub: 'Supply Network' },
            { icon: <ShieldCheckIcon className="w-6 h-6 text-brand" />, title: 'Trusted by', sub: 'Public & Private Sector' },
            { icon: <AwardIcon className="w-6 h-6 text-brand" />, title: 'Quality Assured', sub: 'Products & Process' },
            { icon: <TruckIcon className="w-6 h-6 text-brand" />, title: 'Timely Delivery', sub: 'Nationwide' },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-3 px-5 py-5 md:px-6 md:py-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/5">
                {item.icon}
              </div>
              <div>
                <div className="text-sm font-bold text-navy-900">{item.title}</div>
                <div className="text-xs text-slate-500">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}

/* ──────────────────────────────────────────────
   SECTION 2 — WHAT WE DO
   ────────────────────────────────────────────── */
function WhatWeDoSection() {
  const services = [
    {
      icon: <TargetIcon className="w-7 h-7 text-brand" />,
      title: 'MRO',
      desc: 'Wide range of Maintenance, Repair & Operations products for every industrial need.',
      link: '/mro',
      linkText: 'Explore MRO',
    },
    {
      icon: <BuildingIcon className="w-7 h-7 text-brand" />,
      title: 'Construction Materials',
      desc: 'High-quality construction materials for every structure and project.',
      link: '/construction-materials',
      linkText: 'View Products',
    },
    {
      icon: <LandmarkIcon className="w-7 h-7 text-brand" />,
      title: 'Government Supply',
      desc: 'Authorized supplier for government departments and public sector undertakings.',
      link: '/government-supply',
      linkText: 'Learn More',
    },
  ];

  return (
    <section className="bg-white pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          {/* Left */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-navy-900 md:text-4xl">
              End-to-End Supply
              <br />
              Solutions{' '}
              <span className="text-brand">You Can Trust</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              We cater to diverse industries and government
              bodies with a comprehensive range of products
              and reliable procurement services.
            </p>
          </div>

          {/* Right — 3 cards */}
          <div className="grid gap-5 sm:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="flex flex-col rounded-2xl border border-slate-100 bg-slate-50/60 p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/5">
                  {s.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{s.desc}</p>
                <Link
                  to={s.link}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
                >
                  {s.linkText}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SECTION 3 — INDUSTRIES WE SERVE
   ────────────────────────────────────────────── */
function IndustriesSection() {
  const industries = [
    { icon: <OilIcon />, label: 'Oil & Gas' },
    { icon: <BoltIcon />, label: 'Power & Energy' },
    { icon: <RoadIcon />, label: 'Infrastructure' },
    { icon: <FactoryIcon />, label: 'Manufacturing' },
    { icon: <GovtIcon />, label: 'Government &\nPublic Sector' },
    { icon: <MoreDotsIcon />, label: 'And More' },
  ];

  return (
    <section className="bg-navy-900 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_3fr]">
          {/* Left heading */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              Industries We Serve
            </p>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white md:text-3xl">
              Powering Progress
              <br />
              Across Key Sectors
            </h2>
          </div>

          {/* Right icons */}
          <div className="grid grid-cols-3 gap-6 sm:grid-cols-6">
            {industries.map((ind) => (
              <div key={ind.label} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300">
                  {ind.icon}
                </div>
                <p className="mt-3 whitespace-pre-line text-xs font-medium leading-tight text-slate-400">
                  {ind.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   SECTION 4 — WHY CHOOSE SUPERNIRMAN
   ────────────────────────────────────────────── */
function WhyChooseSection() {
  const checklist = [
    'Strong vendor network and quality assurance',
    'Competitive pricing with timely delivery',
    'Compliance with industry & government standards',
    'Customer-centric approach with reliability',
  ];

  const stats = [
    { icon: <MapPinIcon className="w-8 h-8 text-brand" />, number: '500+', label: 'Trusted Clients' },
    { icon: <PackageIcon className="w-8 h-8 text-brand" />, number: '5000+', label: 'Products Supplied' },
    { icon: <GlobeIcon className="w-8 h-8 text-brand" />, number: '25+', label: 'States Covered' },
    { icon: <ShieldCheckIcon className="w-8 h-8 text-brand" />, number: '10+', label: 'Years of Experience' },
  ];

  return (
    <section className="bg-navy-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              Why Choose Supernirman
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-navy-900 md:text-4xl">
              Built on <span className="text-brand">Trust.</span>
              <br />
              Driven by <span className="text-brand">Commitment.</span>
            </h2>

            <ul className="mt-6 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircleIcon className="mt-0.5 w-5 h-5 shrink-0 text-brand" />
                  <span className="text-sm text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white px-5 py-7 text-center shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/5">
                  {s.icon}
                </div>
                <div className="mt-4 text-3xl font-extrabold text-navy-900">{s.number}</div>
                <div className="mt-1 text-xs font-medium text-slate-500">{s.label}</div>
                <div className="mt-4 h-1 w-12 rounded-full bg-brand" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   HOME PAGE — ASSEMBLE ALL SECTIONS
   ────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <IndustriesSection />
      <WhyChooseSection />
    </>
  );
}

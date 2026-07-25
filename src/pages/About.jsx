import { useState, useEffect } from 'react';

const BRAND = '#0D5E9C';

// ---------- Data ----------
const missionPoints = [
  {
    icon: '🤝',
    title: 'Empower',
    text: "Empowering overlooked industries is crucial to promoting economic growth and addressing social inequality. By providing prompt financing, we can catalyse affirmative transformation and enable businesses in underserved areas to flourish. Our commitment to these industries demonstrates our dedication to creating a more equitable society.",
  },
  {
    icon: '📈',
    title: 'Succeed',
    text: "To succeed in today's rapidly changing business landscape, it is essential to understand evolving client preferences. By keeping abreast of the latest trends and market research, we can offer simpler modes and offerings that cater to the needs of our clients. Our focus on client satisfaction is at the heart of everything we do.",
  },
  {
    icon: '💡',
    title: 'Technology',
    text: 'We recognise that technology plays a critical role in our ability to deliver innovative and high-quality solutions. By harnessing technology, we can consistently pioneer new ways of doing business and enhance the quality of our services. Our cutting-edge tools and techniques ensure that we remain at the forefront of the industry.',
  },
  {
    icon: '👥',
    title: 'Teamwork',
    text: "At our company, we believe that creating an exceptional workplace is essential to our success. We strive to provide our staff with an environment that fosters creativity, collaboration, and growth. By investing in our employees' well-being, we can attract and retain top talent and continue to provide exceptional service to our clients.",
  },
];

const visionValues = [
  {
    icon: '🛡️',
    title: 'Integrity',
    text: 'Being fair, transparent, compliant and ethical in all our operations to build trust with all our stakeholders and earn goodwill.',
  },
  {
    icon: '⭐',
    title: 'Excellence',
    text: 'We shall thrive towards highest standard of quality in our service. We shall use technology to provide efficient and novel solutions to customers.',
  },
  {
    icon: '⚡',
    title: 'Agility',
    text: 'We shall be quick in responding to changing customer needs and open to embrace new ideas and positively approach challenges faced in business.',
  },
  {
    icon: '🤲',
    title: 'Stakeholder Delight',
    text: 'We shall integrate the environment, people and profit principles in our business ensuring stakeholder delight. We shall invest in our employees & partners and enable collaboration and open communication.',
  },
];

const teamMembers = [
  {
    name: 'Viren Jain',
    role: 'Co-Founder',
    initials: 'VJ',
    bio: [
      "Viren Jain, with a wealth of expertise in the infrastructure and construction industry, has accumulated over two decades of experience in the field. His extensive knowledge and skills have been honed through a range of roles and responsibilities, providing him with a unique perspective on the industry's various aspects.",
      'Having studied at prestigious institutions such as The Doon School, SRCC Delhi, and Manchester Business School in the UK, Viren has gained a comprehensive understanding of the theoretical and practical aspects of infrastructure and construction management.',
    ],
  },
  {
    name: 'Rohit Kapur',
    role: 'CTO',
    initials: 'RK',
    bio: [
      'Rohit Kapur is a highly experienced Chief Technology Officer (CTO) with over 19 years of expertise in the software industry. His proficiency extends from mainframe systems to the most up-to-date technologies. Rohit has successfully executed projects for several Fortune 500 companies worldwide.',
      'Having studied Computer Science at Michigan State University, USA, Rohit is an alumnus of the prestigious institution. His Bachelor of Engineering (BE) degree has equipped him with a strong foundation in the field, contributing to his success in the industry.',
      "He is passionate about using technology to solve business problems and achieve organisational goals. Rohit Kapur's impressive portfolio of experience and education sets him apart as a leader in the software industry.",
    ],
  },
  {
    name: 'Dhiraj Beri',
    role: 'CRO',
    initials: 'DB',
    bio: [
      'Dhiraj Beri has over 20 years of experience in Credit Risk, Underwriting, and Policy development. He has primarily worked in the banking, NBFC, and CDFI sectors, collaborating with top brands such as Deutsche Bank, PaisaLo, and Rapi Money.',
      'As an alumnus of the prestigious IIM Lucknow, Dhiraj Beri has received formal education and training in management and business administration. He has also completed a course at the University of South Wales in the United Kingdom, further enhancing his expertise and knowledge.',
      "Dhiraj Beri's extensive experience in the finance industry coupled with his academic background has made him a seasoned professional in the field. His skills and knowledge have contributed significantly to the growth and development of the company.",
    ],
  },
];

const boardOfDirectors = [
  {
    name: 'Vipul Jain',
    role: 'Promoter Director',
    initials: 'VJ',
    bio: [
      'After graduating from the prestigious Doon School, Mr. Vipul Jain pursued his B.com (Hons) from the esteemed Shri Ram College of Commerce and subsequently became a Chartered Accountant in 1995. Following this, he gained experience at KPMG in both India and Singapore before ultimately venturing into the field of wooden packaging, where he focuses on meeting the packaging needs of various companies both domestically and internationally.',
      'As a participant in the SME sector, he possesses a thorough understanding of the subtle intricacies involved in the absence of adequate working capital resources for small and medium-sized enterprises.',
    ],
  },
  {
    name: 'Mehul Nanavati',
    role: 'Promoter Director',
    initials: 'MN',
    bio: [
      'With a Bachelor of Science in Chemistry from Madras University, an MBA from Manchester Business School at the University of Manchester, and a General Management Program (GMP) certification from Harvard Business School, Mr. Mehul Nanavati is an accomplished professional with diverse educational qualifications. He is also a Lead Auditor under ISO 9000 systems and a Certified Chemist under India FDA, in addition to possessing a Diploma in Import-Export Management.',
      'Mr. Nanavati began his career with Raj Petro in 1997 and has since held various key leadership positions across numerous functions, ultimately rising to the position of CEO in 2020. His extensive knowledge spans across multiple disciplines, including IT/ERP, HR, Marketing, Account Management, Strategy, and M&A, which he employs as a promoter director at Supernirman.',
    ],
  },
  {
    name: 'Siddhartha Nigam',
    role: 'Promoter Director',
    initials: 'SN',
    bio: [
      'With a wealth of academic and professional achievements under his belt, Mr. Siddhartha Nigam is a seasoned leader with more than two decades of corporate finance experience. He recently completed the Senior Leadership Programme at Said Business School and holds a coveted Master of Business Administration (MBA) from Manchester Business School, University of Manchester, UK.',
      "Currently serving as a Senior Partner and Leader of Advisory Services at Grant Thornton, Mr. Nigam's expertise includes cultivating and maintaining market relationships, fundraising, and fostering the growth of businesses from their very inception. As a former Vice President of Edelweiss Capital, he has honed his skills in various leadership roles, making him an ideal candidate to help build Supernirman.",
    ],
  },
];

// ---------- Modal ----------
function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-4 backdrop-blur-sm"
      style={{ animation: 'fadeIn 0.2s ease-out' }}
      onClick={onClose}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl"
        style={{ animation: 'scaleIn 0.2s ease-out' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-900 hover:text-white"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

// ---------- Person Card ----------
function PersonCard({ person }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group w-full rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        style={{ borderColor: undefined }}
      >
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-black transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${BRAND}1A`, color: BRAND }}
        >
          {person.initials}
        </div>

        <h3 className="mt-3 text-base font-bold">{person.name}</h3>
        <p className="text-sm text-slate-500">{person.role}</p>

        <span
          className="mt-3 inline-flex items-center gap-1 text-xs font-semibold transition-transform duration-300 group-hover:translate-x-1"
          style={{ color: BRAND }}
        >
          Read more →
        </span>
      </button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className="flex items-center gap-4">
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-xl font-black"
            style={{ backgroundColor: `${BRAND}1A`, color: BRAND }}
          >
            {person.initials}
          </div>
          <div>
            <h3 className="text-2xl font-black">{person.name}</h3>
            <p className="text-sm font-semibold" style={{ color: BRAND }}>
              {person.role}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4 text-slate-600">
          {person.bio.map((paragraph, i) => (
            <p key={i} className="leading-7">
              {paragraph}
            </p>
          ))}
        </div>
      </Modal>
    </>
  );
}

// ---------- Section Heading ----------
function SectionHeading({ title, subtitle }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-black md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 leading-7 text-slate-600">{subtitle}</p>}
    </div>
  );
}

// ---------- Main About Page ----------
export default function About() {
  return (
    <div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95) translateY(8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes zoom-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* Hero */}
      <section className="border-b bg-gradient-to-br from-white to-slate-50 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-sm font-semibold uppercase tracking-widest" style={{ color: BRAND }}>
            About Us
          </div>
          <h1 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
            From raw to ready: your all-in-one construction material source
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-6 leading-8 text-slate-600">
          <p>
            Supernirman is a technology platform specialising in aggregation and procurement of
            construction materials with financing solutions for contractors in the SME segment.
            Our leaders have extensive experience in the construction industry and have devised
            a solution which automates the process of procuring products at the best possible
            rates from verified vendors to ensure timely delivery of quality products. The credit
            solution is available to SME contractors so that cash flow issues do not hamper the
            quality and timeline of delivery of their projects.
          </p>
          <p>
            We offer a comprehensive list of products like steel, cement, blocks, paints,
            electricals, and plumbing materials covering over 20 categories of building
            materials. We ensure that bulk-buying discounts, which are offered to the platform,
            flow to our customers, making us among the preferred platforms for our customers. In
            addition to the price advantage, we also ensure transparency in dealings and on-time
            quality delivery of goods.
          </p>
          <p>
            We also offer an anchor-led supply chain finance solution for distributors and
            retailers of construction material manufacturers. The finance solution can be used
            by large distributors and retailers as a top-up to their existing financing
            arrangements, or help small distributors and retailers enter the organised finance
            space for the first time. Supply chain finance can be used as a catalyst for growth
            by distributors and retailers.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-slate-50 px-8 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Our Mission" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {missionPoints.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: `${BRAND}1A` }}
                >
                  {item.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Our Vision"
            subtitle='"To provide cost effective procurement solutions and last mile funding to SMEs and contractors, subcontractors and vendors in the construction and real estate sectors."'
          />
          <p className="mx-auto mt-8 max-w-2xl text-center font-semibold text-slate-700">
            Our company shall be identifiable through the following values:
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visionValues.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${BRAND}1A` }}
                >
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Leaders - Complete Section */}
     
    </div>
  );
}
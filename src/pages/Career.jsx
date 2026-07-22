import { useState } from 'react';
import {
  Wallet,
  CalendarDays,
  HeartHandshake,
  Users,
  ChevronDown,
  X,
  UploadCloud,
  CheckCircle2,
} from 'lucide-react';
import { Button, Card } from '../components/UI.jsx';

const benefits = [
  {
    icon: Wallet,
    title: 'Competitive compensation',
    description: 'We provide the best compensation in the industry with great perks.',
  },
  {
    icon: CalendarDays,
    title: 'Flexible paid time off',
    description:
      'We value your dedication and understand the need to have time off — we are cool with it.',
  },
  {
    icon: HeartHandshake,
    title: 'Parental leave',
    description:
      'You are family for us and your happy times are our happy times — take time off and enjoy the moment.',
  },
  {
    icon: Users,
    title: 'Team & company retreats',
    description:
      'Off-sites for official and not-so-official mixers — a balanced environment is a productive environment.',
  },
];

// shared 3-line pattern used by most Category Manager roles
function categoryManagerBlocks() {
  return [
    {
      type: 'p',
      label: 'Qualifications',
      text: 'B.Sc / B.Com / BBA / Diploma in Engineering',
    },
    {
      type: 'p',
      label: 'Experience',
      text: '3 to 4 years in Category Management / Merchandising for at least 2 of the above categories',
    },
    {
      type: 'p',
      label: 'Key Measurables',
      text: 'Lead Generation, Conversion, Sourcing, Supply Execution, Payment Collection',
    },
  ];
}

const positions = [
  {
    title: 'Business Analyst',
    body: [
      {
        type: 'ul',
        items: [
          'Oversee business process analysis and execute the collection, elicitation, and recording of business requirements for strategic project development.',
          'Strong story-telling & articulation skills — able to convert analytical output into clear, concise, and persuasive insights & recommendations for technical & non-technical audiences.',
          'Experience handling large datasets (structured or unstructured). Ability to understand business problems and convert them into an optimal data strategy.',
          'Provide solutions including (but not limited to): Customer Segmentation & Targeting, Propensity Modelling, Churn Modelling, Lifetime Value Estimation, Forecasting, Recommender Systems, Modelling Response to Incentives, Marketing Mix Optimization, Price Optimization.',
          'Create business dashboards for business heads & CXOs.',
          'Design and implement analytical projects that drive business goals and decisions (e.g. improving order value or conversions).',
          'Define & track metrics that help evaluate the health of the business.',
          'Mentor & plan the work of other business analysts.',
          'Build automated alerting systems for proactive & pre-emptive action.',
        ],
      },
      {
        type: 'p',
        label: 'Must have',
        text: 'Advanced knowledge of statistical techniques.',
      },
      {
        type: 'ul',
        items: [
          'Develop new product/service-oriented strategies and communicate them to the technical team for implementation.',
          'Identify and solve weaknesses within and outside the organization.',
          'Develop, document, and maintain complex business models; interact with all departments and participate in business meetings.',
          'Explore new opportunities to increase client/customer satisfaction.',
          'Develop solutions for complex business problems within the organization.',
          'Conduct training programs, both internally and for clients, on new business models.',
        ],
      },
      { type: 'h4', text: 'Basic Qualifications' },
      {
        type: 'ul',
        items: [
          "Bachelor's degree in Engineering from a premier institute preferred.",
          'R, SAS, QlikView, Google Analytics, MixPanel (good to have).',
          'Excel.',
          'Experience with RDBMS & Business Intelligence tools.',
          'Strong story-telling & articulation skills for technical & non-technical audiences.',
        ],
      },
    ],
  },
  {
    title: 'Credit Resource',
    body: [
      { type: 'h4', text: 'Key Responsibilities' },
      {
        type: 'ul',
        items: [
          'Credit appraisal and underwriting of unsecured business loan files — analysing financial status and credit evaluations to determine loan feasibility, and preparing Credit Approval Memos (CAM). Supply chain finance experience preferred.',
          'Meet applicants (personal discussion) to gather information for loan applications, and analyse financial situations through business-place visits.',
          'Handle pre- and post-sanction credit risk compliance, including the complete credit & backend process at branch level, and train resources on credit, operations, and sales documentation.',
          'Engage with third-party vendors and track completion of all necessary verification checks within the required turnaround time.',
          'Ensure maintenance of TAT for unsecured business loan proposals at an acceptable level.',
          'Manage overall credit and risk functions for assigned areas/locations.',
          'Support the business team in achieving monthly/annual targets.',
          'Ensure adherence to credit policy and defined processes.',
          'Provide inputs for designing and implementing credit policy, new initiatives, and periodic changes based on sales feedback and market/competitor insights.',
          'Maintain portfolio quality and manage collections and delinquency, including monitoring non-starters.',
          'Coordinate with the operations team for disbursal, OTC, and PDD processes.',
          'Ensure audit and regulatory compliance for the assigned location/area.',
          'Take reference checks for prospective borrowers from market links and existing lenders.',
          'Coordinate training programs for the credit/sales team.',
          'Manage MIS for the vertical.',
        ],
      },
    ],
  },
  {
    title: 'Manager – Finance & Accounts',
    body: [
      { type: 'p', label: 'Qualification', text: 'CA Qualified' },
      {
        type: 'p',
        label: 'Required Experience',
        text: '3+ years of post-qualification experience in NBFC / Banking / Fintech',
      },
      { type: 'h4', text: 'Primary Responsibilities' },
      {
        type: 'ul',
        items: [
          'Financial & regulatory reporting, including finalization of financial statements.',
          'Handle all accounting functions & taxation.',
          'Be a strong team player.',
          'Audit finalization.',
          'Capital & financial forecasting and planning.',
          'Preparation of reports for internal & external stakeholders.',
          'Adherence to various Indian Accounting Standards and conversion.',
          'Maintain overall GL structure and P&L statements.',
        ],
      },
      {
        type: 'meta',
        items: [
          { label: 'Role', value: 'Chartered Accountant (CA)' },
          { label: 'Industry Type', value: 'Banking' },
          { label: 'Department', value: 'Finance & Accounting' },
          { label: 'Employment Type', value: 'Full Time, Permanent' },
          { label: 'Role Category', value: 'Accounting & Taxation' },
        ],
      },
    ],
  },
  {
    title: 'Category Manager – Paints & Chemicals, Bricks & Blocks',
    body: categoryManagerBlocks(),
  },
  {
    title:
      'Category Manager – Steel (TMT, Structural, Pipes, Roofing Sheets), Welding Consumables, Petroleum & Lubricants',
    body: categoryManagerBlocks(),
  },
  {
    title: 'Category Manager – Plumbing & Water Supply, CP and Chinaware',
    body: categoryManagerBlocks(),
  },
  {
    title:
      'Category Manager – Electrical Materials (Cables & Wires, Switchgear, Switches etc.), Surveillance Equipment (CCTV Cameras, DVR, NVR etc.)',
    body: categoryManagerBlocks(),
  },
  {
    title: 'Category Manager – Aggregates, Cement, RMC',
    body: categoryManagerBlocks(),
  },
  {
    title: 'Category Manager – Flooring Materials (Tiles, Wooden Flooring, Stone, Marble, Granite)',
    body: categoryManagerBlocks(),
  },
  {
    title: 'Category Manager – Timber & Plywood, Doors, Façade, Glazing, Door Fittings',
    body: categoryManagerBlocks(),
  },
  {
    title: 'Purchase Executive / Purchase Analyst',
    body: [
      { type: 'p', label: 'Qualifications', text: 'Graduate in Science or Commerce' },
      {
        type: 'p',
        label: 'Experience',
        text: '3 to 4 years of experience in procurement / purchase. Preference given to candidates from the real estate / construction industry.',
      },
      { type: 'h4', text: 'The suitable candidate shall have the following attributes' },
      {
        type: 'ol',
        items: [
          'Basic knowledge of construction materials like steel, cement, finishing items, electrical items, etc.',
          'Computer literate — working knowledge of Excel, PowerPoint, etc.',
          'Good communication skills — oral and written.',
        ],
      },
    ],
  },
];

function JobBody({ blocks }) {
  return (
    <div className="space-y-3 text-sm leading-6 text-slate-600">
      {blocks.map((b, i) => {
        if (b.type === 'h4') {
          return (
            <h4 key={i} className="pt-2 font-bold text-slate-900">
              {b.text}
            </h4>
          );
        }
        if (b.type === 'p') {
          return (
            <p key={i}>
              {b.label && <strong className="text-slate-900">{b.label}: </strong>}
              {b.text}
            </p>
          );
        }
        if (b.type === 'ul') {
          return (
            <ul key={i} className="list-disc space-y-1.5 pl-5">
              {b.items.map((it, j) => (
                <li key={j}>{it}</li>
              ))}
            </ul>
          );
        }
        if (b.type === 'ol') {
          return (
            <ol key={i} className="list-decimal space-y-1.5 pl-5">
              {b.items.map((it, j) => (
                <li key={j}>{it}</li>
              ))}
            </ol>
          );
        }
        if (b.type === 'meta') {
          return (
            <div key={i} className="grid gap-1 border-t border-slate-100 pt-3 sm:grid-cols-2">
              {b.items.map((m, j) => (
                <p key={j}>
                  <strong className="text-slate-900">{m.label}: </strong>
                  {m.value}
                </p>
              ))}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

function ApplyModal({ jobTitle, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire this up to your backend / an email service (e.g. Formspree,
    // your own API route) to actually receive applications — this just
    // shows a confirmation for now.
    setSubmitted(true);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4">
      <Card className="w-full max-w-lg p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900">Apply Now</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          >
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center gap-3 py-8 text-center">
            <CheckCircle2 size={40} className="text-brand" />
            <p className="font-semibold text-slate-900">Application received!</p>
            <p className="text-sm text-slate-500">
              Thanks for applying to {jobTitle}. Our team will get back to you soon.
            </p>
            <Button onClick={onClose} className="mt-2 bg-brand text-white">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Position Applied
              </label>
              <input
                type="text"
                value={jobTitle}
                disabled
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter name"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-brand"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter email"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-brand"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Your Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="Enter phone no."
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-brand"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Upload Resume <span className="text-red-500">*</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-dashed border-slate-300 px-3 py-3 text-sm text-slate-500 hover:border-brand hover:text-brand">
                <UploadCloud size={18} />
                <span>PDF, DOC or DOCX</span>
                <input type="file" accept=".pdf,.doc,.docx" required className="hidden" />
              </label>
            </div>

            <Button type="submit" className="w-full bg-brand text-white">
              Submit Application
            </Button>
          </form>
        )}
      </Card>
    </div>
  );
}

export default function Career() {
  const [openIndex, setOpenIndex] = useState(null);
  const [applyingTo, setApplyingTo] = useState(null);

  function toggle(i) {
    setOpenIndex((current) => (current === i ? null : i));
  }

  return (
    <>
      {/* HERO */}
      <section className="bg-navy px-8">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl">
              Work <span className="text-accent">with us</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-700">
              At Supernirman, we build reliable industrial, construction, and government supply
              solutions for our customers. Whether it's technology or traditional processes, we
              work with the best talent in the industry to get it done.
            </p>
            <a href="#open-positions">
              <Button className="mt-8 bg-brand text-white">View Open Positions</Button>
            </a>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/image/careerpageImg.png"
              alt="Supernirman team and career opportunities"
              className="w-full max-w-md rounded-3xl border border-white/20 object-cover "
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-3xl font-black">Benefits and Perks</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="flex flex-col items-center gap-3 p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Icon size={22} />
              </div>
              <h3 className="font-bold text-slate-900">{title}</h3>
              <p className="text-sm text-slate-600">{description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="open-positions" className="scroll-mt-24 bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-black">Open Positions at Supernirman</h2>

          <div className="mt-10 space-y-4">
            {positions.map((job, i) => {
              const isOpen = openIndex === i;
              return (
                <Card key={job.title} className="overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-slate-900">{job.title}</span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-slate-400 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-6 py-6">
                      <div className="mb-5 flex flex-col items-start justify-between gap-3 rounded-xl bg-slate-50 p-4 sm:flex-row sm:items-center">
                        <span className="font-semibold text-slate-900">{job.title}</span>
                        <Button
                          onClick={() => setApplyingTo(job.title)}
                          className="bg-brand text-white"
                        >
                          Apply Now
                        </Button>
                      </div>

                      <JobBody blocks={job.body} />
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {applyingTo && <ApplyModal jobTitle={applyingTo} onClose={() => setApplyingTo(null)} />}
    </>
  );
}
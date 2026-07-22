import { Card, Button } from './UI.jsx';

export default function CategoryGrid({
  title,
  subtitle,
  eyebrow = 'Product Range',
  categories,
}) {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-4 py-14 sm:px-6 sm:py-16">
      <div className="absolute inset-x-0 top-0 -z-0 h-64 bg-gradient-to-b from-brand/10 via-white to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand">
            {eyebrow}
          </p>

          <h1 className="mt-3 text-3xl font-black leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Card
            key={category.title}
            className="group relative flex flex-col overflow-hidden border border-white/70 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)] motion-safe:hover:scale-[1.01]"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-brand/70 to-accent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-3xl ring-1 ring-brand/10 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
              {category.icon}
            </div>

            <h2 className="mt-4 text-lg font-bold leading-snug text-navy-900 transition-colors duration-300 group-hover:text-brand">
              {category.title}
            </h2>

            <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-600">
              {category.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 transition-transform duration-300 group-hover:translate-x-1">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand transition-all duration-300 group-hover:scale-125 group-hover:bg-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <Button className="mt-6 self-start bg-brand text-white shadow-lg shadow-brand/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-xl hover:shadow-brand/30">
              Request Quote
            </Button>
          </Card>
        ))}
        </div>
      </div>
    </section>
  );
}

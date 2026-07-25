import { Card, Button } from './UI.jsx';

function renderIcon(Icon, className) {
  if (typeof Icon === 'string') {
    return <span className={className}>{Icon}</span>;
  }

  if (Icon) {
    const CategoryIcon = Icon;
    return <CategoryIcon className={className} strokeWidth={1.75} />;
  }

  return null;
}

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
          {categories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <Card
                key={category.title}
                className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/5">
                  {renderIcon(CategoryIcon, 'h-6 w-6 text-brand')}
                </div>

                <h2 className="mt-3 text-lg font-bold text-navy-900">{category.title}</h2>

                <ul className="mt-3 flex-1 space-y-2 text-sm text-slate-600">
                  {category.items.map((item) => {
                    if (typeof item === 'string') {
                      return <li key={item}>{item}</li>;
                    }

                    const ItemIcon = item.icon;

                    return (
                      <li key={item.name} className="flex items-center gap-2">
                        {renderIcon(ItemIcon, 'h-4 w-4 shrink-0 text-brand/70')}
                        {item.name}
                      </li>
                    );
                  })}
                </ul>

                <Button className="mt-5 self-start rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:opacity-90">
                  Request Quote
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

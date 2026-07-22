import { Card, Button } from './UI.jsx';

export default function CategoryGrid({ title, categories }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-extrabold text-navy-900">{title}</h1>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Card key={category.title} className="flex flex-col p-6">
            <div className="text-3xl">{category.icon}</div>

            <h2 className="mt-3 text-lg font-bold text-navy-900">{category.title}</h2>

            <ul className="mt-3 flex-1 space-y-1.5 text-sm text-slate-600">
              {category.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>

            <Button className="mt-5 self-start bg-brand text-white hover:bg-brand-dark">
              Request Quote
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}

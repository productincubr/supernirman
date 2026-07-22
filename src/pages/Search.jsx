import { Link, useSearchParams } from 'react-router-dom';
import { Card, Button } from '../components/UI.jsx';
import { searchCatalogs } from '../data/categories.js';

export default function Search() {
  const [params] = useSearchParams();
  const query = params.get('q') || '';
  const results = searchCatalogs(query);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="text-4xl font-black">Search Results</h1>

      <p className="mt-3 text-slate-600">
        {results.length > 0
          ? `${results.length} categor${results.length === 1 ? 'y' : 'ies'} matched "${query}"`
          : `No results for "${query}"`}
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {results.map((result) => (
          <Card key={`${result.pagePath}-${result.title}`} className="flex flex-col p-6">
            <div className="text-3xl">{result.icon}</div>

            <div className="mt-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
              {result.pageLabel}
            </div>

            <h2 className="mt-1 text-lg font-bold">{result.title}</h2>

            <ul className="mt-3 flex-1 space-y-1 text-sm text-brand">
              {result.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            <Link to={result.pagePath} className="mt-5 self-start">
              <Button className="bg-brand text-white">View Category</Button>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}

import CategoryGrid from '../components/CategoryGrid.jsx';
import { mroCategories } from '../data/categories.js';

export default function MRO() {
  return (
    <CategoryGrid
      title="MRO"
      eyebrow="Maintenance, Repair & Operations"
      subtitle="Wide range of Maintenance, Repair & Operations products for every industrial need."
      categories={mroCategories}
    />
  );
}




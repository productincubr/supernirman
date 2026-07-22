import CategoryGrid from '../components/CategoryGrid.jsx';
import { mroCategories } from '../data/categories.js';

export default function MRO() {
  return <CategoryGrid title="MRO" categories={mroCategories} />;
}

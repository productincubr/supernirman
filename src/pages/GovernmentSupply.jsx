import CategoryGrid from '../components/CategoryGrid.jsx';
import { governmentSupplyCategories } from '../data/categories.js';

export default function GovernmentSupply() {
  return <CategoryGrid title="Government Supply" categories={governmentSupplyCategories} />;
}

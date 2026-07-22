import CategoryGrid from '../components/CategoryGrid.jsx';
import { governmentSupplyCategories } from '../data/categories.js';

export default function GovernmentSupply() {
  return (
    <CategoryGrid
      title="Government Supply"
      subtitle="Authorized supplier for government departments and public sector undertakings across India."
      categories={governmentSupplyCategories}
    />
  );
}
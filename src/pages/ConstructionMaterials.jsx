import CategoryGrid from '../components/CategoryGrid.jsx';
import { constructionCategories } from '../data/categories.js';

export default function ConstructionMaterials() {
  return (
    <CategoryGrid
      title="Construction Materials"
      subtitle="High-quality construction materials for every structure and project."
      categories={constructionCategories}
    />
  );
}
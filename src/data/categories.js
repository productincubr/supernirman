// Central place for all catalog data.
// Edit the arrays below to add/remove/rename categories or products —
// every page (and the search bar) reads from here.

export const mroCategories = [
  {
    icon: '🧰',
    title: 'Industrial Tools & Hardware',
    items: ['Hand Tools', 'Power Tools', 'Fasteners & Fittings', 'Cutting Tools'],
  },
  {
    icon: '🦺',
    title: 'Safety & PPE',
    items: ['Safety Helmets', 'Safety Shoes', 'Hand Gloves', 'Reflective Jackets'],
  },
  {
    icon: '🧪',
    title: 'Lubricants & Chemicals',
    items: ['Industrial Lubricants', 'Adhesives & Sealants', 'Cleaning Chemicals'],
  },
  {
    icon: '⚙️',
    title: 'Bearings & Power Transmission',
    items: ['Ball Bearings', 'V-Belts', 'Chains & Sprockets'],
  },
  {
    icon: '🛒',
    title: 'Material Handling',
    items: ['Trolleys', 'Pallet Trucks', 'Lifting Equipment'],
  },
];

export const governmentSupplyCategories = [
  {
    icon: '💻',
    title: 'IT & Office Equipment',
    items: [
      'Desktop',
      'Laptop',
      'All-in-One PC',
      'Work Station',
      'Monitor',
      'Server',
      'Printer',
      'BAR Code Printer',
      'Biometric Systems',
      'Interactive Panels with CPU',
      'Professional Large Format Display',
      'Video Conference & Camera',
    ],
  },
  {
    icon: '⚡',
    title: 'Electrical & Lighting',
    items: ['Wire & Cable', 'LED', 'Switch Gear', 'BLDC Fans', 'Air Circulator Fan', 'TPW'],
  },
  {
    icon: '🔋',
    title: 'Power Backup Solutions',
    items: ['UPS', 'Automotive Battery', 'Inverter Battery', 'Traction & VRLA Battery'],
  },
  {
    icon: '🏠',
    title: 'Home Appliances',
    items: [
      'Television (TV)',
      'AC',
      'Refrigerator',
      'Water Dispenser',
      'Water Cooler',
      'Washing Machine',
      'Air Cooler',
    ],
  },
  {
    icon: '⚕️',
    title: 'Medical & Institutional',
    items: ['Medical Consumables', 'Furniture', 'Paper', 'E-Rickshaw'],
  },
];

export const constructionCategories = [
  {
    icon: '🏗️',
    title: 'Cement & Concrete',
    items: ['OPC Cement', 'PPC Cement', 'Ready Mix Concrete', 'Fly Ash'],
  },
  {
    icon: '🏢',
    title: 'Steel & Structural Materials',
    items: ['TMT Bars', 'Structural Steel', 'MS Binding Wire', 'Roofing Sheets'],
  },
  {
    icon: '🧱',
    title: 'Bricks, Blocks & Masonry',
    items: ['AAC Blocks', 'Concrete Blocks', 'Fly Ash Bricks'],
  },
  {
    icon: '🪣',
    title: 'Flooring & Finishing',
    items: ['Tiles', 'Marble', 'Granite', 'Waterproofing Materials'],
  },
  {
    icon: '🚿',
    title: 'Plumbing & Sanitary',
    items: ['CPVC Pipes', 'UPVC Pipes', 'Bathroom Fittings'],
  },
];

// Used by the search bar to look across all three catalogs at once.
export const allCatalogs = [
  { pagePath: '/mro', pageLabel: 'MRO', categories: mroCategories },
  { pagePath: '/government-supply', pageLabel: 'Government Supply', categories: governmentSupplyCategories },
  { pagePath: '/construction-materials', pageLabel: 'Construction Materials', categories: constructionCategories },
];

export function searchCatalogs(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results = [];

  for (const catalog of allCatalogs) {
    for (const category of catalog.categories) {
      const categoryMatches = category.title.toLowerCase().includes(q);
      const matchedItems = category.items.filter((item) => item.toLowerCase().includes(q));

      if (categoryMatches || matchedItems.length > 0) {
        results.push({
          pagePath: catalog.pagePath,
          pageLabel: catalog.pageLabel,
          icon: category.icon,
          title: category.title,
          items: categoryMatches ? category.items : matchedItems,
        });
      }
    }
  }

  return results;
}

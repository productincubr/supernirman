// Central place for all catalog data.
// Edit the arrays below to add/remove/rename categories or products —
// every page (and the search bar) reads from here.

import {
  Hammer,
  Wrench,
  Bolt,
  Scissors,
  HardHat,
  Footprints,
  Hand,
  Shirt,
  Droplet,
  Beaker,
  SprayCan,
  CircleDot,
  Link2,
  Link as ChainLink,
  ShoppingCart,
  Truck,
  Construction,
  Settings,
  Package,
  Monitor,
  Laptop,
  Cpu,
  Printer,
  Cable,
  BatteryCharging,
  Home,
  HeartPulse,
  Lightbulb,
  PanelTop,
  BrickWall,
  Layers3,
  Droplets,
  Pipette,
  ShowerHead,
} from 'lucide-react';

export const mroCategories = [
  {
    icon: Wrench,
    title: 'Industrial Tools & Hardware',
    items: [
      { name: 'Hand Tools', icon: Hammer },
      { name: 'Power Tools', icon: Settings },
      { name: 'Fasteners & Fittings', icon: Bolt },
      { name: 'Cutting Tools', icon: Scissors },
    ],
  },
  {
    icon: HardHat,
    title: 'Safety & PPE',
    items: [
      { name: 'Safety Helmets', icon: HardHat },
      { name: 'Safety Shoes', icon: Footprints },
      { name: 'Hand Gloves', icon: Hand },
      { name: 'Reflective Jackets', icon: Shirt },
    ],
  },
  {
    icon: Beaker,
    title: 'Lubricants & Chemicals',
    items: [
      { name: 'Industrial Lubricants', icon: Droplet },
      { name: 'Adhesives & Sealants', icon: Beaker },
      { name: 'Cleaning Chemicals', icon: SprayCan },
    ],
  },
  {
    icon: Settings,
    title: 'Bearings & Power Transmission',
    items: [
      { name: 'Ball Bearings', icon: CircleDot },
      { name: 'V-Belts', icon: Link2 },
      { name: 'Chains & Sprockets', icon: Link2 },
    ],
  },
  {
    icon: Package,
    title: 'Material Handling',
    items: [
      { name: 'Trolleys', icon: ShoppingCart },
      { name: 'Pallet Trucks', icon: Truck },
      { name: 'Lifting Equipment', icon: Construction },
    ],
  },
];

export const governmentSupplyCategories = [
  {
    icon: Monitor,
    title: 'IT & Office Equipment',
    items: [
      { name: 'Desktop', icon: Monitor },
      { name: 'Laptop', icon: Laptop },
      { name: 'All-in-One PC', icon: Cpu },
      { name: 'Work Station', icon: PanelTop },
      { name: 'Monitor', icon: Monitor },
      { name: 'Server', icon: Cpu },
      { name: 'Printer', icon: Printer },
      { name: 'BAR Code Printer', icon: Printer },
      { name: 'Biometric Systems', icon: HeartPulse },
      { name: 'Interactive Panels with CPU', icon: PanelTop },
      { name: 'Professional Large Format Display', icon: Monitor },
      { name: 'Video Conference & Camera', icon: Monitor },
    ],
  },
  {
    icon: Lightbulb,
    title: 'Electrical & Lighting',
    items: [
      { name: 'Wire & Cable', icon: Cable },
      { name: 'LED', icon: Lightbulb },
      { name: 'Switch Gear', icon: PanelTop },
      { name: 'BLDC Fans', icon: Lightbulb },
      { name: 'Air Circulator Fan', icon: Lightbulb },
      { name: 'TPW', icon: PanelTop },
    ],
  },
  {
    icon: BatteryCharging,
    title: 'Power Backup Solutions',
    items: [
      { name: 'UPS', icon: BatteryCharging },
      { name: 'Automotive Battery', icon: BatteryCharging },
      { name: 'Inverter Battery', icon: BatteryCharging },
      { name: 'Traction & VRLA Battery', icon: BatteryCharging },
    ],
  },
  {
    icon: Home,
    title: 'Home Appliances',
    items: [
      { name: 'Television (TV)', icon: Monitor },
      { name: 'AC', icon: Lightbulb },
      { name: 'Refrigerator', icon: Home },
      { name: 'Water Dispenser', icon: Droplet },
      { name: 'Water Cooler', icon: Droplet },
      { name: 'Washing Machine', icon: Droplets },
      { name: 'Air Cooler', icon: Lightbulb },
    ],
  },
  {
    icon: HeartPulse,
    title: 'Medical & Institutional',
    items: [
      { name: 'Medical Consumables', icon: HeartPulse },
      { name: 'Furniture', icon: Home },
      { name: 'Paper', icon: Printer },
      { name: 'E-Rickshaw', icon: BatteryCharging },
    ],
  },
];

export const constructionCategories = [
  {
    icon: Construction,
    title: 'Cement & Concrete',
    items: [
      { name: 'OPC Cement', icon: Construction },
      { name: 'PPC Cement', icon: Construction },
      { name: 'Ready Mix Concrete', icon: Construction },
      { name: 'Fly Ash', icon: Layers3 },
    ],
  },
  {
    icon: Layers3,
    title: 'Steel & Structural Materials',
    items: [
      { name: 'TMT Bars', icon: Layers3 },
      { name: 'Structural Steel', icon: Construction },
      { name: 'MS Binding Wire', icon: Cable },
      { name: 'Roofing Sheets', icon: PanelTop },
    ],
  },
  {
    icon: BrickWall,
    title: 'Bricks, Blocks & Masonry',
    items: [
      { name: 'AAC Blocks', icon: BrickWall },
      { name: 'Concrete Blocks', icon: BrickWall },
      { name: 'Fly Ash Bricks', icon: BrickWall },
    ],
  },
  {
    icon: Droplets,
    title: 'Flooring & Finishing',
    items: [
      { name: 'Tiles', icon: Layers3 },
      { name: 'Marble', icon: Construction },
      { name: 'Granite', icon: Construction },
      { name: 'Waterproofing Materials', icon: Droplets },
    ],
  },
  {
    icon: Pipette,
    title: 'Plumbing & Sanitary',
    items: [
      { name: 'CPVC Pipes', icon: Pipette },
      { name: 'UPVC Pipes', icon: Pipette },
      { name: 'Bathroom Fittings', icon: ShowerHead },
    ],
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
      const matchedItems = category.items.filter((item) => {
        const itemName = typeof item === 'string' ? item : item.name;
        return itemName.toLowerCase().includes(q);
      });

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

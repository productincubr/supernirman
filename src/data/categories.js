// Central place for all catalog data.
// Edit the arrays below to add/remove/rename categories or products —
// every page (and the search bar) reads from here.

import {
  Wrench,
  Hammer,
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
} from "lucide-react";

export const mroCategories = [
  {
    icon: '⚡',
    title: "Electrical & Automation",
    items: [
      { name: "Cables & Wires", icon: Cable },
      { name: "Switchgear", icon: PanelTop },
      { name: "Industrial Automation", icon: Cpu },
      { name: "Electrical Equipment", icon: Settings },
      { name: "Motors", icon: Settings },
      { name: "Sensors", icon: Cpu },
      { name: "Lighting", icon: Lightbulb },
      { name: "Control Panels", icon: PanelTop },
      { name: "Battery & UPS", icon: BatteryCharging },
      { name: "Relays & Contactors", icon: Bolt },
    ],
  },

  {
    icon: '🛠',
    title: "Industrial Tools & Hardware",
    items: [
      { name: "Hand Tools", icon: Hammer },
      { name: "Power Tools", icon: Wrench },
      { name: "Industrial Tools", icon: Wrench },
      { name: "Fasteners", icon: Bolt },
      { name: "Hydraulics", icon: Settings },
      { name: "Pneumatics", icon: Settings },
      { name: "Pipe & Fittings", icon: Pipette },
      { name: "Bearings", icon: CircleDot },
      { name: "Testing Instruments", icon: Cpu },
    ],
  },

  {
    icon: '🦺',
    title: "Safety & PPE",
    items: [
      { name: "Safety Helmets", icon: HardHat },
      { name: "Safety Gloves", icon: Hand },
      { name: "Safety Shoes", icon: Footprints },
      { name: "Face Shields", icon: HardHat },
      { name: "Protective Clothing", icon: Shirt },
      { name: "Respiratory Protection", icon: HardHat },
      { name: "Industrial Safety Equipments", icon: HardHat },
    ],
  },

  {
    icon: '🔥',
    title: "Welding & Fabrication",
    items: [
      { name: "Welding Machines", icon: Construction },
      { name: "Electrodes", icon: Bolt },
      { name: "Cutting Tools", icon: Scissors },
      { name: "Gas Regulators", icon: Settings },
      { name: "Fabrication Consumables", icon: Hammer },
      { name: "Welding Accessories", icon: Construction },
    ],
  },

  {
    icon: '🛢',
    title: "Lubrication & Maintenance",
    items: [
      { name: "Industrial Lubricants", icon: Droplet },
      { name: "Greases", icon: Droplets },
      { name: "Cleaning Chemicals", icon: SprayCan },
      { name: "Maintenance Chemicals", icon: Beaker },
      { name: "Sealants", icon: Beaker },
      { name: "Corrosion Protection", icon: SprayCan },
    ],
  },

  {
    icon: '📦',
    title: "Packaging & Material Handling",
    items: [
      { name: "Packaging Materials", icon: Package },
      { name: "Pallet Trucks", icon: Truck },
      { name: "Storage Solutions", icon: Package },
      { name: "Industrial Trolleys", icon: ShoppingCart },
      { name: "Warehouse Equipments", icon: Package },
    ],
  },

  {
    icon: '❄️',
    title: "HVAC & Utilities",
    items: [
      { name: "HVAC Systems", icon: Settings },
      { name: "Industrial Fans", icon: Lightbulb },
      { name: "Air Compressors", icon: Settings },
      { name: "Water Pumps", icon: Droplets },
      { name: "Valves", icon: Pipette },
      { name: "Utility Equipments", icon: Settings },
    ],
  },

  {
    icon: '🚚',
    title: "Automotive & Garage",
    items: [
      { name: "Automotive Parts", icon: Truck },
      { name: "Garage Tools", icon: Wrench },
      { name: "Industrial Batteries", icon: BatteryCharging },
      { name: "Tyre Inflators", icon: Settings },
      { name: "Vehicle Maintenance Consumables", icon: Droplet },
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

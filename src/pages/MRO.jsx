import CategoryGrid from "../components/CategoryGrid";
import { mroCategories } from "../data/categories";

import {
  Wrench,
  ShieldCheck,
  Droplets,
  Cog,
  Forklift,
  ArrowRight,
} from "lucide-react";

const exploreCategories = [
  {
    id: 1,
    title: "Industrial Tools & Hardware",
    description: "Hand Tools • Power Tools • Cutting Tools",
    image:
      "https://i.pinimg.com/736x/5e/f0/fe/5ef0feba8ab3a7baaeee195b9dc7843c.jpg",
    icon: Wrench,
  },
  {
    id: 2,
    title: "Safety & PPE",
    description: "Safety Helmets • Safety Shoes • Hand Gloves",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&auto=format&fit=crop&q=80",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Lubricants & Chemicals",
    description: "Greases • Industrial Oils • Cleaning Chemicals",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
    icon: Droplets,
  },
  {
    id: 4,
    title: "Bearing & Power Transmission",
    description: "Ball Bearings • Belts • Couplings",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80",
    icon: Cog,
  },
  {
    id: 5,
    title: "Material Handling",
    description: "Trolleys • Pallet Trucks • Lifting Equipment",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&auto=format&fit=crop&q=80",
    icon: Forklift,
  },
];

export default function MRO() {
  return (
    <>
     {/* Existing Category Grid */}
      <CategoryGrid
        title="MRO"
        eyebrow="Maintenance, Repair & Operations"
        subtitle="Wide range of Maintenance, Repair & Operations products for every industrial need."
        categories={mroCategories}
      />
      

     
    </>
  );
}
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
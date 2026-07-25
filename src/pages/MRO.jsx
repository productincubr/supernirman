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
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
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
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80",
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
      {/* Explore Categories */}
      <section className="max-w-7xl mx-auto px-4 lg:px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#0F172A]">
            Explore Our MRO Categories
          </h2>

          <p className="mt-3 text-gray-500 text-lg">
            Everything your business needs to keep operations running efficiently.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {exploreCategories.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Icon */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <Icon size={18} className="text-blue-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 pb-6">
                  <h3 className="text-[20px] font-bold text-slate-900 leading-7">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-7 text-gray-500">
                    {item.description}
                  </p>

                  <button className="mt-5 inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition">
                    View Products
                    <ArrowRight size={18} />
                  </button>
                </div>

                {/* Bottom Blue Border */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-blue-600"></div>
              </div>
            );
          })}
        </div>
      </section>

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
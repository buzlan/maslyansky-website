import React from "react";
import { Link } from "react-router-dom";

interface ServiceCard {
  id: string;
  title: string;
  image: string;
  link: string;
}

const services: ServiceCard[] = [
  {
    id: "evlk",
    title: "ЭВЛК Лазерная эндовенозная коагуляция вен под контролем УЗИ",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    link: "/services/evlk",
  },
  {
    id: "sclerotherapy",
    title: "Склеротерапия",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    link: "/services/sclerotherapy",
  },
  {
    id: "varicose",
    title: "Лечение варикозного расширения вен",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
    link: "/services/varicose",
  },
  {
    id: "spider-veins",
    title: "Лечение сосудистых звездочек",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
    link: "/services/spider-veins",
  },
];

const ServicesGrid: React.FC = () => {
  return (
    <section id="services-grid" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-[#1C2A44] mb-12">
          Услуги отделения
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.link}
              className="group relative overflow-hidden rounded-3xl shadow-xl border border-gray-200 bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-semibold text-base md:text-lg leading-tight drop-shadow-lg">
                  {service.title}
                </h3>
              </div>

              <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                <span className="text-[#1C2A44] text-xl font-bold">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;


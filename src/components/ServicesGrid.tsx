import React from "react";

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
    image: "/api/placeholder/400/300",
    link: "/services/evlk",
  },
  {
    id: "clacs",
    title: "КЛаКс лазерное удаление сосудистых образований",
    image: "/api/placeholder/400/300",
    link: "/services/clacs",
  },
  {
    id: "sclerotherapy",
    title: "Склеротерапия",
    image: "/api/placeholder/400/300",
    link: "/services/sclerotherapy",
  },
  {
    id: "varicose",
    title: "Лечение варикозного расширения вен",
    image: "/api/placeholder/400/300",
    link: "/services/varicose",
  },
  {
    id: "spider-veins",
    title: "Лечение сосудистых звездочек",
    image: "/api/placeholder/400/300",
    link: "/services/spider-veins",
  },
  {
    id: "phlebectomy",
    title: "Миниинвазивная флебэктомия",
    image: "/api/placeholder/400/300",
    link: "/services/phlebectomy",
  },
];

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-[#1C2A44] mb-12">
          Услуги отделения
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <a
              key={service.id}
              href={service.link}
              className="group relative overflow-hidden rounded-3xl shadow-xl border border-gray-200 bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Изображение услуги</span>
                </div>
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;


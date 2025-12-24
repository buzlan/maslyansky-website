import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#f9f8f6]">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-[60%_40%] gap-12 items-start">

        <div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C2A44] mb-8">
            О враче
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Маслянский Вячеслав Борисович — врач-флеболог, занимающийся
            лечением варикозной болезни, сосудистых "сеточек", хронической
            венозной недостаточности, отёков и тяжести в ногах.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Внимательно разбирает жалобы, особенности образа жизни и наследственные
            факторы. Объясняет пациенту, что происходит с венами и какие варианты
            лечения подходят именно ему.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            В работе придерживается современного доказательного подхода с акцентом
            на профилактику осложнений и улучшение качества жизни.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-white/70 p-8">
          <h3 className="font-semibold text-lg text-[#1C2A44] mb-4">
            Направления работы
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li>• Диагностика варикозной болезни</li>
            <li>• Лечение сосудистых "звёздочек"</li>
            <li>• Профилактика венозной недостаточности</li>
            <li>• Наблюдение после тромбоза</li>
            <li>• Подбор компрессионного трикотажа</li>
          </ul>

          <hr className="my-6 border-gray-200" />

          <p className="text-gray-500 text-sm">
            Приём по предварительной записи
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;

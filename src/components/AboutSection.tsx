import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#f9f8f6]">
      <div className="max-w-7xl mx-auto px-4">

        <div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C2A44] mb-8">
            Направления работы
          </h2>

          <div className="bg-white rounded-3xl shadow-xl border border-white/70 p-8">
            <ul className="space-y-3 text-gray-700">
              <li>• Диагностика и лечение варикозной болезни</li>
              <li>• Лечение телеангиоэктазий («сосудистых звёздочек» и «капиллярных сеток»)</li>
              <li>• Лечение венозных тромбозов и динамическое наблюдение</li>
              <li>• Подбор компрессионного трикотажа</li>
              <li>• Комплексная профилактика лимфо-венозной недостаточности</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;

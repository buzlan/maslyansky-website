import React from "react";

const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-24 bg-[#f9f8f6]">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="font-serif text-4xl md:text-5xl text-[#1C2A44] mb-6">
          Подход к лечению
        </h2>

        <p className="text-gray-700 text-lg max-w-3xl leading-relaxed mb-16">
          Задача флеболога — не только устранить эстетические или физические проявления варикоза,
          но и обеспечить долгосрочный результат, снизить риск осложнений и улучшить качество жизни пациента.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-white/70">
            <h3 className="text-lg font-semibold text-[#1C2A44] mb-3">
              Доказательная медицина
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Работа строго по современным российским и международным клиническим рекомендациям и протоколам.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-white/70">
            <h3 className="text-lg font-semibold text-[#1C2A44] mb-3">
              Индивидуальный подход
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Терапия подбирается с учётом особенностей пациента,
              образа жизни и сопутствующих заболеваний.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-white/70">
            <h3 className="text-lg font-semibold text-[#1C2A44] mb-3">
              Доступное объяснение
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Пациент должен понимать, что происходит с венами и почему назначается тот или иной метод лечения.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Approach;

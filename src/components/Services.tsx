import React from "react";

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="font-serif text-4xl md:text-5xl text-[#1C2A44] mb-6">
          Услуги и направления работы
        </h2>

        <p className="text-gray-700 text-lg mb-12 max-w-3xl">
          Современная диагностика и лечение заболеваний вен: от первичной консультации до профилактики.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-white/70">
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
              Консультации
            </p>

            <h3 className="text-lg font-semibold text-[#1C2A44] mb-4">
              Первичная консультация флеболога
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Подробный разбор жалоб, осмотр вен, формирование предварительного диагноза и рекомендаций.
            </p>

            <ul className="text-gray-700 space-y-2">
              <li>• анализ факторов риска;</li>
              <li>• оценка венозной системы;</li>
              <li>• рекомендации по режиму и активности.</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-white/70">
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
              Наблюдение
            </p>

            <h3 className="text-lg font-semibold text-[#1C2A44] mb-4">
              Повторный и контрольный приём
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Оценка динамики, коррекция схемы лечения, ответы на вопросы пациента.
            </p>

            <ul className="text-gray-700 space-y-2">
              <li>• оценка эффективности терапии;</li>
              <li>• корректировка рекомендаций;</li>
              <li>• профилактическое наблюдение.</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-white/70">
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
              Лечение
            </p>

            <h3 className="text-lg font-semibold text-[#1C2A44] mb-4">
              План терапии и профилактика
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Подбор тактики лечения, препаратов, компрессионного трикотажа и мер профилактики.
            </p>

            <ul className="text-gray-700 space-y-2">
              <li>• индивидуальная схема терапии;</li>
              <li>• рекомендации по физической активности;</li>
              <li>• профилактика обострений.</li>
            </ul>
          </div>

        </div>

        <p className="text-gray-500 text-sm mt-6">
          План лечения формируется индивидуально на очной консультации.
        </p>

      </div>
    </section>
  );
};

export default Services;

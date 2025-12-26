import React from "react";

const WhenToSee: React.FC = () => {
  return (
    <section id="when" className="py-20">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="font-serif text-4xl md:text-5xl text-[#1C2A44] mb-8">
          Когда стоит обратиться
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-3xl">
          Чем раньше выявлено нарушение венозного оттока — тем проще лечение
          и ниже риск осложнений.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">

          <div className="bg-white shadow-xl border border-white/70 rounded-3xl p-8">
            <h3 className="font-semibold text-lg text-[#1C2A44] mb-4">
              Видимые изменения
            </h3>

            <ul className="text-gray-700 space-y-2">
              <li>• Варикозные узлы</li>
              <li>• Телеангиоэктазии («сосудистые звёздочки» и «капиллярные сетки»)</li>
              <li>• Пигментация (участки потемнения кожи)</li>
            </ul>
          </div>

          <div className="bg-white shadow-xl border border-white/70 rounded-3xl p-8">
            <h3 className="font-semibold text-lg text-[#1C2A44] mb-4">
              Неприятные ощущения
            </h3>

            <ul className="text-gray-700 space-y-2">
              <li>• Отёки и тяжесть в ногах</li>
              <li>• Судороги</li>
              <li>• Боль</li>
              <li>• Парестезии (жжение, онемение)</li>
            </ul>
          </div>

        </div>

        <div className="bg-white shadow-xl border border-white/70 rounded-3xl p-8">
          <h3 className="font-semibold text-lg text-[#1C2A44] mb-4">
            Факторы риска
          </h3>

          <ul className="text-gray-700 space-y-2 grid md:grid-cols-2 gap-x-8">
            <li>• Отягощенная наследственность</li>
            <li>• Работа, связанная с длительным стоянием или сидением</li>
            <li>• Беременность</li>
            <li>• Возраст</li>
            <li>• Избыточная масса тела</li>
            <li>• Прием гормональных препаратов</li>
            <li>• Перенесённый венозный тромбоз</li>
            <li>• Частые перелеты и длительные поездки</li>
            <li>• Травмы и операции</li>
            <li>• Врожденные аномалии и дефициты</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhenToSee;

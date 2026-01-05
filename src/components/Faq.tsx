import React, { useState } from "react";

const faq = [
  {
    q: "Обязательно ли оперировать варикоз?",
    a: "Не всегда. Всё зависит от стадии заболевания. В ряде случаев достаточно консервативного лечения и наблюдения."
  },
  {
    q: "Помогут ли мази и таблетки?",
    a: "Они способны уменьшать симптомы, но не устраняют первопричину. Важно комплексное лечение и контроль у специалиста."
  },
  {
    q: "Нужен ли компрессионный трикотаж?",
    a: "Да, во многих случаях это обязательный элемент терапии. Тип и степень компрессии подбираются индивидуально."
  },
  {
    q: "Можно ли заниматься спортом?",
    a: "Обычно умеренная активность полезна. Лучшие варианты — ходьба, плавание, лёгкие динамические нагрузки."
  }
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        
        <h2 className="font-serif text-4xl md:text-5xl text-[#1C2A44] mb-10">
          Часто задаваемые вопросы
        </h2>

        <div className="space-y-4">
          {faq.map((item, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 ${
                openIndex === i ? 'shadow-md border-[#C5A572]/30' : ''
              }`}
            >
              <button
                onClick={() => toggleQuestion(i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-all duration-300 active:scale-[0.99]"
              >
                <p className={`font-semibold text-[#1C2A44] pr-4 transition-colors duration-300 ${
                  openIndex === i ? 'text-[#C5A572]' : ''
                }`}>{item.q}</p>
                <span className={`text-[#1C2A44] text-xl transition-all duration-300 flex-shrink-0 ${
                  openIndex === i ? 'rotate-180 text-[#C5A572]' : ''
                }`}>
                  ▼
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className={`px-6 pb-6 pt-0 transition-all duration-500 ${
                  openIndex === i ? 'translate-y-0' : '-translate-y-2'
                }`}>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faq;

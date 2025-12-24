import React from "react";

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
  return (
    <section id="faq" className="py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        
        <h2 className="font-serif text-4xl md:text-5xl text-[#1C2A44] mb-10">
          Часто задаваемые вопросы
        </h2>

        <div className="space-y-6">
          {faq.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
            >
              <p className="font-semibold text-[#1C2A44] mb-2">{item.q}</p>
              <p className="text-gray-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faq;

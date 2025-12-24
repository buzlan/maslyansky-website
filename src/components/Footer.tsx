import React from "react";
import YandexMap from "./YandexMap";
import { useWeather } from "./weather.hook";

const Footer: React.FC = () => {
  const data = useWeather('fromFooter');
  console.log('data from Footer', data);
  return (
    <footer className="border-t border-gray-200 bg-[#f9f8f6] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">

        <div>
          <h3 className="font-serif text-2xl text-[#1C2A44] mb-2">
            Маслянский Вячеслав Борисович
          </h3>

          <p className="text-gray-500 mb-4">врач-флеболог</p>

          <p className="text-gray-700 leading-relaxed mb-4 max-w-md">
            Диагностика и лечение заболеваний вен. Индивидуальный подход,
            современная флебология и уважение к каждому пациенту. (Updated 24.12.2025)
          </p>

          <p className="text-gray-700 mb-2">
            <strong>Телефон:</strong> +7 (495) 123-45-67
          </p>

          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> example@example.com
          </p>

          <p className="text-gray-700">
            <strong>Адрес:</strong> Московская область, г. Одинцово
          </p>
        </div>

        <YandexMap />

      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        © 2025 Все права защищены
      </div>
    </footer>
  );
};

export default Footer;

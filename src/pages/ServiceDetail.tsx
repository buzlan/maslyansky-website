import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Service {
  id: string;
  title: string;
  image: string;
  description: string;
  details: string[];
}

const servicesData: Service[] = [
  {
    id: "evlk",
    title: "ЭВЛК Лазерная эндовенозная коагуляция вен под контролем УЗИ",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop",
    description: "Современный метод лечения варикозной болезни, основанный на воздействии лазерного излучения на стенку вены изнутри. Процедура выполняется под контролем ультразвукового исследования.",
    details: [
      "Минимально инвазивная процедура",
      "Выполняется под местной анестезией",
      "Быстрое восстановление после процедуры",
      "Высокая эффективность лечения",
      "Минимальный риск осложнений",
    ],
  },
  {
    id: "clacs",
    title: "КЛаКс лазерное удаление сосудистых образований",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=500&fit=crop",
    description: "Инновационный метод удаления сосудистых звёздочек и капиллярных сеток с помощью лазерного излучения. Безболезненная процедура с отличным косметическим эффектом.",
    details: [
      "Безболезненная процедура",
      "Короткое время сеанса",
      "Отличный косметический результат",
      "Без реабилитационного периода",
      "Подходит для чувствительной кожи",
    ],
  },
  {
    id: "sclerotherapy",
    title: "Склеротерапия",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop",
    description: "Классический метод лечения варикозного расширения вен путём введения специального препарата (склерозанта) в просвет вены. Эффективен для мелких и средних варикозных вен.",
    details: [
      "Проверенная временем методика",
      "Эффективна для мелких и средних вен",
      "Короткая процедура",
      "Минимальный дискомфорт",
      "Хорошие отдаленные результаты",
    ],
  },
  {
    id: "varicose",
    title: "Лечение варикозного расширения вен",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop",
    description: "Комплексный подход к лечению варикозной болезни с использованием современных методов. Индивидуальный подбор тактики лечения для каждого пациента.",
    details: [
      "Индивидуальный подход к каждому пациенту",
      "Использование современных методик",
      "Комплексное лечение",
      "Профилактика рецидивов",
      "Длительное наблюдение",
    ],
  },
  {
    id: "spider-veins",
    title: "Лечение сосудистых звездочек",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=500&fit=crop",
    description: "Эффективное удаление телеангиоэктазий (сосудистых звёздочек) с помощью различных методик. Восстановление эстетики кожи и профилактика прогрессирования.",
    details: [
      "Удаление мелких сосудистых образований",
      "Быстрая процедура",
      "Отличный косметический эффект",
      "Минимальные побочные эффекты",
      "Комфортное восстановление",
    ],
  },
  {
    id: "phlebectomy",
    title: "Миниинвазивная флебэктомия",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop",
    description: "Хирургический метод удаления варикозно расширенных вен через минимальные разрезы. Применяется при невозможности использования других методов лечения.",
    details: [
      "Минимальные разрезы",
      "Быстрая реабилитация",
      "Высокая эффективность",
      "Применяется под местной анестезией",
      "Отличные отдаленные результаты",
    ],
  },
];

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F6F3]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1C2A44] mb-4">Услуга не найдена</h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-full bg-[#1C2A44] text-white font-semibold hover:shadow-lg transition"
          >
            Вернуться на главную
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F3]">
      <Header />
      <main className="flex-1 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <button
            onClick={() => navigate("/")}
            className="mb-8 text-[#1C2A44] hover:text-[#C5A572] transition-colors flex items-center gap-2"
          >
            <span>←</span> Назад к услугам
          </button>

          <div className="bg-white rounded-3xl shadow-xl border border-white/70 overflow-hidden mb-8">
            <div className="relative h-96 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-white/70 p-8 md:p-12">
            <h1 className="font-serif text-3xl md:text-4xl text-[#1C2A44] mb-6">
              {service.title}
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {service.description}
            </p>

            <h2 className="font-semibold text-xl text-[#1C2A44] mb-4">
              Особенности процедуры:
            </h2>

            <ul className="space-y-3 text-gray-700">
              {service.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <a
                href="/#contacts"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                  setTimeout(() => {
                    const contactsElement = document.getElementById("contacts");
                    if (contactsElement) {
                      contactsElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 100);
                }}
                className="inline-block px-8 py-4 rounded-full bg-[#1C2A44] text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                Записаться на консультацию
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;


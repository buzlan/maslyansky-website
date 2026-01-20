import React, { useEffect, useState, useRef } from "react";

interface PhotoSlide {
  image: string;
  caption: string;
}

const WhenToSee: React.FC = () => {
  const photos: PhotoSlide[] = [
    {
      image: "/images/factor-risk-pregnancy.png",
      caption: "Беременность как фактор риска развития варикоза"
    },
    {
      image: "/images/factor-risk-travel.jpeg",
      caption: "Длительные перелеты и поездки"
    },
    {
      image: "/images/factor-risk-obesity.jpeg",
      caption: "Избыточная масса тела и ожирение"
    }
  ];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (photos.length <= 1) return;

    // Очищаем предыдущий интервал
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Запускаем новый интервал
    intervalRef.current = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 5000);

    // Очистка при размонтировании или изменении зависимостей
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentPhotoIndex, photos.length]);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

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

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Левая часть - карточки */}
          <div className="md:col-span-2 space-y-8">
            {/* Верхние две карточки */}
            <div className="grid md:grid-cols-2 gap-8">
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

            {/* Факторы риска - на всю ширину */}
            <div className="bg-white shadow-xl border border-white/70 rounded-3xl p-8">
              <h3 className="font-semibold text-lg text-[#1C2A44] mb-6 text-center">
                Факторы риска
              </h3>

              <ul className="text-gray-700 space-y-2 grid md:grid-cols-2 gap-x-8 gap-y-2">
                <li>• Отягощенная наследственность</li>
                <li>• Врожденные аномалии и дефициты</li>
                <li>• Беременность</li>
                <li>• Возраст</li>
                <li>• Избыточная масса тела</li>
                <li>• Прием гормональных препаратов</li>
                <li>• Перенесённый венозный тромбоз</li>
                <li>• Частые перелеты и длительные поездки</li>
                <li>• Травмы и операции</li>
                <li>• Работа, связанная с длительным стоянием или сидением</li>
              </ul>
            </div>
          </div>

          {/* Правая часть - фото */}
          <div className="flex justify-center md:justify-start h-full">
            <div className="bg-white rounded-3xl shadow-xl border border-white/70 overflow-hidden w-full max-w-[400px] relative flex flex-col">
              <div className="bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 flex items-center justify-center relative overflow-hidden" style={{ height: '500px' }}>
                <img
                  src={photos[currentPhotoIndex].image}
                  alt={photos[currentPhotoIndex].caption}
                  className="w-full h-full object-cover transition-opacity duration-500"
                  style={{ objectPosition: 'center' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/400x500/E5E7EB/9CA3AF?text=Фото+${currentPhotoIndex + 1}`;
                  }}
                />
              </div>

              {photos.length > 1 && (
                <>
                  <button
                    onClick={prevPhoto}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
                    aria-label="Предыдущее фото"
                  >
                    <span className="text-[#1C2A44] text-xl font-bold">←</span>
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
                    aria-label="Следующее фото"
                  >
                    <span className="text-[#1C2A44] text-xl font-bold">→</span>
                  </button>
                </>
              )}

              <div className="p-6 flex-shrink-0">
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {photos[currentPhotoIndex].caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhenToSee;

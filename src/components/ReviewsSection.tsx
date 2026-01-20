import React from "react";
import qrCode from "../images/qr.png";

const ReviewsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#f9f8f6]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-[#1C2A44] mb-8">
          Оставьте отзыв
        </h2>

        <div className="bg-white rounded-3xl shadow-xl border border-white/70 p-8 md:p-12">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-3xl">
                Ваше мнение очень важно для нас. Поделитесь впечатлениями о приёме, и это поможет другим пациентам принять решение.
              </p>

              <a
                href="https://prodoctorov.ru/moskva/vrach/1316162-maslyanskiy/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1C2A44] text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                Оставить отзыв
                <span className="text-lg">→</span>
              </a>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200">
                <img
                  src={qrCode}
                  alt="QR код для оставления отзыва"
                  className="w-48 h-48 object-contain"
                />
                <p className="text-xs text-gray-500 text-center mt-2">
                  Отсканируйте для отзыва
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;


import React from "react";

const Header: React.FC = () => {

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl shadow-[0_2px_6px_rgba(0,0,0,0.04)] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          <a href="#top" className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-[#1C2A44] text-white flex items-center justify-center text-sm font-semibold shadow">
              МВ
            </div>

            <div className="leading-tight">
              <div className="font-serif text-[18px] text-[#1C2A44] font-semibold">
                Маслянский Вячеслав Борисович
              </div>
              <div className="text-xs text-gray-500 tracking-wide">
                врач-флеболог
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-[#1C2A44]">

            <a href="#about" className="hover:text-[#C5A572] transition-colors">
              О враче
            </a>

            <div className="relative group">
              <button className="inline-flex items-center gap-1 hover:text-[#C5A572] transition-colors">
                Услуги
                <span className="text-xs">▼</span>
              </button>

              <div className="absolute left-0 mt-2 w-52 rounded-xl bg-white shadow-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#when" className="block px-4 py-2 hover:bg-gray-50">
                  Когда обращаться
                </a>
                <a href="#services" className="block px-4 py-2 hover:bg-gray-50">
                  Диагностика и лечение
                </a>
                <a href="#approach" className="block px-4 py-2 hover:bg-gray-50">
                  Подход
                </a>
                <a href="#faq" className="block px-4 py-2 hover:bg-gray-50">
                  FAQ
                </a>
              </div>
            </div>

            <a href="#contacts" className="hover:text-[#C5A572] transition-colors">
              Контакты
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://prodoctorov.ru/moskva/vrach/1316162-maslyanskiy/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#1C2A44] text-[#1C2A44] px-6 py-2.5 text-sm font-semibold hover:bg-[#1C2A44] hover:text-white transition"
            >
              Отзыв
            </a>
            <a
              href="#contacts"
              className="rounded-full bg-[#C5A572] text-white px-6 py-2.5 text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
            >
              Запись
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;

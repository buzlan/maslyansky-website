import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import person from "../images/person.jpeg";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const contactsElement = document.getElementById("contacts");
        if (contactsElement) {
          contactsElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const contactsElement = document.getElementById("contacts");
      if (contactsElement) {
        contactsElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="top"
      className="hero-bg pt-16 md:pt-24 pb-20 md:pb-28"
    >
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-[60%_40%] gap-12 items-start">
        
        <div>
          <p className="inline-flex items-center gap-2 bg-white/80 px-4 py-1 rounded-full text-gray-600 text-sm shadow">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Приём врача-флеболога
          </p>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1C2A44] mt-4 mb-6 leading-tight">
            <span className="block">Врач флеболог в Москве</span>
            <span className="block">Маслянский Вячеслав Борисович</span>
          </h1>

          <div className="text-gray-700 text-base md:text-lg max-w-lg mb-6 space-y-4">
            <p>
              <strong>Врач флеболог в Москве</strong> — Маслянский Вячеслав Борисович специализируется на диагностике и лечении острых и хронических заболеваний вен. Опытный <strong>флеболог в Москве</strong> с современным подходом к лечению варикозного расширения вен.
            </p>
            <p>
              Как <strong>врач флеболог</strong>, использую современные методики и индивидуальную тактику лечения. Работаю в Москве, принимаю пациентов с различными заболеваниями вен.
            </p>
            <p>
              Внимательно разбираю жалобы, особенности образа жизни и наследственные факторы. <strong>Флеболог в Москве</strong> с индивидуальным подходом к каждому пациенту.
            </p>
            <p>
              Доступно объясняю пациенту, что происходит с венами и какие варианты лечения подходят именно ему. <strong>Врач флеболог Москва</strong> — это не только лечение, но и профилактика осложнений.
            </p>
            <p>
              В работе придерживаюсь современного доказательного подхода с акцентом на профилактику осложнений и улучшение качества жизни. <strong>Лучший флеболог в Москве</strong> — это специалист, который заботится о долгосрочном результате.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#contacts"
              onClick={handleContactsClick}
              className="px-6 py-3 rounded-full bg-[#1C2A44] text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
            >
              Записаться
            </a>

            <a
              href="#when"
              className="px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-700 font-medium hover:border-[#C5A572] hover:text-[#1C2A44] transition"
            >
              Когда обращаться
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end md:mt-10">
            <div className="bg-white rounded-3xl shadow-xl border border-white/70 overflow-hidden w-[320px] md:w-[380px] lg:w-[420px]">
            <div className="w-full bg-white flex justify-center">
              <img
                src={person}
                alt="Маслянский Вячеслав Борисович"
                className="w-full object-contain"
              />
            </div>

            <div className="p-6">
              <p className="font-serif text-xl text-[#1C2A44] mt-1">
                Маслянский Вячеслав Борисович
              </p>

              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              Врач-флеболог, Член Ассоциации Флебологов России, Член Белорусской  Ассоциации ангиологов и сосудистых хирургов.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

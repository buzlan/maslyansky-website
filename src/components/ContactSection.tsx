import React, { useEffect, useMemo, useState } from "react";

interface Country {
  code: string;
  name: string;
  flag: string;
  phoneCode: string;
  mask: string;
  placeholder: string;
}

const countries: Country[] = [
  { code: "RU", name: "Россия", flag: "🇷🇺", phoneCode: "+7", mask: "+7 (###) ###-##-##", placeholder: "+7 (999) 123-45-67" },
  { code: "BY", name: "Беларусь", flag: "🇧🇾", phoneCode: "+375", mask: "+375 (##) ###-##-##", placeholder: "+375 (29) 123-45-67" },
  { code: "KZ", name: "Казахстан", flag: "🇰🇿", phoneCode: "+7", mask: "+7 (###) ###-##-##", placeholder: "+7 (777) 123-45-67" },
  { code: "AM", name: "Армения", flag: "🇦🇲", phoneCode: "+374", mask: "+374 (##) ###-###", placeholder: "+374 (91) 123-456" },
  { code: "GE", name: "Грузия", flag: "🇬🇪", phoneCode: "+995", mask: "+995 (###) ###-###", placeholder: "+995 (555) 123-456" },
];

const ContactSection: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", personalData: false, newsletter: false });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [fadeOut, setFadeOut] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const fallbackEmail = "igorbuzlanov44@gmail.com";
  const toEmail = useMemo(() => import.meta.env.VITE_NOTIFICATION_EMAIL || fallbackEmail, []);

  const isEmailConfigured = Boolean(serviceId && templateId && publicKey);

  useEffect(() => {
    if (status !== "success") return;
    setFadeOut(false);

    const fadeTimer = setTimeout(() => setFadeOut(true), 3200);
    const hideTimer = setTimeout(() => setStatus("idle"), 4000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [status]);

  const formatPhoneNumber = (value: string, country: Country): string => {
    // Убираем все нецифровые символы кроме +
    let digits = value.replace(/[^\d+]/g, "");
    
    // Если начинается с кода страны, оставляем его
    if (digits.startsWith(country.phoneCode.replace("+", ""))) {
      digits = country.phoneCode + digits.slice(country.phoneCode.length);
    } else if (!digits.startsWith("+")) {
      digits = country.phoneCode + digits;
    }

    // Убираем + для форматирования
    const numbers = digits.replace(/\+/g, "").replace(country.phoneCode.replace("+", ""), "");
    
    // Применяем маску в зависимости от страны
    if (country.code === "RU" || country.code === "KZ") {
      // +7 (XXX) XXX-XX-XX
      if (numbers.length <= 3) {
        return country.phoneCode + (numbers ? ` (${numbers}` : "");
      } else if (numbers.length <= 6) {
        return country.phoneCode + ` (${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
      } else if (numbers.length <= 8) {
        return country.phoneCode + ` (${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`;
      } else {
        return country.phoneCode + ` (${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 8)}-${numbers.slice(8, 10)}`;
      }
    } else if (country.code === "BY") {
      // +375 (XX) XXX-XX-XX
      if (numbers.length <= 2) {
        return country.phoneCode + (numbers ? ` (${numbers}` : "");
      } else if (numbers.length <= 5) {
        return country.phoneCode + ` (${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
      } else if (numbers.length <= 7) {
        return country.phoneCode + ` (${numbers.slice(0, 2)}) ${numbers.slice(2, 5)}-${numbers.slice(5)}`;
      } else {
        return country.phoneCode + ` (${numbers.slice(0, 2)}) ${numbers.slice(2, 5)}-${numbers.slice(5, 7)}-${numbers.slice(7, 9)}`;
      }
    } else if (country.code === "AM") {
      // +374 (XX) XXX-###
      if (numbers.length <= 2) {
        return country.phoneCode + (numbers ? ` (${numbers}` : "");
      } else if (numbers.length <= 5) {
        return country.phoneCode + ` (${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
      } else {
        return country.phoneCode + ` (${numbers.slice(0, 2)}) ${numbers.slice(2, 5)}-${numbers.slice(5, 8)}`;
      }
    } else if (country.code === "GE") {
      // +995 (###) ###-###
      if (numbers.length <= 3) {
        return country.phoneCode + (numbers ? ` (${numbers}` : "");
      } else if (numbers.length <= 6) {
        return country.phoneCode + ` (${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
      } else {
        return country.phoneCode + ` (${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 9)}`;
      }
    }
    
    return digits;
  };

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsCountryDropdownOpen(false);
    // Очищаем поле телефона при смене страны
    setForm((prev) => ({ ...prev, phone: country.phoneCode + " " }));
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const formatted = formatPhoneNumber(value, selectedCountry);
    setForm((prev) => ({ ...prev, phone: formatted }));
  };

  const handleChange = (field: "name" | "phone" | "email" | "message") => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (field === "phone") {
      handlePhoneChange(event as React.ChangeEvent<HTMLInputElement>);
    } else {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    }
  };

  const handleCheckboxChange = (field: "personalData" | "newsletter") => (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.checked }));
  };

  const validateEmail = (email: string): boolean => {
    return email.includes("@") && email.length > 3;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("idle");
    setError(null);

    if (!form.name || !form.phone || !form.email || !form.message) {
      setError("Заполните все поля формы.");
      return;
    }

    if (!validateEmail(form.email)) {
      setError("Введите корректный email адрес.");
      return;
    }

    if (!form.personalData) {
      setError("Необходимо согласие на обработку персональных данных.");
      return;
    }

    if (!isEmailConfigured) {
      setError("Отправка временно недоступна. Настройте почтовый сервис.");
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            to_email: toEmail,
            user_name: form.name,
            user_phone: form.phone,
            user_email: form.email,
            message: form.message,
            personal_data: form.personalData ? "Да" : "Нет",
            newsletter: form.newsletter ? "Да" : "Нет",
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка отправки формы");
      }

      setStatus("success");
      setForm({ name: "", phone: "", email: "", message: "", personalData: false, newsletter: false });
      setSelectedCountry(countries[0]);
    } catch (err) {
      setStatus("error");
      setError("Не удалось отправить сообщение. Попробуйте позже.");
      console.error(err);
    }
  };

  return (
    <section id="contacts" className="py-24 bg-[#f9f8f6]">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C2A44] mb-6">
            Контакты и запись
          </h2>

          <p className="text-gray-700 text-lg mb-8 max-w-lg leading-relaxed">
            Вы можете записаться на приём к Маслянскому Вячеславу Борисовичу по телефону.
          </p>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-white/70">

            <div className="mb-6">
              <p className="text-xs uppercase text-gray-500 mb-1">Телефон</p>
              <p className="text-lg font-medium text-[#1C2A44]">
                +7(495)260-20-02
              </p>
            </div>

            <div className="mb-6">
              <p className="text-xs uppercase text-gray-500 mb-1">Клиника</p>
              <p className="text-gray-700">
                Варикоза Нет
              </p>
            </div>

            <div className="mb-6">
              <p className="text-xs uppercase text-gray-500 mb-1">Адрес</p>
              <p className="text-gray-700 leading-relaxed">
                г. Москва, Пресненский вал 16, стр. 3<br />
                (метро "улица 1905 года")
              </p>
            </div>

            <div>
              <p className="text-xs uppercase text-gray-500 mb-1">Время работы</p>
              <p className="text-gray-700">
                с 9-00 до 21-00
              </p>
            </div>

          </div>
        </div>

        <div>
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-white/70">

            <h3 className="text-xl font-semibold text-[#1C2A44] mb-2">
              Обратная связь
            </h3>

            <p className="text-gray-600 text-sm mb-6">
              Оставьте заявку, и мы отправим уведомление на почту врача.
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>

              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={handleChange("name")}
                  className="w-full border rounded-xl px-4 py-3 bg-gray-50 focus:bg-white focus:border-[#C5A572] outline-none transition"
                />
              </div>

              <div className="relative">
                <div className="flex">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                      className="flex items-center gap-2 px-4 py-3 border border-r-0 rounded-l-xl bg-gray-50 hover:bg-gray-100 focus:bg-white focus:border-[#C5A572] outline-none transition"
                    >
                      <span className="text-xl">{selectedCountry.flag}</span>
                      <span className="text-sm text-gray-700">{selectedCountry.phoneCode}</span>
                      <span className="text-gray-400">▼</span>
                    </button>
                    
                    {isCountryDropdownOpen && (
                      <>
                        <div 
                          className="fixed inset-0 z-10" 
                          onClick={() => setIsCountryDropdownOpen(false)}
                        />
                        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-gray-200 z-20 max-h-60 overflow-y-auto">
                          {countries.map((country) => (
                            <button
                              key={country.code}
                              type="button"
                              onClick={() => handleCountrySelect(country)}
                              className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors ${
                                selectedCountry.code === country.code ? "bg-gray-50" : ""
                              }`}
                            >
                              <span className="text-xl">{country.flag}</span>
                              <span className="flex-1 text-left text-sm text-gray-700">{country.name}</span>
                              <span className="text-sm text-gray-500">{country.phoneCode}</span>
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder={selectedCountry.placeholder}
                    value={form.phone}
                    onChange={handleChange("phone")}
                    className="flex-1 border rounded-r-xl px-4 py-3 bg-gray-50 focus:bg-white focus:border-[#C5A572] outline-none transition"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange("email")}
                  className="w-full border rounded-xl px-4 py-3 bg-gray-50 focus:bg-white focus:border-[#C5A572] outline-none transition"
                />
              </div>

              <div>
                <textarea
                  rows={4}
                  placeholder="Опишите вашу ситуацию"
                  value={form.message}
                  onChange={handleChange("message")}
                  className="w-full border rounded-xl px-4 py-3 bg-gray-50 focus:bg-white focus:border-[#C5A572] outline-none transition"
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.personalData}
                    onChange={handleCheckboxChange("personalData")}
                    className="mt-1 w-4 h-4 text-[#1C2A44] border-gray-300 rounded focus:ring-[#C5A572] cursor-pointer"
                  />
                  <span className="text-sm text-gray-700">
                    Согласен на обработку персональных данных
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.newsletter}
                    onChange={handleCheckboxChange("newsletter")}
                    className="mt-1 w-4 h-4 text-[#1C2A44] border-gray-300 rounded focus:ring-[#C5A572] cursor-pointer"
                  />
                  <span className="text-sm text-gray-700">
                    Хочу получать рассылку на почту
                  </span>
                </label>
              </div>

              {error && (
                <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                  {error}
                </div>
              )}

              {status === "success" && (
                <div
                  className={`text-sm text-green-700 bg-green-50 border border-green-100 rounded-lg px-4 py-3 transition-all duration-700 ${
                    fadeOut ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
                  }`}
                >
                  Сообщение отправлено. Мы свяжемся с вами в ближайшее время.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#1C2A44] text-white py-3 rounded-xl font-semibold hover:-translate-y-0.5 transition shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Отправляем..." : "Отправить"}
              </button>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;

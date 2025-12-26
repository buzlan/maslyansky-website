import React, { useEffect, useMemo, useState } from "react";

const ContactSection: React.FC = () => {
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

  const handleChange = (field: "name" | "phone" | "email" | "message") => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
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
            Вы можете уточнить время приёма или оставить заявку на обратный звонок.
            Мы свяжемся с вами в ближайшее время.
          </p>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-white/70">

            <div className="mb-6">
              <p className="text-xs uppercase text-gray-500 mb-1">Телефон</p>
              <p className="text-lg font-medium text-[#1C2A44]">
                +375 (29) 123-45-67
              </p>
            </div>

            <div className="mb-6">
              <p className="text-xs uppercase text-gray-500 mb-1">Email</p>
              <p className="text-gray-700 break-words">{toEmail}</p>
            </div>

            <div>
              <p className="text-xs uppercase text-gray-500 mb-1">Адрес</p>
              <p className="text-gray-700 leading-relaxed">
                г. Город, ул. Примерная, 10<br />
                (Ориентир: поликлиника, удобная парковка)
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

              <div>
                <input
                  type="text"
                  placeholder="+375…"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  className="w-full border rounded-xl px-4 py-3 bg-gray-50 focus:bg-white focus:border-[#C5A572] outline-none transition"
                />
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

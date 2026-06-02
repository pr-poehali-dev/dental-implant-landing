import { useState } from "react";
import Icon from "@/components/ui/icon";

const FormSection = () => {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-clinic-dark" id="form">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-clinic-blue text-sm font-medium uppercase tracking-widest mb-3">Запись</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Запишитесь на бесплатную консультацию
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Оставьте контакты — администратор свяжется с вами в течение 15 минут и ответит на все вопросы. Без обязательств и давления.
            </p>

            <div className="space-y-4">
              {[
                { icon: "Gift", text: "Консультация бесплатно" },
                { icon: "ScanLine", text: "КТ в подарок при записи с сайта" },
                { icon: "Clock", text: "Ответим в течение 15 минут" },
                { icon: "Lock", text: "Ваши данные защищены" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as "Gift"} size={16} className="text-clinic-blue" />
                  </div>
                  <p className="text-slate-300 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-clinic-green-light flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={32} className="text-clinic-green" />
                </div>
                <h3 className="text-xl font-bold text-clinic-dark mb-2">Заявка получена!</h3>
                <p className="text-clinic-gray text-sm leading-relaxed">
                  Наш администратор свяжется с вами в течение 15 минут. Ожидайте звонка с номера +7 (495) 123-45-67.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-clinic-dark mb-6">Оставьте заявку</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-clinic-gray mb-1.5">Ваше имя</label>
                    <input
                      type="text"
                      placeholder="Как вас зовут?"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-border rounded-xl px-4 py-3 text-clinic-dark text-sm focus:outline-none focus:ring-2 focus:ring-clinic-blue/30 focus:border-clinic-blue transition-all placeholder:text-slate-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-clinic-gray mb-1.5">Телефон</label>
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-border rounded-xl px-4 py-3 text-clinic-dark text-sm focus:outline-none focus:ring-2 focus:ring-clinic-blue/30 focus:border-clinic-blue transition-all placeholder:text-slate-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-clinic-gray mb-1.5">Удобное время звонка</label>
                    <select
                      className="w-full border border-border rounded-xl px-4 py-3 text-clinic-dark text-sm focus:outline-none focus:ring-2 focus:ring-clinic-blue/30 focus:border-clinic-blue transition-all appearance-none bg-white"
                    >
                      <option value="">Любое время</option>
                      <option value="morning">Утром (9:00 – 12:00)</option>
                      <option value="day">Днём (12:00 – 17:00)</option>
                      <option value="evening">Вечером (17:00 – 20:00)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-clinic-blue text-white py-3.5 rounded-xl font-medium hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {loading ? (
                      <Icon name="Loader" size={18} className="animate-spin" />
                    ) : (
                      <Icon name="Calendar" size={18} />
                    )}
                    {loading ? "Отправляем..." : "Записаться на бесплатную консультацию"}
                  </button>

                  <p className="text-xs text-clinic-gray text-center leading-relaxed">
                    Нажимая кнопку, вы соглашаетесь с{" "}
                    <a href="#" className="text-clinic-blue hover:underline">политикой конфиденциальности</a>.
                    Ваши данные не передаются третьим лицам.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;

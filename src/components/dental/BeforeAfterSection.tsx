import { useState } from "react";
import Icon from "@/components/ui/icon";

const cases = [
  {
    id: 1,
    name: "Пациент А., 42 года",
    description: "Потеря одного зуба в результате травмы. Установлен имплант Nobel Biocare.",
    before: "Отсутствие зуба 6 месяцев, начальная убыль кости",
    after: "Имплант с керамической коронкой, восстановлена жевательная функция",
    duration: "4 месяца",
    brand: "Nobel Biocare",
  },
  {
    id: 2,
    name: "Пациент Б., 55 лет",
    description: "Несколько отсутствующих зубов, пользовался съёмным протезом 3 года.",
    before: "3 отсутствующих зуба, убыль кости, дискомфорт от протеза",
    after: "3 импланта Straumann с коронками, полный жевательный комфорт",
    duration: "6 месяцев",
    brand: "Straumann",
  },
  {
    id: 3,
    name: "Пациент В., 38 лет",
    description: "Удаление зуба с немедленной установкой импланта в одно посещение.",
    before: "Разрушенный зуб, требующий удаления",
    after: "Имплант Osstem с временной коронкой в день операции",
    duration: "1 день + 3 мес. приживление",
    brand: "Osstem",
  },
];

const BeforeAfterSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-white" id="portfolio">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-clinic-blue text-sm font-medium uppercase tracking-widest mb-3">Результаты</p>
          <h2 className="text-3xl md:text-4xl font-bold text-clinic-dark mb-4">
            Примеры работ наших пациентов
          </h2>
          <p className="text-clinic-gray leading-relaxed">
            Реальные случаи из нашей практики. Публикуем только с согласия пациентов.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {cases.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === i
                  ? "bg-clinic-blue text-white"
                  : "bg-muted text-clinic-gray hover:bg-clinic-blue-light hover:text-clinic-blue"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {[
            {
              label: "До",
              bgClass: "bg-gradient-to-br from-slate-100 to-slate-200",
              iconColor: "text-slate-400",
              textColor: "text-slate-500",
              borderColor: "border-slate-200",
              detail: cases[active].before,
            },
            {
              label: "После",
              bgClass: "bg-gradient-to-br from-clinic-blue-light to-clinic-green-light",
              iconColor: "text-clinic-blue",
              textColor: "text-clinic-blue",
              borderColor: "border-clinic-blue/20",
              detail: cases[active].after,
            },
          ].map((side) => (
            <div key={side.label} className={`rounded-2xl border ${side.borderColor} overflow-hidden`}>
              <div className={`${side.bgClass} h-48 md:h-64 flex flex-col items-center justify-center gap-3`}>
                <Icon name="ImageOff" size={36} className={side.iconColor} />
                <p className={`text-sm font-medium ${side.textColor}`}>
                  Фото {side.label === "До" ? "до" : "после"} лечения
                </p>
                <p className="text-xs text-clinic-gray px-4 text-center">(предоставляется на консультации)</p>
              </div>
              <div className="p-5 bg-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-bold uppercase tracking-wider ${side.label === "До" ? "text-slate-400" : "text-clinic-blue"}`}>
                    {side.label}
                  </span>
                </div>
                <p className="text-sm text-clinic-gray leading-relaxed">{side.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-clinic-bg rounded-2xl p-5 flex flex-wrap gap-6 items-center justify-between">
          <div>
            <p className="font-semibold text-clinic-dark">{cases[active].name}</p>
            <p className="text-sm text-clinic-gray mt-0.5">{cases[active].description}</p>
          </div>
          <div className="flex gap-6">
            <div>
              <p className="text-xs text-clinic-gray">Имплант</p>
              <p className="text-sm font-semibold text-clinic-blue">{cases[active].brand}</p>
            </div>
            <div>
              <p className="text-xs text-clinic-gray">Срок лечения</p>
              <p className="text-sm font-semibold text-clinic-dark">{cases[active].duration}</p>
            </div>
          </div>
          <a
            href="#form"
            className="bg-clinic-blue text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all"
          >
            Хочу такой же результат
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;

import Icon from "@/components/ui/icon";

const comparisons = [
  {
    feature: "Нагрузка на соседние зубы",
    implant: "Нет — стоит самостоятельно",
    bridge: "Да — опирается на соседние",
    denture: "Частично — давит на дёсны",
  },
  {
    feature: "Сохранение кости",
    implant: "Да — стимулирует кость",
    bridge: "Нет — кость убывает",
    denture: "Нет — убыль продолжается",
  },
  {
    feature: "Ощущения при еде",
    implant: "Как родной зуб",
    bridge: "Близко к норме",
    denture: "Снижена жевательная сила",
  },
  {
    feature: "Срок службы",
    implant: "20–30 лет и более",
    bridge: "10–15 лет",
    denture: "5–8 лет",
  },
  {
    feature: "Уход",
    implant: "Обычная чистка зубов",
    bridge: "Специальные нити",
    denture: "Снимать и чистить",
  },
];

const SolutionSection = () => {
  return (
    <section className="section-padding bg-clinic-bg" id="solution">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <p className="text-clinic-blue text-sm font-medium uppercase tracking-widest mb-3">Решение</p>
            <h2 className="text-3xl md:text-4xl font-bold text-clinic-dark mb-6">
              Что такое имплантация зубов
            </h2>
            <p className="text-clinic-gray leading-relaxed mb-6">
              Имплант — это небольшой титановый стержень, который вживляется в кость и берёт на себя роль корня зуба. Сверху устанавливается коронка, неотличимая от настоящего зуба.
            </p>
            <p className="text-clinic-gray leading-relaxed mb-8">
              Титан абсолютно совместим с организмом. За 3–6 месяцев имплант надёжно срастается с костью — и служит десятилетиями без замены.
            </p>
            <div className="space-y-3">
              {[
                "Не нужно обтачивать соседние зубы",
                "Выглядит и ощущается как родной зуб",
                "Предотвращает убыль костной ткани",
                "Служит 20–30 лет при правильном уходе",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-clinic-green-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={12} className="text-clinic-green" />
                  </div>
                  <p className="text-clinic-dark text-sm">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border">
            <div className="p-5 border-b border-border">
              <h3 className="font-semibold text-clinic-dark text-sm">Сравнение вариантов восстановления</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-3 text-clinic-gray font-medium">Параметр</th>
                    <th className="text-center p-3 text-clinic-blue font-semibold">Имплант</th>
                    <th className="text-center p-3 text-clinic-gray font-medium">Мост</th>
                    <th className="text-center p-3 text-clinic-gray font-medium">Протез</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-muted/30"}>
                      <td className="p-3 text-clinic-gray">{row.feature}</td>
                      <td className="p-3 text-center text-clinic-blue font-medium">{row.implant}</td>
                      <td className="p-3 text-center text-clinic-gray">{row.bridge}</td>
                      <td className="p-3 text-center text-clinic-gray">{row.denture}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

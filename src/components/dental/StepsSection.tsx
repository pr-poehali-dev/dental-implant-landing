import Icon from "@/components/ui/icon";

const steps = [
  {
    icon: "Stethoscope",
    title: "Консультация и КТ",
    text: "Осматриваем полость рта, делаем 3D-томографию. Определяем, подходит ли имплантация в вашем случае.",
    duration: "60 минут",
  },
  {
    icon: "ClipboardList",
    title: "План лечения",
    text: "Врач подбирает бренд и тип импланта, рассчитывает стоимость, согласовывает сроки. Всё фиксируем в договоре.",
    duration: "1–2 дня",
  },
  {
    icon: "Syringe",
    title: "Установка импланта",
    text: "Операция под местной анестезией. Вы не чувствуете боли — только лёгкое давление. Занимает около часа.",
    duration: "~1 час",
  },
  {
    icon: "Clock",
    title: "Период приживления",
    text: "Имплант срастается с костью. В это время носите временную коронку и живёте обычной жизнью.",
    duration: "3–6 месяцев",
  },
  {
    icon: "Smile",
    title: "Установка коронки",
    text: "Снимаем слепок, изготавливаем коронку под цвет ваших зубов и фиксируем навсегда. Результат — как родной зуб.",
    duration: "2 визита",
  },
];

const StepsSection = () => {
  return (
    <section className="section-padding bg-clinic-bg" id="steps">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-clinic-blue text-sm font-medium uppercase tracking-widest mb-3">Процесс</p>
          <h2 className="text-3xl md:text-4xl font-bold text-clinic-dark mb-4">
            Как проходит имплантация
          </h2>
          <p className="text-clinic-gray leading-relaxed">
            Процесс разбит на понятные этапы. Вы всегда знаете, что будет дальше — никаких сюрпризов.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-border mx-16" />

          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6 relative">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-clinic-blue flex items-center justify-center shadow-sm relative z-10">
                    <Icon name={step.icon as "Clock"} size={28} className="text-clinic-blue" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-clinic-blue text-white text-xs font-bold flex items-center justify-center z-20">
                    {index + 1}
                  </div>
                </div>

                <h3 className="font-semibold text-clinic-dark text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-clinic-gray leading-relaxed mb-3">{step.text}</p>
                <span className="inline-block bg-clinic-blue-light text-clinic-blue text-xs px-2 py-1 rounded-full">
                  {step.duration}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {[
            { icon: "Zap", title: "Экспресс-имплантация", text: "В ряде случаев имплант и коронку можно поставить за 1 день — уточните у врача" },
            { icon: "Moon", title: "Седация по желанию", text: "Если боитесь — проведём всё под медикаментозным сном. Проснётесь с готовым зубом" },
            { icon: "RefreshCw", title: "Контрольные визиты", text: "Наблюдаем за приживлением на каждом этапе — ваш результат под защитой" },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-4 flex gap-3 border border-border">
              <div className="w-8 h-8 rounded-lg bg-clinic-green-light flex items-center justify-center flex-shrink-0">
                <Icon name={item.icon as "Zap"} size={16} className="text-clinic-green" />
              </div>
              <div>
                <p className="font-medium text-clinic-dark text-sm">{item.title}</p>
                <p className="text-xs text-clinic-gray mt-1 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;

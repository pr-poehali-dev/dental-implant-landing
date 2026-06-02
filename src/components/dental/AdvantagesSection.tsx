import Icon from "@/components/ui/icon";

const advantages = [
  {
    icon: "GraduationCap",
    title: "Опытные имплантологи",
    text: "Наши врачи специализируются на имплантации от 10 лет. За плечами каждого — сотни успешных операций и регулярное обучение в России и Европе.",
  },
  {
    icon: "ScanLine",
    title: "3D-диагностика на томографе",
    text: "Перед операцией мы делаем компьютерную томографию: видим точный объём кости, расположение нервов и сосудов. Это позволяет спланировать всё до миллиметра.",
  },
  {
    icon: "Award",
    title: "Топовые бренды имплантов",
    text: "Работаем с Nobel Biocare (Швейцария), Straumann (Германия), Osstem (Корея). Все импланты сертифицированы и поставляются напрямую от официальных дистрибьюторов.",
  },
  {
    icon: "Shield",
    title: "Гарантия на импланты и работу",
    text: "Мы уверены в результате: даём официальную гарантию на имплант и коронку. Если что-то пойдёт не так — решим за наш счёт.",
  },
  {
    icon: "CreditCard",
    title: "Рассрочка и кредит",
    text: "Не нужно копить всю сумму сразу. Оформим беспроцентную рассрочку на 12 месяцев или банковский кредит прямо в клинике — без справок и поручителей.",
  },
  {
    icon: "HeartHandshake",
    title: "Безопасность и забота",
    text: "Одноразовые расходники, стерилизация европейского класса, мягкая анестезия. Работаем так, чтобы вы не чувствовали дискомфорта ни до, ни после операции.",
  },
];

const brands = [
  { name: "Nobel Biocare", country: "Швейцария" },
  { name: "Straumann", country: "Германия" },
  { name: "Osstem", country: "Корея" },
  { name: "Zimmer Biomet", country: "США" },
];

const AdvantagesSection = () => {
  return (
    <section className="section-padding bg-white" id="advantages">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-clinic-blue text-sm font-medium uppercase tracking-widest mb-3">Наша клиника</p>
          <h2 className="text-3xl md:text-4xl font-bold text-clinic-dark mb-4">
            Почему пациенты выбирают нас
          </h2>
          <p className="text-clinic-gray leading-relaxed">
            За 12 лет работы мы помогли более 3 000 пациентов вернуть уверенность в улыбке. Вот что делает нас надёжным выбором.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="border border-border rounded-2xl p-6 hover:border-clinic-blue hover:shadow-sm transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-clinic-blue-light flex items-center justify-center mb-4 group-hover:bg-clinic-blue transition-colors">
                <Icon name={item.icon as "Award"} size={22} className="text-clinic-blue group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-clinic-dark mb-2">{item.title}</h3>
              <p className="text-sm text-clinic-gray leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-clinic-bg rounded-2xl p-6 md:p-8">
          <p className="text-center text-sm text-clinic-gray mb-6 font-medium">Работаем с имплантами мировых брендов</p>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="bg-white border border-border rounded-xl px-6 py-3 text-center"
              >
                <p className="font-semibold text-clinic-dark text-sm">{brand.name}</p>
                <p className="text-xs text-clinic-gray mt-0.5">{brand.country}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;

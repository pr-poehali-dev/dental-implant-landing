import Icon from "@/components/ui/icon";

const packages = [
  {
    name: "Стандарт",
    brand: "Osstem (Корея)",
    price: "от 50 000 ₽",
    features: [
      "Имплант Osstem",
      "Установка импланта",
      "Формирователь десны",
      "Абатмент",
      "Металлокерамическая коронка",
    ],
    highlight: false,
    badge: null,
  },
  {
    name: "Комфорт",
    brand: "Straumann (Германия)",
    price: "от 75 000 ₽",
    features: [
      "Имплант Straumann",
      "Установка импланта",
      "Формирователь десны",
      "Абатмент titanium",
      "Безметалловая коронка E.max",
      "Гарантия расширенная",
    ],
    highlight: true,
    badge: "Популярный выбор",
  },
  {
    name: "Премиум",
    brand: "Nobel Biocare (Швейцария)",
    price: "от 95 000 ₽",
    features: [
      "Имплант Nobel Biocare",
      "Установка импланта",
      "Циркониевый абатмент",
      "Коронка из циркония",
      "Расширенная гарантия",
      "Приоритетное обслуживание",
    ],
    highlight: false,
    badge: null,
  },
];

const promos = [
  {
    icon: "Gift",
    title: "Томография в подарок",
    text: "При записи с сайта — КТ бесплатно (стоимость 3 000 ₽)",
  },
  {
    icon: "MessageCircle",
    title: "Консультация бесплатно",
    text: "Осмотр и план лечения без предоплаты",
  },
  {
    icon: "Percent",
    title: "Рассрочка 0%",
    text: "Беспроцентная рассрочка на 12 месяцев",
  },
];

const PricingSection = () => {
  return (
    <section className="section-padding bg-clinic-bg" id="pricing">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-clinic-blue text-sm font-medium uppercase tracking-widest mb-3">Стоимость</p>
          <h2 className="text-3xl md:text-4xl font-bold text-clinic-dark mb-4">
            Цены на имплантацию зубов
          </h2>
          <p className="text-clinic-gray leading-relaxed">
            Цена зависит от бренда импланта и типа коронки. Все варианты «под ключ» — никаких скрытых доплат.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl p-6 border flex flex-col ${
                pkg.highlight
                  ? "bg-clinic-blue text-white border-clinic-blue shadow-lg shadow-blue-100 scale-105"
                  : "bg-white border-border"
              }`}
            >
              {pkg.badge && (
                <div className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full mb-4 self-start">
                  {pkg.badge}
                </div>
              )}
              <p className={`text-sm font-medium mb-1 ${pkg.highlight ? "text-blue-100" : "text-clinic-gray"}`}>
                {pkg.brand}
              </p>
              <h3 className={`text-xl font-bold mb-1 ${pkg.highlight ? "text-white" : "text-clinic-dark"}`}>
                {pkg.name}
              </h3>
              <p className={`text-2xl font-bold mb-6 ${pkg.highlight ? "text-white" : "text-clinic-blue"}`}>
                {pkg.price}
              </p>

              <ul className="space-y-2.5 flex-1 mb-6">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Icon
                      name="Check"
                      size={15}
                      className={`mt-0.5 flex-shrink-0 ${pkg.highlight ? "text-blue-200" : "text-clinic-green"}`}
                    />
                    <span className={`text-sm ${pkg.highlight ? "text-blue-50" : "text-clinic-gray"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#form"
                className={`text-center py-2.5 px-4 rounded-full text-sm font-medium transition-all ${
                  pkg.highlight
                    ? "bg-white text-clinic-blue hover:bg-blue-50"
                    : "bg-clinic-blue text-white hover:bg-opacity-90"
                }`}
              >
                Записаться на консультацию
              </a>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {promos.map((promo) => (
            <div
              key={promo.title}
              className="bg-white rounded-xl p-5 flex gap-4 items-start border border-border"
            >
              <div className="w-10 h-10 rounded-xl bg-clinic-green-light flex items-center justify-center flex-shrink-0">
                <Icon name={promo.icon as "Gift"} size={20} className="text-clinic-green" />
              </div>
              <div>
                <p className="font-semibold text-clinic-dark text-sm">{promo.title}</p>
                <p className="text-xs text-clinic-gray mt-1 leading-relaxed">{promo.text}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-clinic-gray mt-6">
          * Цены указаны за 1 имплант под ключ и могут изменяться в зависимости от клинической ситуации. Точная стоимость — после консультации и КТ.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;

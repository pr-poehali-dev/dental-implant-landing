import Icon from "@/components/ui/icon";

const reviews = [
  {
    name: "Марина К.",
    age: "47 лет",
    rating: 5,
    text: "Боялась как огня, но всё прошло абсолютно безболезненно. Врач объяснял каждый шаг, успокаивал. Сейчас уже год — забыла что такое проблема с зубом.",
    procedure: "1 имплант Nobel Biocare",
  },
  {
    name: "Алексей Т.",
    age: "53 года",
    rating: 5,
    text: "Поставил 3 импланта. Результатом доволен полностью. Жена говорит, что улыбка стала как в молодости. Цена честная, никаких скрытых платежей.",
    procedure: "3 импланта Straumann",
  },
  {
    name: "Ольга М.",
    age: "39 лет",
    rating: 5,
    text: "Долго выбирала клинику, смотрела отзывы. Здесь всё как обещали — и КТ бесплатно, и рассрочку оформили без проблем. Очень внимательный персонал.",
    procedure: "2 импланта Osstem",
  },
];

const trustStats = [
  { value: "12 лет", label: "работаем на рынке" },
  { value: "3 000+", label: "пациентов" },
  { value: "4.9", label: "средний рейтинг" },
  { value: "98%", label: "успешного приживления" },
];

const certificates = [
  { icon: "Award", title: "Лицензия Минздрава РФ", num: "ЛО-77-01-012345" },
  { icon: "Shield", title: "Сертификат Nobel Biocare", num: "Официальный партнёр" },
  { icon: "Star", title: "Straumann Certified Center", num: "Уровень Premium" },
  { icon: "FileCheck", title: "ISO 9001:2015", num: "Система качества" },
];

const TrustSection = () => {
  return (
    <section className="section-padding bg-white" id="reviews">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-clinic-blue text-sm font-medium uppercase tracking-widest mb-3">Доверие</p>
          <h2 className="text-3xl md:text-4xl font-bold text-clinic-dark mb-4">
            Нам доверяют тысячи пациентов
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-14">
          {trustStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-clinic-blue mb-1">{stat.value}</p>
              <p className="text-sm text-clinic-gray">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-clinic-bg rounded-2xl p-6 border border-border"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-clinic-dark text-sm leading-relaxed mb-4">«{review.text}»</p>
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <div>
                  <p className="font-semibold text-clinic-dark text-sm">{review.name}</p>
                  <p className="text-xs text-clinic-gray">{review.age}</p>
                </div>
                <span className="text-xs bg-clinic-blue-light text-clinic-blue px-2 py-1 rounded-full">
                  {review.procedure}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="text-sm font-medium text-clinic-gray text-center mb-6">Лицензии и сертификаты</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certificates.map((cert) => (
              <div
                key={cert.title}
                className="border border-border rounded-xl p-4 flex items-center gap-3 bg-white"
              >
                <div className="w-10 h-10 rounded-lg bg-clinic-blue-light flex items-center justify-center flex-shrink-0">
                  <Icon name={cert.icon as "Award"} size={18} className="text-clinic-blue" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-clinic-dark leading-tight">{cert.title}</p>
                  <p className="text-xs text-clinic-gray mt-0.5">{cert.num}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

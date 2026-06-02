import Icon from "@/components/ui/icon";

const ContactsSection = () => {
  return (
    <section className="section-padding bg-white" id="contacts">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-clinic-blue text-sm font-medium uppercase tracking-widest mb-3">Контакты</p>
          <h2 className="text-3xl md:text-4xl font-bold text-clinic-dark mb-4">
            Мы находимся в центре Москвы
          </h2>
          <p className="text-clinic-gray">Удобный доступ от 3 станций метро</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: "MapPin",
              title: "Адрес",
              lines: ["г. Москва, ул. Тверская, 18", "2-й этаж, офис 203"],
              sub: "м. Тверская, Пушкинская, Чеховская",
            },
            {
              icon: "Phone",
              title: "Телефон",
              lines: ["+7 (495) 123-45-67", "+7 (800) 555-00-11"],
              sub: "Звонок по России бесплатно",
            },
            {
              icon: "Clock",
              title: "Режим работы",
              lines: ["Пн–Пт: 09:00 – 21:00", "Сб–Вс: 10:00 – 18:00"],
              sub: "Праздничные дни уточняйте по телефону",
            },
          ].map((item) => (
            <div key={item.title} className="bg-clinic-bg rounded-2xl p-6 border border-border">
              <div className="w-12 h-12 rounded-xl bg-clinic-blue-light flex items-center justify-center mb-4">
                <Icon name={item.icon as "MapPin"} size={22} className="text-clinic-blue" />
              </div>
              <p className="font-semibold text-clinic-dark mb-3">{item.title}</p>
              {item.lines.map((line) => (
                <p key={line} className="text-clinic-dark text-sm font-medium">{line}</p>
              ))}
              <p className="text-xs text-clinic-gray mt-2">{item.sub}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl overflow-hidden border border-border h-72 relative bg-clinic-bg flex items-center justify-center">
          <div className="text-center">
            <Icon name="MapPin" size={40} className="text-clinic-blue mx-auto mb-3" />
            <p className="font-semibold text-clinic-dark mb-1">ДентаПрайм на карте</p>
            <p className="text-sm text-clinic-gray mb-4">г. Москва, ул. Тверская, 18</p>
            <a
              href="https://maps.yandex.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-clinic-blue text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all"
            >
              <Icon name="ExternalLink" size={15} />
              Открыть в Яндекс.Картах
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;

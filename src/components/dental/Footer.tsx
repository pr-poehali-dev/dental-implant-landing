import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-clinic-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-clinic-blue flex items-center justify-center">
                <Icon name="Sparkles" size={16} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  ДентаПрайм
                </p>
                <p className="text-xs text-slate-400">Стоматологическая клиника</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Специализируемся на имплантации зубов. Работаем с 2012 года, провели более 3 000 успешных операций.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: "MessageCircle", label: "WhatsApp" },
                { icon: "Send", label: "Telegram" },
                { icon: "Phone", label: "Позвонить" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-clinic-blue transition-colors"
                  aria-label={social.label}
                >
                  <Icon name={social.icon as "Send"} size={15} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-medium text-white text-sm mb-4">Навигация</p>
            <ul className="space-y-2.5">
              {[
                { label: "Об имплантации", href: "#solution" },
                { label: "Преимущества", href: "#advantages" },
                { label: "Этапы", href: "#steps" },
                { label: "Цены", href: "#pricing" },
                { label: "Отзывы", href: "#reviews" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-medium text-white text-sm mb-4">Контакты</p>
            <div className="space-y-3">
              <a href="tel:+74951234567" className="flex items-center gap-2 text-slate-400 text-sm hover:text-white transition-colors">
                <Icon name="Phone" size={14} />
                +7 (495) 123-45-67
              </a>
              <p className="flex items-start gap-2 text-slate-400 text-sm">
                <Icon name="MapPin" size={14} className="mt-0.5 flex-shrink-0" />
                Москва, ул. Тверская, 18
              </p>
              <p className="flex items-start gap-2 text-slate-400 text-sm">
                <Icon name="Clock" size={14} className="mt-0.5 flex-shrink-0" />
                Пн–Пт: 9:00 – 21:00<br />Сб–Вс: 10:00 – 18:00
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">© 2024 ДентаПрайм. Лицензия ЛО-77-01-012345</p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-500 text-xs hover:text-slate-400 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-slate-500 text-xs hover:text-slate-400 transition-colors">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

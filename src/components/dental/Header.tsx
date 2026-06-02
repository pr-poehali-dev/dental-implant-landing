import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Об имплантации", href: "#solution" },
    { label: "Преимущества", href: "#advantages" },
    { label: "Цены", href: "#pricing" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-clinic-blue flex items-center justify-center">
              <Icon name="Sparkles" size={16} className="text-white" />
            </div>
            <div>
              <p className="font-semibold text-clinic-dark text-sm leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                ДентаПрайм
              </p>
              <p className="text-xs text-clinic-gray mt-0.5">Стоматологическая клиника</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-clinic-gray hover:text-clinic-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+74951234567"
              className="hidden md:flex items-center gap-2 text-clinic-dark text-sm font-medium hover:text-clinic-blue transition-colors"
            >
              <Icon name="Phone" size={15} className="text-clinic-blue" />
              +7 (495) 123-45-67
            </a>
            <a
              href="#form"
              className="bg-clinic-blue text-white text-sm px-4 py-2 rounded-full hover:bg-opacity-90 transition-all font-medium"
            >
              Записаться
            </a>
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={22} className="text-clinic-dark" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-1">
            <nav className="flex flex-col gap-3 pt-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-clinic-dark hover:text-clinic-blue transition-colors px-1 py-1"
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:+74951234567" className="text-sm text-clinic-blue font-medium flex items-center gap-2 px-1 py-1">
                <Icon name="Phone" size={15} />
                +7 (495) 123-45-67
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

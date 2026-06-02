import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative pt-20 md:pt-24 min-h-screen flex items-center overflow-hidden bg-clinic-bg">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/31f22e19-52f3-40f3-9d29-cf1706ea673a/files/ee503f6b-72d4-4a61-bd69-afc42ca97998.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-clinic-blue-light text-clinic-blue text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <Icon name="Shield" size={13} />
              Гарантия на импланты и работу
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-clinic-dark leading-tight mb-6">
              Восстановите улыбку
              <span className="text-clinic-blue block">без боли и страха</span>
            </h1>

            <p className="text-lg text-clinic-gray leading-relaxed mb-8 max-w-lg">
              Имплантация зубов — современный и надёжный способ вернуть красивую улыбку и жевательный комфорт. Работаем мягко, профессионально и с заботой о каждом пациенте.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#form"
                className="bg-clinic-blue text-white px-7 py-3.5 rounded-full font-medium text-center hover:bg-opacity-90 transition-all shadow-sm hover:shadow-md"
              >
                Бесплатная консультация
              </a>
              <a
                href="#solution"
                className="border border-clinic-blue text-clinic-blue px-7 py-3.5 rounded-full font-medium text-center hover:bg-clinic-blue-light transition-all"
              >
                Узнать об имплантации
              </a>
            </div>

            <div className="flex flex-wrap gap-6">
              {[
                { icon: "Award", text: "Опыт от 10 лет" },
                { icon: "Users", text: "3000+ пациентов" },
                { icon: "Star", text: "Рейтинг 4.9" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <Icon name={item.icon as "Award"} size={16} className="text-clinic-blue" />
                  <span className="text-sm text-clinic-gray">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/31f22e19-52f3-40f3-9d29-cf1706ea673a/files/82673be7-6b43-48aa-947f-45e7879eba2f.jpg"
                alt="Довольная пациентка после имплантации"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-clinic-green-light flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" size={20} className="text-clinic-green" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-clinic-dark">Имплантация от 50 000 ₽</p>
                    <p className="text-xs text-clinic-gray">Рассрочка · Томография в подарок</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

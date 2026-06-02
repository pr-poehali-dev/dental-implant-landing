const problems = [
  {
    emoji: "😔",
    title: "Стеснение улыбаться",
    text: "Многие наши пациенты рассказывают, что стали прикрывать рот рукой, смеяться сдержаннее, избегать фотографий. Это не мелочь — это качество жизни.",
  },
  {
    emoji: "🍎",
    title: "Трудности при еде",
    text: "Жёсткие продукты, мясо, яблоки — приходится тщательно выбирать, что можно съесть. Это утомляет и влияет на питание в целом.",
  },
  {
    emoji: "🦷",
    title: "Смещение соседних зубов",
    text: "После потери зуба соседние начинают постепенно смещаться в сторону пустого места. Это разрушает прикус и может привести к потере ещё нескольких зубов.",
  },
  {
    emoji: "🦴",
    title: "Убыль костной ткани",
    text: "Без корня зуба кость под ним начинает «уходить». Это меняет овал лица и со временем усложняет любое восстановление зубов.",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-padding bg-white" id="problem">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-clinic-blue text-sm font-medium uppercase tracking-widest mb-3">Мы понимаем</p>
          <h2 className="text-3xl md:text-4xl font-bold text-clinic-dark mb-4">
            Жить с отсутствующим зубом сложнее, чем кажется
          </h2>
          <p className="text-clinic-gray text-lg leading-relaxed">
            Вы не одни. Миллионы людей сталкиваются с теми же переживаниями — и большинство из них долго откладывают решение, надеясь, что «и так сойдёт». Мы здесь, чтобы помочь без осуждения.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item) => (
            <div
              key={item.title}
              className="bg-clinic-bg rounded-2xl p-6 border border-border hover:border-clinic-blue transition-colors group"
            >
              <div className="text-3xl mb-4">{item.emoji}</div>
              <h3 className="text-base font-semibold text-clinic-dark mb-2">{item.title}</h3>
              <p className="text-sm text-clinic-gray leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-clinic-blue-light border border-clinic-blue/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="text-4xl">✨</div>
          <div>
            <p className="text-clinic-dark font-semibold text-lg mb-1">Хорошая новость</p>
            <p className="text-clinic-gray leading-relaxed">
              Всё это — решаемо. Современная имплантация позволяет восстановить зуб раз и навсегда, без ущерба для соседних. И это не больно — анестезия делает процедуру комфортной даже для тех, кто боится стоматолога.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

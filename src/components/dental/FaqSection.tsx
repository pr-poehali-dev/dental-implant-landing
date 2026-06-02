import { useState } from "react";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    q: "Больно ли ставить имплант?",
    a: "Нет. Операция проводится под местной анестезией — вы не почувствуете боли. Большинство пациентов удивляются, насколько это комфортно. После операции возможен лёгкий дискомфорт 1–2 дня, который снимается обычными обезболивающими.",
  },
  {
    q: "Как долго приживается имплант?",
    a: "В среднем 3–6 месяцев. Нижняя челюсть приживается быстрее (3–4 месяца), верхняя — чуть дольше (4–6 месяцев). В это время можно вести обычный образ жизни, просто избегать твёрдой пищи в зоне импланта.",
  },
  {
    q: "Есть ли гарантия?",
    a: "Да. Мы даём официальную гарантию на имплант и работу. Срок гарантии зависит от пакета: от 5 лет в базовом до пожизненной гарантии бренда Nobel Biocare в премиум-пакете. Все условия прописываются в договоре.",
  },
  {
    q: "Подходит ли имплантация, если кости мало?",
    a: "В большинстве случаев — да. Если объём кости недостаточен, врач проводит костную пластику или выбирает специальный имплант меньшего размера. Это определяется на этапе КТ и планирования.",
  },
  {
    q: "Можно ли сделать имплантацию, если курю?",
    a: "Курение повышает риск осложнений и замедляет заживление, но не является абсолютным противопоказанием. Рекомендуется воздержаться от курения за 2 недели до и после операции. Мы обсудим это на консультации.",
  },
  {
    q: "Сколько стоит имплантация под ключ?",
    a: "Стоимость зависит от бренда импланта и типа коронки. Наши пакеты — от 50 000 ₽ за имплант Osstem до 95 000 ₽ за Nobel Biocare. Это цена под ключ: имплант + абатмент + коронка. Доступна рассрочка 0% на 12 месяцев.",
  },
  {
    q: "Как ухаживать за имплантом?",
    a: "Так же, как за обычными зубами: чистить дважды в день, использовать ирригатор или зубную нить. Приходить на осмотр раз в 6 месяцев. Имплант не подвержен кариесу, но требует здоровья дёсен вокруг.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-clinic-bg" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-clinic-blue text-sm font-medium uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-clinic-dark mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-clinic-gray leading-relaxed">
            Честные ответы на вопросы, которые задают перед имплантацией
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
              >
                <span className="font-medium text-clinic-dark text-sm pr-4">{faq.q}</span>
                <div className={`w-7 h-7 rounded-full bg-clinic-blue-light flex items-center justify-center flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}>
                  <Icon name="ChevronDown" size={15} className="text-clinic-blue" />
                </div>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-clinic-gray leading-relaxed border-t border-border pt-4">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-clinic-gray text-sm mb-4">Не нашли ответ на свой вопрос?</p>
          <a
            href="#form"
            className="inline-flex items-center gap-2 bg-clinic-blue text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all"
          >
            <Icon name="MessageCircle" size={16} />
            Задайте вопрос врачу
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

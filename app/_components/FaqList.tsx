"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Czy możliwe są reakcje alergiczne po zażyciu Nutrilaben ?",
    answer:
      "Reakcje alergiczne mogą wynikać wyłącznie z indywidualnej nietolerancji składników preparatu.",
  },
  {
    question:
      "Przestrzegając diety ketonowej, nie można jeść słodyczy i mąki. A jak jest przy użyciu Nutrilaben, czy to możliwe?",
    answer:
      "W małych ilościach jest to możliwe. Nutrilaben  pomaga usunąć szybkie węglowodany z organizmu, dopóki nie zostaną wchłonięte.",
  },
  {
    question: "Gdzie można kupić Nutrilaben ?",
    answer:
      "Nutrilaben  jest sprzedawany tylko tutaj — na oficjalnej stronie producenta. To minimalizuje liczbę podróbek.",
  },
  {
    question: "Jak szybko można schudnąć dzięki Nutrilaben ?",
    answer:
      "Wszystko zależy od twojego organizmu i stylu życia. Średnio zajmuje to 1 miesiąc.",
  },
  {
    question: "Czy Nutrilaben  przeszedł wymagane badania kliniczne?",
    answer:
      "Nutrilaben  jest testowany i zatwierdzony przez wiodących europejskich dietetyków. Otrzymał kilka certyfikatów jakości i został nagrodzony na dorocznej konferencji na temat dietetyki i immunologii.",
  },
  {
    question: "Czy Nutrilaben  jest kompatybilny ze wszystkimi produktami?",
    answer:
      "Tak, Nutrilaben  można przyjmować bez zmiany nawyków żywieniowych.",
  },
  {
    question: "Czy waga utrzymuje się po skończeniu kuracji Nutrilaben?",
    answer: "Tak, waga utrzymuje się przez długi czas.",
  },
  {
    question:
      "Dlaczego Nutrilaben  nie jest sprzedawany w aptekach i sklepach?",
    answer:
      "Tak więc producent chroni swój produkt przed pojawieniem się podróbek i komunikuje się bezpośrednio z klientami.",
  },
  {
    question: "Czy można używać Nutrilaben  do leczenia organizmu?",
    answer:
      "Tak, Nutrilaben  poprawia funkcjonowanie narządów wewnętrznych, oczyszcza organizm i nasyca witaminami. Wielu już po utracie wagi nadal stosuje Nutrilaben  właśnie po to, aby poprawić funkcjonowanie organizmu.",
  },
  {
    question:
      "Jak długo po zażyciu proszku jest całkowicie wchłaniany przez organizm?",
    answer:
      "Średnio porcja Nutrilaben  jest wchłaniana w ciągu 10 minut.",
  },
  {
    question: "Czy Nutrilaben ma jakieś analogi?",
    answer:
      "W tej chwili Nutrilaben  nie ma analogów. Jest to unikalny produkt pochodzenia naturalnego, który działa bezpiecznie i jest bardzo skuteczny.",
  },
];

export default function FaqList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ul className="faq-list">
      {faqs.map((item, index) => (
        <li className="faq-list_item" key={index}>
          <div
            className="question"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <p className="question-text">{item.question}</p>
          </div>
          <div
            className="answer"
            style={{ display: openIndex === index ? "block" : "none" }}
          >
            <p className="answer-text">{item.answer}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

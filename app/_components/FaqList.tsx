"use client";

import { useState } from "react";
import { faqs } from "@/lib/faqs";

export default function FaqList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ul className="faq-list">
      {faqs.map((item, index) => (
        <li className="faq-list_item" key={index}>
          <div
            className="question"
            role="button"
            tabIndex={0}
            aria-expanded={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setOpenIndex(openIndex === index ? null : index);
              }
            }}
          >
            <h3 className="question-text">{item.question}</h3>
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

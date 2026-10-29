"use client";

import { useEffect, useState } from "react";

// Phone-only bar that keeps the trial offer one tap away. It appears once the
// visitor scrolls past the hero and hides while the order form is on screen.
export default function StickyCta() {
  const [pastHero, setPastHero] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const form = document.getElementById("form");
    const observer = form
      ? new IntersectionObserver(([entry]) => setFormVisible(entry.isIntersecting))
      : null;
    if (form && observer) observer.observe(form);

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  const visible = pastHero && !formVisible;

  return (
    <a
      href="#form"
      className={`sticky-cta${visible ? " is-visible" : ""}`}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      Odbierz pakiet próbny za 0 zł
    </a>
  );
}

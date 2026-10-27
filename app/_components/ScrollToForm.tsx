"use client";

import { useEffect } from "react";

// In-page links scroll to the section named in data-scroll (works, faq).
// Any other link scrolls down to the order form.
export default function ScrollToForm() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const link = (event.target as Element).closest("a");
      if (!link) return;

      const sectionId = link.dataset.scroll;
      const target =
        (sectionId && document.getElementById(sectionId)) ||
        document.querySelector(".toform");
      if (!target) return;

      event.preventDefault();
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY,
        behavior: "smooth",
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

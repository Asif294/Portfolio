import { useEffect, useState } from "react";

/**
 * Scroll-spy: returns the id of the section currently in view.
 * Uses IntersectionObserver rather than scroll maths so it stays cheap.
 */
export function useActiveSection(ids, offset = 96) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      {
        rootMargin: `-${offset}px 0px -55% 0px`,
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids, offset]);

  return active;
}

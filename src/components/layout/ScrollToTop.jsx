import { FaArrowUp } from "react-icons/fa";

import { useScrolled } from "../../hooks/useScrolled";

export default function ScrollToTop() {
  const visible = useScrolled(400);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll back to top"
      className={`fixed bottom-8 right-6 z-40 rounded-full bg-accent-400 p-3 text-ink-950
                  shadow-lg shadow-accent-400/20 transition-all duration-300
                  hover:bg-accent-300 ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-4 opacity-0"
                  }`}
    >
      <FaArrowUp />
    </button>
  );
}

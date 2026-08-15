import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

import { navLinks, profile } from "../../data/profile";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useScrolled } from "../../hooks/useScrolled";

const NAV_IDS = navLinks.map((link) => link.id);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(40);
  const active = useActiveSection(NAV_IDS);

  // Lock body scroll while the mobile menu covers the screen.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-700/70 bg-ink-950/85 py-3 backdrop-blur-md"
          : "border-b border-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 lg:px-8">
        <a
          href="#home"
          className="font-mono text-lg font-bold tracking-tight text-white"
        >
          asifur<span className="text-accent-400">.dev</span>
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={`link-underline text-sm font-medium transition-colors duration-200 ${
                  active === link.id
                    ? "text-accent-400 after:w-full"
                    : "text-slate-300 hover:text-accent-400"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resume}
              download={profile.resumeFileName}
              className="inline-flex items-center gap-2 rounded-full border border-accent-400
                         px-4 py-2 text-sm font-semibold text-accent-400 transition duration-300
                         hover:bg-accent-400 hover:text-ink-950"
            >
              <FaDownload className="text-xs" />
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="relative z-50 text-xl text-slate-200 md:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-7
                    bg-ink-950/95 backdrop-blur-md transition-opacity duration-300 md:hidden ${
                      menuOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                    }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold transition-colors duration-200 ${
              active === link.id ? "text-accent-400" : "text-slate-200"
            }`}
          >
            {link.label}
          </a>
        ))}

        <a
          href={profile.resume}
          download={profile.resumeFileName}
          onClick={() => setMenuOpen(false)}
          className="mt-2 inline-flex items-center gap-2 rounded-full border border-accent-400
                     px-6 py-2.5 text-base font-semibold text-accent-400 transition duration-300
                     hover:bg-accent-400 hover:text-ink-950"
        >
          <FaDownload className="text-sm" />
          Resume
        </a>
      </div>
    </header>
  );
}

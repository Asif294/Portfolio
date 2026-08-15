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

  // Lock body scroll while the drawer is open.
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
    <>
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
            Asifur<span className="text-accent-400">.dev</span>
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
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            className="text-xl text-slate-200 md:hidden"
          >
            <FaBars />
          </button>
        </nav>
      </header>

      {/*
        The drawer lives OUTSIDE <header> on purpose. The header applies
        `backdrop-blur` when scrolled, and an element with a backdrop-filter
        becomes the containing block for its position:fixed descendants — which
        would trap this drawer inside the header's box instead of the viewport.
      */}

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[55] bg-black/70 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Slide-in drawer */}
      <aside
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`fixed right-0 top-0 z-[60] flex h-full w-72 max-w-[82vw] flex-col
                    border-l border-ink-700 bg-ink-900 shadow-2xl transition-transform
                    duration-300 ease-out md:hidden ${
                      menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
      >
        <div className="flex items-center justify-between border-b border-ink-700 px-5 py-4">
          <span className="font-mono text-base font-bold text-white">
            Asifur<span className="text-accent-400">.dev</span>
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-lg text-slate-400 transition-colors hover:text-accent-400"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active === link.id ? "true" : undefined}
                  className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 ${
                    active === link.id
                      ? "border-l-2 border-accent-400 bg-accent-400/10 text-accent-400"
                      : "text-slate-300 hover:bg-ink-800 hover:text-accent-400"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-ink-700 p-4">
          <a
            href={profile.resume}
            download={profile.resumeFileName}
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 rounded-full bg-accent-400
                       px-5 py-3 text-sm font-semibold text-ink-950 transition duration-300
                       hover:bg-accent-300"
          >
            <FaDownload className="text-xs" />
            Download Resume
          </a>
        </div>
      </aside>
    </>
  );
}

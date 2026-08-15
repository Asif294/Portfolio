import { navLinks, profile, socials } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950">
      <div className="mx-auto max-w-content px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#home" className="font-mono text-lg font-bold text-white">
              Asifur<span className="text-accent-400">.dev</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
              {profile.tagline} Backend engineering with Django, DRF and PostgreSQL.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-200">
              Navigate
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-slate-400 transition-colors hover:text-accent-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-200">
              Elsewhere
            </h3>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full
                             border border-ink-700 bg-ink-800 text-slate-300 transition
                             duration-300 hover:border-accent-400 hover:text-accent-400"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink-800 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>Built with React, Vite &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

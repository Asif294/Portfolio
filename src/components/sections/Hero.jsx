import { FaArrowRight, FaDownload } from "react-icons/fa";

import { profile, socials, stats } from "../../data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden pt-28"
    >
      {/* Backdrop: grid + amber glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:56px_56px]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[130px]" />

      <div className="relative mx-auto grid w-full max-w-content flex-1 items-center gap-14 px-6 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        {/* Copy */}
        <div className="animate-fade-up text-center lg:text-left">
          {profile.available && (
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-400/10 px-4 py-1.5 text-xs font-medium text-accent-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
              </span>
              Open to backend opportunities
            </span>
          )}

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {profile.shortName}
          </h1>

          <p className="mt-4 text-xl font-semibold text-gradient sm:text-2xl">
            {profile.role}
          </p>

          <p className="mt-2 font-mono text-sm text-slate-500">
            {profile.title} · {profile.location}
          </p>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 lg:mx-0">
            {profile.intro}
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent-400 px-6 py-3
                         text-sm font-semibold text-ink-950 shadow-lg shadow-accent-400/20
                         transition duration-300 hover:bg-accent-300"
            >
              View my work
              <FaArrowRight className="text-xs" />
            </a>
            <a
              href={profile.resume}
              download={profile.resumeFileName}
              className="inline-flex items-center gap-2 rounded-full border border-ink-600
                         px-6 py-3 text-sm font-semibold text-slate-200 transition duration-300
                         hover:border-accent-400 hover:text-accent-400"
            >
              <FaDownload className="text-xs" />
              Download CV
            </a>
          </div>

          {/* Socials */}
          <div className="mt-9 flex justify-center gap-4 lg:justify-start">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="text-xl text-slate-500 transition-colors duration-200 hover:text-accent-400"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Portrait */}
        <div className="flex justify-center lg:justify-end">
          <div className="group relative w-64 sm:w-72 lg:w-80">
            {/* Glow + offset frame */}
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-tr from-accent-500/25 to-transparent blur-2xl" />
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border border-accent-400/40 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />

            <div className="relative overflow-hidden rounded-3xl border border-ink-600 shadow-2xl">
              <img
                src={profile.avatar}
                alt={profile.name}
                loading="eager"
                className="aspect-[4/5] w-full object-cover object-center transition-transform
                           duration-700 group-hover:scale-[1.03]"
              />
              {/* Grounds the photo in the page's dark palette */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative border-t border-ink-800/80 bg-ink-950/60 backdrop-blur-sm">
        <dl className="mx-auto grid max-w-content grid-cols-2 divide-ink-800 px-6 sm:grid-cols-4 sm:divide-x lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 py-6 text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-2xl font-bold text-accent-400">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs text-slate-500">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

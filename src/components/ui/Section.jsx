import Reveal from "./Reveal";

/**
 * Standard shell for every content section: consistent id anchor,
 * vertical rhythm, max width and heading treatment.
 */
export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <Reveal>
          <header className="mb-14 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent-400">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <div className="mt-4 h-1 w-14 rounded-full bg-accent-400" />
            {description && (
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                {description}
              </p>
            )}
          </header>
        </Reveal>

        {children}
      </div>
    </section>
  );
}

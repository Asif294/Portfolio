import { FaGraduationCap, FaExternalLinkAlt, FaCertificate } from "react-icons/fa";

import { education, certifications } from "../../data/education";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="05 — Education"
      title="Academic background"
      className="bg-ink-900"
    >
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        {/* Degrees */}
        <div className="relative">
          <div className="absolute left-[15px] top-2 hidden h-full w-0.5 bg-ink-700 sm:block" />

          <div className="space-y-6">
            {education.map((item, index) => (
              <Reveal key={item.institution} delay={index * 100}>
                <div className="relative sm:pl-14">
                  <span
                    className={`absolute left-[10px] top-8 hidden h-3 w-3 rounded-full ring-4 ring-ink-900 sm:block ${
                      item.current ? "bg-accent-400" : "bg-ink-600"
                    }`}
                  />

                  <Card className="p-7">
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                          <FaGraduationCap className="text-accent-400" />
                          {item.institution}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-accent-400">
                          {item.degree}
                        </p>
                        <p className="mt-0.5 text-xs text-slate-500">
                          {item.location}
                        </p>
                      </div>

                      <span
                        className={`shrink-0 rounded-full px-3 py-1 font-mono text-xs ${
                          item.current
                            ? "bg-accent-400/10 text-accent-300"
                            : "bg-ink-700 text-slate-400"
                        }`}
                      >
                        {item.period}
                      </span>
                    </div>

                    <ul className="mt-5 space-y-2">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm text-slate-400"
                        >
                          <span className="mt-0.5 text-accent-400">▹</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <Reveal delay={200}>
          <Card className="h-full p-7">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Certifications
            </h3>

            <ul className="space-y-4">
              {certifications.map((certificate) => (
                <li key={certificate.title}>
                  <div className="flex items-start gap-3">
                    <FaCertificate className="mt-1 shrink-0 text-accent-400" />
                    <div>
                      <p className="text-sm font-semibold text-slate-200">
                        {certificate.title}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {certificate.issuer}
                      </p>
                      {certificate.href && (
                        <a
                          href={certificate.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold
                                     text-accent-400 transition hover:text-accent-300"
                        >
                          View certificate
                          <FaExternalLinkAlt className="text-[9px]" />
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

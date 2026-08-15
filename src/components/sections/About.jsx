import { FaCheck } from "react-icons/fa";

import { profile } from "../../data/profile";
import { interpersonalSkills, achievements } from "../../data/skills";
import { languages } from "../../data/education";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title="A little about me"
      className="bg-ink-900"
    >
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <Card className="h-full p-8">
            <p className="text-base leading-relaxed text-slate-400">
              {profile.objective}
            </p>

            <h3 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-wider text-slate-300">
              What I bring to a team
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {interpersonalSkills.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-sm text-slate-400">
                  <FaCheck className="shrink-0 text-xs text-accent-400" />
                  {skill}
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>

        <div className="grid gap-6">
          <Reveal delay={100}>
            <Card className="p-7">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-300">
                Achievements
              </h3>
              <ul className="space-y-4">
                {achievements.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        <span className="text-sm font-semibold text-accent-400 group-hover:text-accent-300">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-sm text-slate-500">
                          {item.detail}
                        </span>
                      </a>
                    ) : (
                      <>
                        <span className="text-sm font-semibold text-accent-400">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-sm text-slate-500">
                          {item.detail}
                        </span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={200}>
            <Card className="p-7">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-300">
                Languages
              </h3>
              <ul className="space-y-3">
                {languages.map((language) => (
                  <li key={language.name} className="text-sm">
                    <span className="font-semibold text-slate-200">
                      {language.name}
                    </span>
                    <span className="mt-0.5 block text-slate-500">
                      {language.level}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

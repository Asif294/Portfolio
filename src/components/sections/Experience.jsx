import { experience } from "../../data/experience";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Tag from "../ui/Tag";
import Reveal from "../ui/Reveal";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="03 — Experience"
      title="Where I've worked"
      description="Professional backend work across client projects and a large-scale e-commerce engine."
      className="bg-ink-900"
    >
      <div className="relative">
        {/* Timeline rail */}
        <div className="absolute left-[15px] top-2 hidden h-full w-0.5 bg-ink-700 sm:block" />

        <div className="space-y-8">
          {experience.map((job, index) => (
            <Reveal key={job.company} delay={index * 100}>
              <div className="relative sm:pl-14">
                {/* Timeline node */}
                <span
                  className={`absolute left-[10px] top-8 hidden h-3 w-3 rounded-full ring-4 ring-ink-900 sm:block ${
                    job.current ? "bg-accent-400" : "bg-ink-600"
                  }`}
                />

                <Card className="p-7 md:p-8">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.role}</h3>
                      <p className="mt-1 text-sm font-semibold text-accent-400">
                        {job.company}
                        <span className="ml-2 font-normal text-slate-500">
                          · {job.type}
                        </span>
                      </p>
                    </div>

                    <span
                      className={`shrink-0 rounded-full px-3 py-1 font-mono text-xs ${
                        job.current
                          ? "bg-accent-400/10 text-accent-300"
                          : "bg-ink-700 text-slate-400"
                      }`}
                    >
                      {job.period}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-relaxed text-slate-400"
                      >
                        <span className="mt-1 text-accent-400">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-ink-700/70 pt-5">
                    {job.stack.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

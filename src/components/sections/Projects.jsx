import { FaGithub } from "react-icons/fa";

import { projects } from "../../data/projects";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Tag from "../ui/Tag";
import Reveal from "../ui/Reveal";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="04 — Projects"
      title="Things I've built"
      description="Backend systems built with Django and DRF — from healthcare scheduling to e-commerce checkout flows."
    >
      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 100} className="h-full">
            <Card className="group flex h-full flex-col overflow-hidden">
              <div className="relative h-44 overflow-hidden bg-ink-900">
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.subtitle}`}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-70 transition duration-500
                             group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/20 to-transparent" />
                {project.featured && (
                  <span className="absolute right-3 top-3 rounded-full bg-accent-400 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-950">
                    Featured
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-accent-400">
                  {project.subtitle}
                </p>

                <p className="mt-4 text-[15px] leading-relaxed text-slate-200">
                  {project.overview}
                </p>

                <ul className="mt-4 space-y-2">
                  {project.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm leading-relaxed text-slate-300"
                    >
                      <span className="mt-0.5 text-accent-400">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>

                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg border
                               border-accent-400/70 px-4 py-2.5 text-sm font-semibold text-accent-400
                               transition duration-300 hover:bg-accent-400 hover:text-ink-950"
                  >
                    <FaGithub />
                    View source
                  </a>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

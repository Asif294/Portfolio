import { skillGroups } from "../../data/skills";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Tag from "../ui/Tag";
import Reveal from "../ui/Reveal";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title="Technologies I work with"
      description="The stack I use day to day to design, build, secure and deploy backend services."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.title} delay={index * 80}>
              <Card className="h-full p-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-400/10 text-accent-400">
                    <Icon />
                  </span>
                  <h3 className="text-base font-semibold text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

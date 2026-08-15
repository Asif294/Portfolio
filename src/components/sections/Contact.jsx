import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

import { profile, socials } from "../../data/profile";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";

const channels = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: profile.phone,
    href: `https://wa.me/${profile.phoneLink}`,
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: profile.location,
    href: null,
  },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="06 — Contact"
      title="Let's work together"
      description="I'm open to backend roles, internships and freelance work. The fastest way to reach me is email or WhatsApp."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {channels.map(({ icon: Icon, label, value, href }, index) => {
          const content = (
            <Card className="flex h-full flex-col items-center justify-center p-8 text-center">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-400/10 text-xl text-accent-400">
                <Icon />
              </span>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                {label}
              </h3>
              <p className="mt-2 break-all text-sm text-slate-400">{value}</p>
            </Card>
          );

          return (
            <Reveal key={label} delay={index * 100} className="h-full">
              {href ? (
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </Reveal>
          );
        })}
      </div>

      {/* Primary call to action */}
      <Reveal delay={200}>
        <div className="mt-10 rounded-2xl border border-accent-400/20 bg-gradient-to-r from-accent-500/10 via-ink-800 to-ink-800 p-8 text-center md:p-12">
          <h3 className="text-2xl font-bold text-white md:text-3xl">
            Have a project in mind?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
            Tell me what you're building and I'll get back to you within a day.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent-400 px-6 py-3
                         text-sm font-semibold text-ink-950 shadow-lg shadow-accent-400/20
                         transition duration-300 hover:bg-accent-300"
            >
              Send me an email
              <FaArrowRight className="text-xs" />
            </a>
            <a
              href={profile.resume}
              download={profile.resumeFileName}
              className="inline-flex items-center gap-2 rounded-full border border-ink-600
                         px-6 py-3 text-sm font-semibold text-slate-200 transition duration-300
                         hover:border-accent-400 hover:text-accent-400"
            >
              Download CV
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-5">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="text-lg text-slate-500 transition-colors hover:text-accent-400"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

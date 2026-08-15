import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

export const profile = {
  name: "Md. Asifur Rahman",
  shortName: "Asifur Rahman",
  role: "Backend Developer",
  title: "Undergraduate Student, Computer Science & Engineering",
  tagline: "I build scalable, secure backend systems.",
  intro:
    "Backend developer working with Django, Django REST Framework and PostgreSQL — " +
    "designing REST APIs, tuning database queries, and shipping secure, well-documented services.",
  objective:
    "Backend developer with one year of industry experience building and maintaining production " +
    "Python services using Django and Django REST Framework. I focus on RESTful API design, " +
    "PostgreSQL and Django ORM query optimization, Swagger/OpenAPI documentation, and securing " +
    "applications with JWT authentication and role-based access control. Currently a Computer " +
    "Science and Engineering undergraduate, looking for a backend engineering role where I can " +
    "build scalable, secure and maintainable systems.",
  location: "Dhaka, Bangladesh",
  phone: "+880 1885 430525",
  phoneLink: "8801885430525",
  email: "asifurrahman677294@gmail.com",
  resume: "/Asifur_Rahman_Resume.pdf",
  resumeFileName: "Asifur_Rahman_Resume.pdf",
  avatar: "/profile.jpg",
  available: true,
};

export const socials = [
  {
    label: "GitHub",
    handle: "github.com/Asif294",
    href: "https://github.com/Asif294",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    handle: "in/asifur-rahman",
    href: "https://www.linkedin.com/in/asifur-rahman-435b2a200/",
    icon: FaLinkedin,
  },
  {
    label: "Codeforces",
    handle: "asifur_rahman677",
    href: "https://codeforces.com/profile/asifur_rahman677",
    icon: SiCodeforces,
  },
  {
    label: "LeetCode",
    handle: "u/Asif294",
    href: "https://leetcode.com/u/Asif294/",
    icon: SiLeetcode,
  },
  {
    label: "WhatsApp",
    handle: profile.phone,
    href: `https://wa.me/${profile.phoneLink}`,
    icon: FaWhatsapp,
  },
  {
    label: "Email",
    handle: profile.email,
    href: `mailto:${profile.email}`,
    icon: FaEnvelope,
  },
];

/** Headline numbers shown under the hero. */
export const stats = [
  { value: "1+", label: "Year of industry experience" },
  { value: "130+", label: "Codeforces problems solved" },
  { value: "40+", label: "LeetCode problems solved" },
  { value: "3.48", label: "Diploma CGPA / 4.00" },
];

/** Navigation entries — each `id` must match a section id rendered in App.jsx. */
export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

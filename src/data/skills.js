import {
  FaCode,
  FaLayerGroup,
  FaDatabase,
  FaDocker,
  FaToolbox,
  FaShieldAlt,
} from "react-icons/fa";

export const skillGroups = [
  {
    title: "Programming Languages",
    icon: FaCode,
    items: ["Python", "C", "C++", "JavaScript"],
  },
  {
    title: "Frameworks & Libraries",
    icon: FaLayerGroup,
    items: [
      "Django",
      "Django REST Framework",
      "FastAPI",
      "WebSockets",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases",
    icon: FaDatabase,
    items: ["PostgreSQL", "MySQL", "SQLite", "Django ORM"],
  },
  {
    title: "DevOps & Deployment",
    icon: FaDocker,
    items: ["Docker", "Nginx", "CI/CD Pipelines", "Linux (Ubuntu)"],
  },
  {
    title: "Tools",
    icon: FaToolbox,
    items: ["Git", "GitHub", "Postman", "Swagger/OpenAPI"],
  },
  {
    title: "Security & Auth",
    icon: FaShieldAlt,
    items: ["JWT", "Role-Based Access Control (RBAC)"],
  },
];

export const interpersonalSkills = [
  "Problem Solving",
  "Time Management",
  "Team Work & Collaboration",
  "Technical Documentation",
];

export const achievements = [
  {
    label: "Codeforces",
    detail: "130+ problems solved",
    href: "https://codeforces.com/profile/asifur_rahman677",
  },
  {
    label: "LeetCode",
    detail: "40+ problems solved",
    href: "https://leetcode.com/u/Asif294/",
  },
  {
    label: "Diploma in CST",
    detail: "Completed with a CGPA of 3.48 / 4.00",
  },
];

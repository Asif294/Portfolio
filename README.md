# Md. Asifur Rahman — Portfolio

Personal portfolio of **Md. Asifur Rahman**, a backend developer working with Django,
Django REST Framework and PostgreSQL. Single-page site built with React, Vite and Tailwind CSS.

## Tech stack

- **Framework:** React 19 + Vite 7
- **Styling:** Tailwind CSS 3 (custom `ink` / `accent` design tokens)
- **Icons:** react-icons
- **Linting:** ESLint 9 (flat config)

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start the dev server
npm run build   # production build into dist/
npm run preview # preview the production build
npm run lint    # lint the source
```

## Project structure

```
src/
├── App.jsx                 # page composition (single page, anchor navigation)
├── main.jsx                # React entry point
├── index.css               # Tailwind layers + base styles
├── data/                   # all content lives here — single source of truth
│   ├── profile.js          # identity, socials, stats, nav links
│   ├── experience.js       # professional experience
│   ├── projects.js         # project case studies
│   ├── skills.js           # skill groups, interpersonal skills, achievements
│   └── education.js        # degrees, certifications, languages
├── hooks/
│   ├── useActiveSection.js # IntersectionObserver scroll-spy for the navbar
│   └── useScrolled.js      # scroll-threshold flag
└── components/
    ├── layout/             # Navbar, Footer, ScrollToTop
    ├── sections/           # Hero, About, Skills, Experience, Projects, Education, Contact
    └── ui/                 # Section, Card, Tag, Reveal primitives
```

**Content is separated from presentation.** To update a job, project or skill, edit the
relevant file in `src/data/` — no JSX changes needed. Section components render whatever
the data provides.

## Sections

| Section | Content |
|---|---|
| Hero | Name, role, availability, social links, resume download, headline stats |
| About | Career objective, interpersonal strengths, achievements, languages |
| Skills | Six grouped categories covering languages, frameworks, databases, DevOps, tools and security |
| Experience | Timeline of professional roles with responsibilities and stack |
| Projects | Backend case studies with overview, highlights, stack and source links |
| Education | Degrees, certifications |
| Contact | Email, WhatsApp, location and social links |

## Notes

- Navigation uses hash anchors (`#skills`, `#projects`, …) with a scroll-spy that
  highlights the active section — no router required.
- `Reveal` fades content in on scroll; all motion is disabled under
  `prefers-reduced-motion`.
- The résumé PDF lives at `public/Asifur_Rahman_Resume.pdf`; the path is set once in
  `src/data/profile.js`.

## Contact

- **Email:** asifurrahman677294@gmail.com
- **GitHub:** [Asif294](https://github.com/Asif294)
- **LinkedIn:** [asifur-rahman](https://www.linkedin.com/in/asifur-rahman-435b2a200/)
- **Codeforces:** [asifur_rahman677](https://codeforces.com/profile/asifur_rahman677)
- **LeetCode:** [Asif294](https://leetcode.com/u/Asif294/)

export const projects = [
  {
    title: "SmartCare",
    subtitle: "Hospital Management System",
    overview:
      "A healthcare backend managing doctor profiles, patient records and appointment scheduling, with permissions that keep medical data protected.",
    points: [
      "Developed a backend managing doctor profiles, patient records and appointment scheduling.",
      "Implemented secure patient registration and real-time booking logic to prevent scheduling conflicts.",
      "Integrated role-based permissions to protect sensitive medical records and user data.",
    ],
    stack: ["Django", "DRF", "SQLite", "Django ORM"],
    image: "/hospital-management-system.webp",
    repo: "https://github.com/Asif294/SmartCare",
    featured: true,
  },
  {
    title: "StyleHub",
    subtitle: "E-commerce Clothing Store",
    overview:
      "An e-commerce backend supporting complex product schemas, cart and wishlist logic, multi-factor filtering and a secure checkout workflow.",
    points: [
      "Built a backend supporting complex product schemas, cart logic and wishlist functionality.",
      "Implemented multi-factor filtering (category, size, colour, price) using django-filter.",
      "Developed a secure checkout workflow and a product review system to improve user engagement.",
    ],
    stack: ["Django", "DRF", "SQLite", "django-filter"],
    image: "/stylehub.png",
    repo: "https://github.com/Asif294/Stylehub-backend",
    featured: true,
  },
  {
    title: "Banking System",
    subtitle: "Bank Management Backend",
    overview:
      "A banking backend handling user accounts, transactions and fund transfers, secured with token-based authentication and a full audit trail.",
    points: [
      "Implemented account creation, deposits, withdrawals and fund transfers.",
      "Secured every endpoint with token-based authentication.",
      "Managed transaction history with detailed audit trails.",
    ],
    stack: ["Django", "DRF", "SQLite", "JWT"],
    image: "/bank.webp",
    repo: "https://github.com/Asif294/Banking_system",
    featured: false,
  },
];

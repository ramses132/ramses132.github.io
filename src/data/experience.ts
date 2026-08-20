export interface Experience {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  context?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  current?: boolean;
  aiNote?: string;
}

export const experiences: Experience[] = [
  {
    id: "indra",
    company: "INDRA",
    location: "Peru",
    role: "Senior Backend Developer",
    period: "June 2025 — Present",
    context: "Insurance / La Positiva",
    description:
      "Backend and ETL orchestration for insurance integrations, modernization of legacy systems using Domain-Driven Design and modern cloud architectures.",
    highlights: [
      "ETL processes and service orchestration",
      "Policy, certificate, payroll and billing integrations",
      "Modernization of legacy systems",
      "Domain-Driven Design and Inversion of Control",
      "Rent quotation process modernization",
    ],
    technologies: ["Node.js", "TypeScript", "C#", "ASP.NET", "AWS Fargate", "AWS Lambda", "DDD"],
    current: true,
    aiNote: "AI-assisted software engineering practices for implementation, debugging, testing and refactoring while maintaining architectural and code-quality standards.",
  },
  {
    id: "ayesa-toyota",
    company: "AYESA / TOYOTA",
    location: "Peru",
    role: "Backend / Integration Developer",
    period: "September 2024 — February 2025",
    description:
      "ETL and data migration services for Toyota Connect Peru, building automated data pipelines and cloud architecture on AWS.",
    highlights: [
      "Toyota Connect Peru platform",
      "Automated data migration pipelines",
      "AWS serverless architecture design",
    ],
    technologies: ["Python", "AWS Lambda", "AWS S3", "AWS Secrets Manager", "AWS Redshift", "AWS SAM", "DDD"],
  },
  {
    id: "freelance-trading",
    company: "Freelance",
    location: "Mexico",
    role: "Backend Developer",
    period: "May 2024 — September 2024",
    description:
      "Real-time algorithmic trading system capturing, processing and storing market data with high-throughput pipelines.",
    highlights: [
      "Real-time OHLCV data capture and processing",
      "High-throughput async data pipelines",
      "Distributed processing architecture",
    ],
    technologies: ["Python", "Prefect", "Socket.io", "PostgreSQL", "DynamoDB", "AWS Lambda"],
    aiNote: "AI-assisted software engineering practices for implementation, debugging, testing and refactoring.",
  },
  {
    id: "fast-dolphin",
    company: "Fast Dolphin",
    location: "Mexico",
    role: "Senior Backend Developer",
    period: "November 2023 — April 2024",
    description:
      "Architecture development and data modeling for backend systems with strong focus on security and CI/CD.",
    highlights: [
      "Architecture development and data modeling",
      "Identity and access management",
      "CI/CD pipeline implementation",
    ],
    technologies: ["Django", "Keycloak", "GitLab CI", "PostgreSQL", "Docker", "Linux Bash"],
  },
  {
    id: "meru",
    company: "Meru",
    location: "Mexico",
    role: "Senior Backend Developer",
    period: "July 2023 — December 2023",
    description:
      "Backend development applying Domain-Driven Design principles for clean, maintainable business logic.",
    highlights: [
      "Domain-Driven Design implementation",
      "Clean architecture patterns",
    ],
    technologies: ["Ruby on Rails", "PostgreSQL", "Docker", "DDD"],
  },
  {
    id: "pamer",
    company: "Pamer",
    location: "Peru",
    role: "Tech Lead",
    period: "February 2023 — July 2023",
    description:
      "Technical leadership overseeing backend architecture, API development, and team delivery practices.",
    highlights: [
      "Technical leadership and architecture decisions",
      "Serverless API development on AWS Lambda",
      "Scrum-based delivery",
    ],
    technologies: ["Node.js", "TypeScript", "NestJS", "PostgreSQL", "AWS Lambda", "GitHub Actions", "Scrum"],
  },
  {
    id: "ayesa",
    company: "AYESA",
    location: "Peru",
    role: "Senior Backend Java Developer",
    period: "November 2022 — February 2023",
    description:
      "Enterprise backend development with Java ecosystem, building robust services with relational database design.",
    highlights: [
      "Enterprise backend service development",
      "Relational database design and optimization",
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Python", "Oracle"],
  },
  {
    id: "liftit",
    company: "Liftit",
    location: "Colombia",
    role: "System Analyst / Tech Lead",
    period: "July 2022 — September 2022",
    description:
      "System analysis and technical leadership for cloud-native backend services with SOAP integrations.",
    highlights: [
      "Cloud-native architecture on GCP",
      "SOAP service integrations",
      "DDD and Scrum practices",
    ],
    technologies: ["GCP", "Python", "FastAPI", "SOAP", "PostgreSQL", "DDD", "Scrum", "Azure DevOps"],
  },
  {
    id: "auna",
    company: "Auna",
    location: "Peru",
    role: "Backend Developer",
    period: "May 2022 — August 2022",
    description:
      "Design and implementation of serverless microservice architecture for healthcare operations.",
    highlights: [
      "Serverless AWS microservice architecture",
      "GraphQL API development",
    ],
    technologies: ["Python", "Django", "PostgreSQL", "GraphQL"],
  },
  {
    id: "qds-jobs",
    company: "QDS Jobs",
    location: "Peru",
    role: "Backend Developer",
    period: "January 2021 — January 2022",
    description:
      "Backend development for Clinic AUNA with serverless architecture, clean patterns, and cloud-native services.",
    highlights: [
      "DDD and Onion Architecture implementation",
      "Serverless backend on AWS",
    ],
    technologies: ["TypeScript", "AWS Lambda", "DynamoDB", "EC2", "IAM", "Cognito", "DDD", "Onion Architecture"],
  },
  {
    id: "rextie",
    company: "Rextie",
    location: "Peru",
    role: "Backend Developer",
    period: "November 2019 — January 2021",
    description:
      "Backend development and banking integrations for fintech platform with serverless architecture.",
    highlights: [
      "Banking service integrations",
      "Serverless architecture patterns",
      "Domain-Driven Design",
    ],
    technologies: ["Python", "Django", "Serverless", "DDD"],
  },
  {
    id: "deliboo",
    company: "Deliboo",
    location: "Chile",
    role: "Backend Developer",
    period: "January 2017 — 2021",
    description:
      "Backend systems for operations management, administration and third-party integrations.",
    highlights: [
      "Backend systems for administration and operations",
      "Kitchen operations management",
      "Third-party API integrations",
    ],
    technologies: ["Python", "Django", "Django REST Framework", "Celery", "RabbitMQ", "Google API", "Odoo"],
  },
  {
    id: "gobierno",
    company: "Gobierno del Estado Nueva Esparta",
    location: "Venezuela",
    role: "IT Analyst",
    period: "2014 — 2016",
    description:
      "IT solutions development for government systems across multiple technology stacks.",
    highlights: [
      "Full-stack development for government platforms",
      "Multi-technology backend solutions",
    ],
    technologies: ["Python", "Django", "PHP", "Java", "Oracle", "JavaScript"],
  },
];

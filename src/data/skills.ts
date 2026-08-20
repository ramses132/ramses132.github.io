export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  featured?: boolean;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Backend",
    skills: [
      { name: "Python", featured: true },
      { name: "Django", featured: true },
      { name: "Django REST Framework" },
      { name: "Flask" },
      { name: "FastAPI", featured: true },
      { name: "Node.js", featured: true },
      { name: "TypeScript", featured: true },
      { name: "NestJS", featured: true },
      { name: "C#" },
      { name: "ASP.NET" },
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "PHP" },
      { name: "Laravel" },
      { name: "Ruby on Rails" },
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "AWS", featured: true },
      { name: "Lambda" },
      { name: "S3" },
      { name: "EC2" },
      { name: "RDS" },
      { name: "DynamoDB" },
      { name: "Fargate" },
      { name: "Redshift" },
      { name: "AWS SAM" },
      { name: "Serverless Framework", featured: true },
      { name: "Docker", featured: true },
      { name: "Docker Compose" },
      { name: "GitHub Actions" },
      { name: "Jenkins" },
      { name: "GitLab CI" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", featured: true },
      { name: "MySQL" },
      { name: "MariaDB" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Oracle" },
      { name: "Elasticsearch" },
      { name: "Solr" },
    ],
  },
  {
    name: "Architecture & Messaging",
    skills: [
      { name: "Domain-Driven Design", featured: true },
      { name: "Onion Architecture" },
      { name: "REST APIs" },
      { name: "GraphQL" },
      { name: "RabbitMQ" },
      { name: "Celery" },
      { name: "Event-driven architecture" },
      { name: "ETL" },
      { name: "Microservices" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git" },
      { name: "Linux" },
      { name: "Bash" },
      { name: "Swagger" },
      { name: "Sentry" },
      { name: "Draw.io" },
    ],
  },
  {
    name: "AI-Assisted Engineering",
    skills: [
      { name: "Agentic Development" },
      { name: "Spec-Driven Development" },
      { name: "AI-assisted coding" },
      { name: "AI-assisted testing" },
      { name: "AI-assisted debugging" },
      { name: "AI-assisted refactoring" },
      { name: "Prompt Engineering" },
    ],
  },
];

export const engineeringPrinciples = [
  {
    number: "01",
    title: "Design for Scale",
    description:
      "Build systems that grow with demand. From serverless architectures to distributed processing, every decision considers future scale.",
  },
  {
    number: "02",
    title: "Keep Systems Maintainable",
    description:
      "Clean architecture and Domain-Driven Design ensure that codebases remain understandable and adaptable long after initial delivery.",
  },
  {
    number: "03",
    title: "Automate Repetitive Processes",
    description:
      "CI/CD pipelines, infrastructure as code, and automated testing eliminate manual work and reduce the risk of human error.",
  },
  {
    number: "04",
    title: "Build with Business Context",
    description:
      "Technology decisions are always grounded in business requirements. The best architecture serves the domain it operates in.",
  },
];

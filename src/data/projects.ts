export interface Project {
  id: string;
  name: string;
  problem: string;
  solution: string;
  architecture: string;
  technologies: string[];
  impact: string;
}

export const projects: Project[] = [
  {
    id: "insurance-platform",
    name: "Insurance Integration Platform",
    problem:
      "Insurance operations required integration across policies, certificates, payroll, and billing systems with legacy platform constraints.",
    solution:
      "Designed and implemented an ETL orchestration layer with service integration patterns using Domain-Driven Design, modernizing legacy processes while maintaining business continuity.",
    architecture:
      "Event-driven microservices on AWS Fargate and Lambda, with DDD bounded contexts separating insurance domains.",
    technologies: ["Node.js", "TypeScript", "C#", "ASP.NET", "AWS Fargate", "AWS Lambda", "DDD", "ETL"],
    impact:
      "Streamlined insurance operations across multiple integration points, enabling automated policy and billing workflows.",
  },
  {
    id: "toyota-connect",
    name: "Toyota Connect Data Platform",
    problem:
      "Toyota Connect Peru needed automated data migration and transformation pipelines for automotive operational data.",
    solution:
      "Built serverless ETL services for automated data extraction, transformation, and loading into analytics-ready data stores.",
    architecture:
      "Serverless pipeline with AWS Lambda triggers, S3 data lake staging, and Redshift warehouse for analytics.",
    technologies: ["Python", "AWS Lambda", "AWS S3", "AWS Redshift", "AWS SAM", "DDD"],
    impact:
      "Enabled automated data migration reducing manual processing, with analytics-ready data in Redshift.",
  },
  {
    id: "market-data",
    name: "Real-Time Market Data Platform",
    problem:
      "Need for capturing, processing and storing real-time OHLCV market data for algorithmic trading analysis.",
    solution:
      "Designed a high-throughput async data pipeline capturing real-time market data, with reliable storage and processing orchestration.",
    architecture:
      "Event-driven pipeline with async processors, scheduled orchestration via Prefect, and dual storage in PostgreSQL and DynamoDB.",
    technologies: ["Python", "Asyncio", "Prefect", "Socket.io", "PostgreSQL", "DynamoDB", "AWS Lambda"],
    impact:
      "Reliable real-time data capture system capable of processing high-frequency market data streams.",
  },
  {
    id: "healthcare-serverless",
    name: "Serverless Healthcare Architecture",
    problem:
      "Healthcare operations needed a scalable, secure backend architecture without managing infrastructure.",
    solution:
      "Implemented a fully serverless microservice architecture with clean domain boundaries and API-first design.",
    architecture:
      "Serverless microservices on AWS Lambda with DynamoDB storage, API Gateway routing, and DDD domain models.",
    technologies: ["AWS Lambda", "DynamoDB", "TypeScript", "GraphQL", "DDD", "Onion Architecture"],
    impact:
      "Zero-infrastructure-management backend that scales automatically with healthcare operation demands.",
  },
];

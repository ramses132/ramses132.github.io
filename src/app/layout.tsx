import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramses Salazar | Senior Backend Developer & Solutions Architect",
  description:
    "Senior Backend Developer and Solutions Architect specializing in Python, Node.js, TypeScript, AWS, serverless architectures, ETL and scalable backend systems.",
  keywords: [
    "Backend Developer",
    "Solutions Architect",
    "Python",
    "Node.js",
    "TypeScript",
    "AWS",
    "Serverless",
    "ETL",
    "Microservices",
    "Domain-Driven Design",
    "Cloud Architecture",
  ],
  authors: [{ name: "Ramses Salazar" }],
  openGraph: {
    title: "Ramses Salazar | Senior Backend Developer & Solutions Architect",
    description:
      "Senior Backend Developer and Solutions Architect specializing in Python, Node.js, TypeScript, AWS, serverless architectures, ETL and scalable backend systems.",
    type: "website",
    locale: "en_US",
    siteName: "Ramses Salazar — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramses Salazar | Senior Backend Developer & Solutions Architect",
    description:
      "Senior Backend Developer and Solutions Architect specializing in Python, Node.js, TypeScript, AWS, serverless architectures, ETL and scalable backend systems.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1929",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-navy-950 text-navy-200 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}

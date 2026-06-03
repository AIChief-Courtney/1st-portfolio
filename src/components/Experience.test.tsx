import { render, screen } from "@testing-library/react";
import Experience from "./Experience";

describe("Experience component", () => {
  test("renders the Experience section heading", () => {
    render(<Experience />);
    const heading = screen.getByRole("heading", { name: /Experience/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders the section description", () => {
    render(<Experience />);
    const description = screen.getByText(
      /Building AI products and modern web applications/i,
    );
    expect(description).toBeInTheDocument();
  });

  test("renders all job entries", () => {
    render(<Experience />);
    const roles = [
      "Senior AI Engineer",
      "Software Engineer",
      "Full-Stack Developer",
    ];

    roles.forEach((role) => {
      expect(screen.getByRole("heading", { name: role })).toBeInTheDocument();
    });
  });

  test("renders company logos with correct alt text", () => {
    render(<Experience />);
    const companies = ["Meta", "NVIDIA", "Microsoft"];

    companies.forEach((company) => {
      const logo = screen.getByAltText(company);
      expect(logo).toBeInTheDocument();
    });
  });

  test("renders job descriptions", () => {
    render(<Experience />);
    expect(
      screen.getByText(
        /Built enterprise RAG systems, AI agents, vector search infrastructure, and LLM-powered SaaS platforms/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Developed scalable full-stack applications using React, TypeScript, Node.js, and cloud services/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Created enterprise-grade web platforms and internal productivity solutions/i,
      ),
    ).toBeInTheDocument();
  });
});

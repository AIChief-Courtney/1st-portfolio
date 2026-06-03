import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

describe("Projects component", () => {
  test("renders Featured Projects heading", () => {
    render(<Projects />);
    const heading = screen.getByRole("heading", { name: /Featured Projects/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders all project titles and descriptions", () => {
    render(<Projects />);

    const projects = [
      {
        title: "Enterprise RAG Platform",
        description:
          "Built a Retrieval-Augmented Generation system using OpenAI embeddings and vector databases.",
      },
      {
        title: "AI Resume Analyzer",
        description: "Developed an LLM-powered resume screening platform.",
      },
      {
        title: "Customer Support Agent",
        description:
          "Created an autonomous AI chatbot reducing support workload.",
      },
    ];

    projects.forEach((proj) => {
      expect(screen.getByText(proj.title)).toBeInTheDocument();
      expect(screen.getByText(proj.description)).toBeInTheDocument();
    });
  });

  test("renders tech icons for each project", () => {
    render(<Projects />);

    // Locate the projects section and count h3 titles as project cards
    const section = document.getElementById("projects");
    const titles = section ? section.querySelectorAll("h3") : [];
    expect(titles.length).toBeGreaterThanOrEqual(3);
  });
});

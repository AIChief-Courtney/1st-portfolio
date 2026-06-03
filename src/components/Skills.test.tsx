import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills component", () => {
  test("renders the skills section heading", () => {
    render(<Skills />);
    const heading = screen.getByRole("heading", { name: /Technical Skills/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders all expected skill names", () => {
    render(<Skills />);
    const skillNames = [
      "Python",
      "TypeScript",
      "React",
      "Node.js",
      "FastAPI",
      "OpenAI API",
      "LangChain",
      "RAG",
      "Vector Databases",
      "Prompt Engineering",
      "Docker",
      "AWS",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "GitHub Actions",
    ];

    skillNames.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });
});

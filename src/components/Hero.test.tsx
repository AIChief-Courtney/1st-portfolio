import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero component", () => {
  test("renders hero image with alt text", () => {
    render(<Hero />);

    const heroImage = screen.getByAltText("Hero");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "/courtney_background.png");
  });

  test("renders main heading and highlighted text", () => {
    render(<Hero />);

    expect(screen.getByText(/Building/i)).toBeInTheDocument();
    expect(screen.getByText(/Intelligent/i)).toBeInTheDocument();
    expect(screen.getByText(/AI Agents/i)).toBeInTheDocument();
  });

  test("renders hero badge text", () => {
    render(<Hero />);

    const badge = screen.getByText(/AI Engineer • Full-Stack Developer/i);
    expect(badge).toBeInTheDocument();
  });

  test("renders action buttons with correct links", () => {
    render(<Hero />);

    const exploreButton = screen.getByRole("link", {
      name: /Explore Projects/i,
    });
    const resumeButton = screen.getByRole("link", { name: /Download Resume/i });

    expect(exploreButton).toHaveAttribute("href", "#projects");
    expect(resumeButton).toHaveAttribute("href", "/resume.pdf");
  });

  test("renders expected tech stack tags", () => {
    render(<Hero />);

    const techItems = [
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "LangChain",
      "OpenAI",
      "AWS",
      "Docker",
    ];

    techItems.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });
});

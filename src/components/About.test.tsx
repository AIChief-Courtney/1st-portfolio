import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About component", () => {
  test("renders the About section heading", () => {
    render(<About />);
    const heading = screen.getByRole("heading", { name: /About Me/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders the profile image with correct alt text", () => {
    render(<About />);
    const image = screen.getByAltText("Courtney Sterling");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/Handsome_courtney.png");
  });

  test("renders the main bio paragraphs", () => {
    render(<About />);
    expect(screen.getByText(/I'm a senior AI and Full-Stack engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/I also have extensive experience with databases/i)).toBeInTheDocument();
  });
});
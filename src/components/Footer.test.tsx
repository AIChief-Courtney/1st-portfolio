import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  test("renders contact email and headings", () => {
    render(<Footer />);
    expect(
      screen.getByText(/Let's Build Something Amazing/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /AI Engineering • Full-Stack Development • AI Consulting/i,
      ),
    ).toBeInTheDocument();
    const emailLink = screen.getByRole("link", { name: /orion@example.com/i });
    expect(emailLink).toHaveAttribute("href", "mailto:orion@example.com");
  });

  test("renders social links with correct aria-labels", () => {
    render(<Footer />);
    expect(screen.getByLabelText(/LinkedIn/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/GitHub/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Twitter/i)).toBeInTheDocument();
  });

  test("renders copyright and tech blurb", () => {
    render(<Footer />);
    expect(
      screen.getByText(/© 2026 Orion Sterling. All rights reserved./i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Built with React, TypeScript & Tailwind CSS/i),
    ).toBeInTheDocument();
  });
});

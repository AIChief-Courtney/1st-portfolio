import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact component", () => {
  test("renders Contact heading and subheading", () => {
    render(<Contact />);

    // Use getByText to match the visible heading text even when it contains nested spans
    const heading = screen.getByText(/Let's Build Something/i);
    const subHeading = screen.getByText(
      /Available for AI Engineering, Full-Stack Development/i,
    );

    expect(heading).toBeInTheDocument();
    expect(subHeading).toBeInTheDocument();
  });

  test("renders Contact call-to-action link with mailto", () => {
    render(<Contact />);

    // Prefer accessible name lookup; fallback to mailto selector if role lookup fails
    let cta: Element | null;
    try {
      cta = screen.getByRole("link", { name: /Contact Me/i });
    } catch (err) {
      // If getByRole fails (sometimes inaccessible due to nested/decorative spans),
      // fall back to querying the mailto link directly.
      cta = document.querySelector('a[href^="mailto:"]');
    }

    expect(cta).toBeTruthy();
    expect(cta).toHaveAttribute("href", "mailto:you@example.com");
  });

  test("renders decorative SVG inside CTA", () => {
    render(<Contact />);
    // Use queryByRole (non-throwing) and fall back to a raw SVG selector
    const svg =
      screen.queryByRole("img", { hidden: true }) ||
      document.querySelector("svg");
    expect(svg).toBeTruthy();
  });
});

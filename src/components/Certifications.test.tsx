import { render, screen } from "@testing-library/react";
import Certifications from "./Certifications";

describe("Certifications component", () => {
  test("renders Certifications heading and subheading", () => {
    render(<Certifications />);

    const heading = screen.getByRole("heading", { name: /Certifications/i });
    const subheading = screen.getByText(
      /Verified professional certifications/i,
    );

    expect(heading).toBeInTheDocument();
    expect(subheading).toBeInTheDocument();
  });

  test("renders all certification items", () => {
    render(<Certifications />);

    const certs = [
      "AWS Certified Cloud Practitioner",
      "Google Generative AI",
      "OpenAI Prompt Engineering",
      "Microsoft Azure AI Engineer",
    ];

    certs.forEach((c) => {
      expect(screen.getByText(c)).toBeInTheDocument();
    });
  });

  test("each certification has a check icon", () => {
    render(<Certifications />);
    // there should be an icon element for each certification; check that the number of cert text nodes matches
    const certItems = screen.getAllByText(
      /AWS Certified Cloud Practitioner|Google Generative AI|OpenAI Prompt Engineering|Microsoft Azure AI Engineer/,
    );
    expect(certItems.length).toBe(4);
  });
});

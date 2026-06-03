import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders the app without crashing", () => {
    render(<App />);
    const appRoot = screen.getByRole("navigation");
    expect(appRoot).toBeInTheDocument();
  });

  test("shows the portfolio brand name", () => {
    render(<App />);
    const brandText = screen.getByText(/OrionSterling/i);
    expect(brandText).toBeInTheDocument();
  });
});

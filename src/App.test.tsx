import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders Get Started heading", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /get started/i }),
    ).toBeInTheDocument();
  });

  test("renders counter with initial value 0", () => {
    render(<App />);

    expect(
      screen.getByRole("button", { name: /count is 0/i }),
    ).toBeInTheDocument();
  });

  test("increments counter when button is clicked", () => {
    render(<App />);

    const button = screen.getByRole("button", {
      name: /count is 0/i,
    });

    fireEvent.click(button);

    expect(
      screen.getByRole("button", { name: /count is 1/i }),
    ).toBeInTheDocument();
  });

  test("renders documentation links", () => {
    render(<App />);

    expect(
      screen.getByRole("link", { name: /explore vite/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /learn more/i }),
    ).toBeInTheDocument();
  });

  test("renders community links", () => {
    render(<App />);

    expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /discord/i })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /x\.com/i })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /bluesky/i })).toBeInTheDocument();
  });
});

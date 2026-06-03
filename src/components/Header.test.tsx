// Import render and screen from React Testing Library for rendering components and querying DOM elements
import { render, screen } from "@testing-library/react";
// Import userEvent for simulating user interactions like clicks
import userEvent from "@testing-library/user-event";
// Import the Header component we want to test
import Header from "./Header";

// describe() groups all tests for the Header component together
describe("Header Component", () => {
  // test() defines an individual test case - this one checks if logo and title render
  test("renders header with logo and title", () => {
    // render() mounts the Header component into a virtual DOM for testing
    render(<Header />);

    // screen.getByAltText() finds the image element using its alt text attribute
    const logo = screen.getByAltText("Orion Sterling");
    // screen.getByText() finds the first element containing the exact text "OrionSterling"
    const title = screen.getByText("OrionSterling");

    // expect() asserts that the logo element exists in the document
    expect(logo).toBeInTheDocument();
    // expect() asserts that the title element exists in the document
    expect(title).toBeInTheDocument();
  });

  // test() - checks if all navigation link names appear in the component
  test("renders all navigation links", () => {
    // render() mounts the Header component
    render(<Header />);

    // Array of navigation link names we expect to see
    const links = [
      "About",
      "Skills",
      "Experience",
      "Projects",
      "Certifications",
      "Contact",
    ];

    // forEach() loops through each link name
    links.forEach((linkName) => {
      // screen.getAllByText() returns ALL elements containing this link name (desktop + mobile menus)
      const linkElements = screen.getAllByText(linkName);
      // expect() asserts that at least one element with this link name exists (length > 0)
      expect(linkElements.length).toBeGreaterThan(0);
    });
  });

  // test() - verifies that navigation links have the correct href attributes
  test("navigation links have correct hrefs", () => {
    // render() mounts the Header component
    render(<Header />);

    // Array of objects containing link names and their expected href values
    const linkData = [
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Experience", href: "#experience" },
      { name: "Projects", href: "#projects" },
      { name: "Certifications", href: "#certifications" },
      { name: "Contact", href: "#contact" },
    ];

    // forEach() loops through each link object
    linkData.forEach(({ name, href }) => {
      // screen.getAllByText() gets all elements with this link name
      const links = screen.getAllByText(name);
      // Nested forEach() checks each link element found
      links.forEach((link) => {
        // expect() asserts that this link has the correct href attribute
        expect(link).toHaveAttribute("href", href);
      });
    });
  });

  // test() - checks if logo has correct image source and CSS classes
  test("logo has correct src and alt text", () => {
    // render() mounts the Header component
    render(<Header />);

    // screen.getByAltText() finds the logo image, and "as HTMLImageElement" tells TypeScript it's an image
    const logo = screen.getByAltText("Orion Sterling") as HTMLImageElement;

    // expect() asserts that the logo has the correct src attribute pointing to the avatar image
    expect(logo).toHaveAttribute("src", "/courtney_avatar.png");
    // expect() asserts that the logo has the specific Tailwind CSS classes applied
    expect(logo).toHaveClass("w-12", "h-12", "rounded-full");
  });

  // test() - verifies that the navigation element (nav tag) renders
  test("renders navigation element", () => {
    // render() mounts the Header component
    render(<Header />);

    // screen.getByRole() finds the element with role="navigation" (the <nav> tag)
    const nav = screen.getByRole("navigation");
    // expect() asserts that the nav element exists in the document
    expect(nav).toBeInTheDocument();
  });

  // test() - checks if the mobile menu toggle button exists and responds to clicks
  test("toggle button exists and is clickable", async () => {
    // render() mounts the Header component
    render(<Header />);

    // screen.getByRole() finds the first button element (the mobile menu toggle)
    const button = screen.getByRole("button");
    // expect() asserts that the button exists in the document
    expect(button).toBeInTheDocument();

    // await userEvent.click() simulates a user clicking the button (async operation)
    await userEvent.click(button);
    // expect() asserts that the button still exists after being clicked
    expect(button).toBeInTheDocument();
  });

  // test() - verifies that menu button has the "md:hidden" class (hidden on medium+ screens)
  test("menu button has correct attributes", () => {
    // render() mounts the Header component
    render(<Header />);

    // screen.getByRole() finds the button element
    const button = screen.getByRole("button");
    // expect() asserts that the button has the "md:hidden" Tailwind class
    expect(button).toHaveClass("md:hidden");
  });

  // test() - checks if the logo link points to the home page (#)
  test("logo link points to home", () => {
    // render() mounts the Header component
    render(<Header />);

    // screen.getByRole() with name option finds a link containing "OrionSterling" text
    // /OrionSterling/i is a regex pattern (i = case-insensitive)
    const logoLink = screen.getByRole("link", { name: /OrionSterling/i });
    // expect() asserts that the logo link has href="#" (home link)
    expect(logoLink).toHaveAttribute("href", "#");
  });

  // test() - verifies that the component renders without throwing any errors
  test("component renders without crashing", () => {
    // render() returns an object, and we destructure "container" from it
    // container holds the root DOM node of the rendered component
    const { container } = render(<Header />);
    // expect() asserts that the container exists in the document
    expect(container).toBeInTheDocument();
  });

  // test() - checks if the nav element has all the correct Tailwind CSS positioning classes
  test("nav element has correct classes", () => {
    // render() mounts the Header component
    render(<Header />);

    // screen.getByRole() finds the nav element
    const nav = screen.getByRole("navigation");
    // expect() asserts that nav has all these Tailwind classes: fixed positioning, top, left, full width, z-index
    expect(nav).toHaveClass("fixed", "top-0", "left-0", "w-full", "z-50");
  });

  // test() - verifies that navigation links are rendered as list items
  test("all navigation items are in a list", () => {
    // render() mounts the Header component
    render(<Header />);

    // screen.getAllByRole() finds all elements with role="listitem" (<li> tags)
    const listItems = screen.getAllByRole("listitem");
    // expect() asserts that at least one list item exists (length > 0)
    expect(listItems.length).toBeGreaterThan(0);
  });
});

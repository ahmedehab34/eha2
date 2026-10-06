import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders the main heading", () => {
    render(<App />);

    expect(
      screen.getByText("React + Docker + Travis CI")
    ).toBeInTheDocument();
  });

  test("renders the description", () => {
    render(<App />);

    expect(
      screen.getByText(
        "If you can see this page, the React project is working."
      )
    ).toBeInTheDocument();
  });

  test("renders exactly one main heading", () => {
    render(<App />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("React + Docker + Travis CI");
  });

  test("renders the application container", () => {
    render(<App />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading.parentElement).toBeInTheDocument();
  });

  test("renders the correct application content", () => {
    render(<App />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("paragraph")).toBeInTheDocument();
  });
});

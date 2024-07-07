import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "../components/card";

describe("Card Component", () => {
  test("renders Card component correctly", () => {
    const titleTest = {
      text: "Test Title",
      styles: {},
    };
    const descriptionTest = {
      text: "This is a test description.",
      styles: {},
    };
    render(<Card id="1" title={titleTest} description={descriptionTest} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("This is a test description.")).toBeInTheDocument();
  });
});

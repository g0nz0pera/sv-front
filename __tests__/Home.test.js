import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

// Mock the DataService
jest.mock("@/services", () => ({
  DataService: {
    getStubData: () => [
      {
        id: "1",
        title: {
          text: "Title 1",
        },
        description: {
          text: "This is a test description.",
        },
        styles: {},
      },
      {
        id: "2",
        title: {
          text: "Title 1",
        },
        description: {
          text: "This is a test description.",
        },
        styles: {},
      },
      {
        id: "3",
        title: {
          text: "Title 1",
        },
        description: {
          text: "This is a test description.",
        },
        styles: {},
      },
    ],
    getProjectStubData: () => ({
      id: "project",
      title: {
        text: "Project Card",
      },
      description: {
        text: "Project Description",
      },
      styles: {},
    }),
  },
}));

describe("Home page", () => {
  it("should render all the cards", () => {
    render(<Home />);
    // Check if all the cards are rendered
    expect(screen.getByText("Project Card")).toBeInTheDocument();
    expect(screen.getByTestId(`card-1`)).toBeInTheDocument();
    expect(screen.getByTestId(`card-2`)).toBeInTheDocument();
    expect(screen.getByTestId(`card-3`)).toBeInTheDocument();
    expect(screen.getByTestId(`card-project`)).toBeInTheDocument();

    // Check if we render the correct number of cards
    const cards = screen.getAllByTestId(/card-/);

    expect(cards).toHaveLength(4);
  });
});

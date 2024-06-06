import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest"; // Import Vitest functions
import Poll from "./Poll";

describe("Poll Component", () => {
  const pollProps = {
    question: "How you feel today?",
    options: [
      "Brilliant! I have so much energy",
      "Always can be worse",
      "Please, end my misery.",
    ],
    pollId: "poll1",
  };

  beforeEach(() => {
    localStorage.clear();
  });

  it("renders poll question and options", () => {
    render(<Poll {...pollProps} />);

    expect(screen.getByText(pollProps.question)).toBeInTheDocument();
    pollProps.options.forEach((option) => {
      expect(screen.getByLabelText(option)).toBeInTheDocument();
    });
  });

  it("handles voting and saves to local storage", () => {
    render(<Poll {...pollProps} />);

    const firstOption = screen.getByLabelText(pollProps.options[0]);
    fireEvent.click(firstOption);

    expect(localStorage.getItem("poll1")).toBe(JSON.stringify([1, 0, 0]));
    expect(localStorage.getItem("poll1_voted")).toBe("true");
  });

  it("displays results after voting", () => {
    render(<Poll {...pollProps} />);

    const firstOption = screen.getByLabelText(pollProps.options[0]);
    fireEvent.click(firstOption);

    expect(
      screen.getByText(`${pollProps.options[0]}: 1 votes`)
    ).toBeInTheDocument();
  });

  it("prevents voting again after page refresh", () => {
    localStorage.setItem("poll1_voted", "true");
    render(<Poll {...pollProps} />);

    expect(
      screen.queryByLabelText(pollProps.options[0])
    ).not.toBeInTheDocument();
    expect(
      screen.getByText(`${pollProps.options[0]}: 0 votes`)
    ).toBeInTheDocument();
  });
});

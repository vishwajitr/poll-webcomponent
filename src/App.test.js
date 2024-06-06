// src/App.test.jsx

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from 'vitest'; // Import Vitest functions
import App from "./App";

describe("App component", () => {
  it("renders multiple polls", () => {
    render(<App />);

    const questions = ["How you feel today?", "How you like the Opinary test?"];

    questions.forEach((question) => {
      expect(screen.getByText(question)).toBeInTheDocument();
    });
  });
});

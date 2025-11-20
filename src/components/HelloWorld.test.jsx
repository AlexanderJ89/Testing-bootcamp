import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HelloWorld from "./HelloWorld";

describe("HelloWorld", () => {
  it('visar texten "Hello world"', () => {
    render(<HelloWorld />);
    const headingElement = screen.getByText(/Hello World/i);
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe("H1");
  });
});

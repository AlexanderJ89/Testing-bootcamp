import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ShakespeareInsult from "./ShakespeareInsult";
import "@testing-library/jest-dom";

describe("ShakespeareInsult", () => {
  it("ska visa 'insult me!' innan första klick", () => {
    render(<ShakespeareInsult />);
    expect(screen.getByText(/insult me!/i)).toBeInTheDocument();
  });

  it("ska visa en förolämpning efter klick", () => {
    render(<ShakespeareInsult />);
    const button = screen.getByRole("button", { name: /generate insult/i });
    fireEvent.click(button);

    const displayed = screen.getByRole("heading");
    expect(displayed.textContent).not.toBe("insult me!");
  });

  it("ska uppdatera förolämpningen vid nytt klick", () => {
    render(<ShakespeareInsult />);
    const button = screen.getByRole("button", { name: /generate insult/i });
    fireEvent.click(button);

    const firstInsult = screen.getByRole("heading").textContent;
    fireEvent.click(button);

    const secondInsult = screen.getByRole("heading").textContent;
    expect(secondInsult).not.toBe("insult me!");
  });
});

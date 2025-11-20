import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CapitalizedInput from "./CapitalizedInput";
import "@testing-library/jest-dom";

describe("CapitalizedInput", () => {
  it("ska automatiskt göra första bokstaven stor", () => {
    render(<CapitalizedInput />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "hej" } });
    expect(input.value).toBe("Hej");
  });

  it("ska visa felmeddelande om man skriver något annat än bokstäver", () => {
    render(<CapitalizedInput />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "hej123" } });
    const errorMessage = screen.getByText(/Enbart bokstäver är tillåtna!/i);

    expect(errorMessage).toBeInTheDocument();
  });

  it("ska visa tom sträng utan fel när input är tom", () => {
    render(<CapitalizedInput />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "" } });
    expect(input.value).toBe("");
    expect(screen.queryByText(/Enbart bokstäver är tillåtna!/i)).toBeNull();
  });
});

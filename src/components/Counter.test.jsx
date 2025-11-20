import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Counter from "./Counter";

describe("Counter", () => {
  it("börjar på 0", () => {
    render(<Counter />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("ökar med 1 när man klickar på Öka", () => {
    render(<Counter />);
    const increaseButton = screen.getByText("Öka");
    fireEvent.click(increaseButton);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("minskar med 1 när man klickar på Minska", () => {
    render(<Counter />);
    const decreaseButton = screen.getByText("Minska");
    fireEvent.click(decreaseButton);
    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  it("fungerar att öka och minska flera gånger", () => {
    render(<Counter />);
    const increaseButton = screen.getByText("Öka");
    const decreaseButton = screen.getByText("Minska");

    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    fireEvent.click(decreaseButton);

    expect(screen.getByText("1")).toBeInTheDocument();
  });
});

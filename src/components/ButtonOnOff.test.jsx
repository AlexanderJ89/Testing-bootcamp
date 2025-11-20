import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ButtonOnOff from "./ButtonOnOff";

describe("OnOff", () => {
  it('börjar med texten "on"', () => {
    render(<ButtonOnOff />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("on");
  });

  it('byter text till "off" när man klickar en gång', () => {
    render(<ButtonOnOff />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(button).toHaveTextContent("off");
  });

  it('byter tillbaka till "on" när man klickar igen', () => {
    render(<ButtonOnOff />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    fireEvent.click(button);
    expect(button).toHaveTextContent("on");
  });
});

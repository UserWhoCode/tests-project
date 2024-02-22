/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./counter";

it("App Router: Works with Client Components (React State)", () => {
  render(<Counter />);
  expect(screen.getByRole("heading")).toHaveTextContent("0");
  fireEvent.click(screen.getByTestId("button"));
  expect(screen.getByRole("heading")).toHaveTextContent("1");
});

it("Should remove One to counter when clicking Substract button", () => {
  render(<Counter />);
  expect(screen.getByRole("heading")).toHaveTextContent("0");
  fireEvent.click(screen.getByTestId("button-substract"));
  expect(screen.getByRole("heading")).toHaveTextContent("-1");
});

import { render, screen } from "@testing-library/react";
import App from "./App";

test("presents Sanggon's work and featured product", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /I build useful products/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Signal Audit" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Open Signal Audit/i })).toHaveAttribute("href", "https://app.signalaudit.org");
  expect(screen.getByRole("heading", { name: "AI Career Simulator" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Open AI Career Simulator/i })).toHaveAttribute("href", "https://ai-career-simulator.vercel.app/");
});

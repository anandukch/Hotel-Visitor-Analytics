import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";


describe
describe("App component", () => {
  test("renders App component", () => {
    render(<App />);
    // You can add more specific assertions based on your UI
    expect(screen.getByText("Apply Date Range Filter")).toBeTruthy();
  });

  test("applies date range filter correctly", () => {
    render(<App />);
    
    // Mock user interactions
    fireEvent.change(screen.getByLabelText("Start Date"), { target: { value: "2023-01-01" } });
    fireEvent.change(screen.getByLabelText("End Date"), { target: { value: "2023-01-10" } });

    fireEvent.click(screen.getByText("Apply Date Range Filter"));

    // Add assertions based on the expected behavior of your application
    // For example, check if the charts are updated accordingly
    expect(screen.getByText("Total Visitors Per Day")).toBeTruthy();
  });
});
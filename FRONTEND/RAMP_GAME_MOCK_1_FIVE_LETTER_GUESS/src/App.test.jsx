import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("Five Letter Guess", () => {
  it("loads the game and shows the allowed attempt count", async () => {
    render(<App />);

    expect(
      await screen.findByText(/attempts remaining:\s*6/i)
    ).toBeInTheDocument();
  });

  it("does not submit a guess shorter than the configured word length", async () => {
    const user = userEvent.setup();
    render(<App />);

    const input = await screen.findByRole("textbox", { name: /guess/i });
    await user.type(input, "CAT");
    await user.click(screen.getByRole("button", { name: /submit guess/i }));

    expect(screen.getByText(/guess must be 5 letters/i)).toBeInTheDocument();
    expect(screen.getByText(/attempts remaining:\s*6/i)).toBeInTheDocument();
  });

  /*
    YOU must add tests for at least these behaviors:

    1. A valid submitted guess is rendered as five letter cells.
    2. Submitting a valid guess decreases attempts remaining.
    3. Guessing PLANT shows the win message and disables further guessing.

    Optional stretch test:
    - Verify correct/present/absent evaluation for a guess such as "PLATE".
  */
});

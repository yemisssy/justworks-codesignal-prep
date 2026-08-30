# Ramp Frontend Mock 1 — Five Letter Guess

## Scenario

You have joined a frontend team maintaining a small daily word game.

The starter project already contains a mocked API function. Your job is to finish the React implementation and add unit tests.

This mock is intentionally designed to make you reason through an unfamiliar game instead of relying on memorized UI patterns.

---

# BEFORE YOU CODE

Use your assessment guardrail.

```text
RECON:
- Read the whole prompt.
- Find the main component, API/helper, and tests.
- Run the starter tests before changing anything.
- Inspect the mocked API response.

FOR EACH LOGIC:

TO DO:
TO GET:
TO DISPLAY / RETURN:
DEPENDING ON:
FROM:
DATA PATH:
```

For async data:

```text
request fired?
↓
response received?
↓
response.ok?
↓
parsed JSON?
↓
what is actually inside data?
↓
state received it?
↓
UI changed?
```

ONE DATA STEP AT A TIME.

---

# Requirements

## 1. Load the game

When the app mounts:

- Call `fetchGame()`.
- Verify the response succeeded.
- Parse the JSON.
- Store the game information you need.

The response is nested. Do not assume its shape — inspect `src/api.js`.

While the game has not loaded, display:

```text
Loading game...
```

Once loaded, display:

```text
Attempts remaining: 6
```

The number must come from the API configuration.

---

## 2. Guess input

Render:

- a text input labelled `Guess`
- a button labelled `Submit Guess`

Rules:

- guesses are case-insensitive
- normalize submitted guesses to uppercase
- a guess must contain exactly the configured number of letters
- if invalid, display:

```text
Guess must be 5 letters
```

- an invalid guess must NOT consume an attempt

Do not hard-code `5` when implementing the rule. Read the configured word length.

---

## 3. Render submitted guesses

For every valid submitted guess:

- create one row
- render one cell per letter
- each cell displays its letter

Example:

```text
C R A N E
```

Each rendered cell must have the CSS class:

```text
cell
```

---

## 4. Evaluate letters

Compare each submitted letter with the target word.

Each cell must receive one additional class:

```text
correct
present
absent
```

Definitions:

```text
correct
→ letter is in the target AND in the correct position

present
→ letter is in the target but in a different position

absent
→ letter is not in the target
```

### Duplicate-letter rule

Handle duplicate letters correctly.

A target letter may only satisfy as many guessed occurrences as actually exist in the target.

Example:

```text
target: PLANT
guess:  ALLAY
```

There is only one `L` in `PLANT`, so both guessed Ls cannot receive credit for the same target L.

Do not solve duplicate handling by simply using:

```js
target.includes(letter)
```

for every unmatched character.

---

## 5. Attempts

Every valid submitted guess decreases attempts remaining by 1.

Invalid guesses do not.

---

## 6. Win / loss

If the normalized guess exactly equals the target:

Display:

```text
You won!
```

and disable both the input and submit button.

If attempts reach `0` without a correct guess:

Display:

```text
Game over
```

and disable both controls.

---

# Unit testing requirement

Two starter tests are provided.

Before you consider the task complete, write at least three additional tests:

1. valid guess renders five cells
2. valid guess decreases attempts
3. correct guess displays `You won!` and disables further input

You may also write a duplicate-letter evaluation test.

---

# Assessment rules for this mock

Do **not**:

- rebuild the project structure
- install a state library
- create unnecessary utility files
- spend time polishing CSS
- look for a complete Wordle solution online

You may look up isolated syntax if needed.

---

# Your completion order

Do not build the whole game at once.

```text
1. Fetch + parse game
2. Verify attempts display
3. Build controlled input
4. Validate length
5. Submit one valid guess
6. Render its letters
7. Decrease attempts
8. Evaluate cells
9. Add win/loss
10. Write/finish tests
```

After each meaningful step:

```text
RUN APP
RUN TESTS
VERIFY
THEN CONTINUE
```

## Goal

This first attempt is **not primarily about speed**.

The goal is to complete unfamiliar logic without stacking unverified assumptions.

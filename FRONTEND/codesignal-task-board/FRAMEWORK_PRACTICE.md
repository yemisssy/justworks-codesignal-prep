# CodeSignal Front-End Framework Practice

## Scenario

Implement a simple **task tracking application**.

---

# Level 1 — Common Layout and Basic Rendering

**Target time: 15 minutes**

### Skills tested

- HTML layout and structure
- DOM
- CSS styling
- Basic rendering from static data

### Requirement

Using the provided task data, render each task in its corresponding column based on its status:

- `TO_DO`
- `IN_PROGRESS`
- `DONE`

### Starting UI Structure

```jsx
<div className="board">
  <h2 className="board__title">Tasks</h2>

  <div className="board__columns">
    <div className="column">
      <h2 className="column__title">TO_DO</h2>

      <div className="column__cards">
        <div className="card">
          <h3 className="card__title">Task 1</h3>
          <p className="card__description">Detailed task 1 description</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Mock Data

```js
const data = {
  todoItems: [
    {
      title: "Task 3",
      description: "Detailed task 3 description",
      status: "TO_DO",
      userId: "userId2",
    },
  ],

  inProgressItems: [
    {
      title: "Task 1",
      description: "Detailed task 1 description",
      status: "IN_PROGRESS",
      userId: "userId1",
    },
  ],

  doneItems: [
    {
      title: "Task 2",
      description: "Detailed task 2 description",
      status: "DONE",
      userId: "userId2",
    },
  ],
};
```

### Goal

Render the tasks into the correct columns.

---

# Level 2 — Dynamic Interaction

**Target time: 25 minutes**

### Skills tested

- Everything from Level 1
- JavaScript user interactions
- Data input
- Data validation
- Updating the displayed data

### Requirement

Add a form that allows users to create a new task.

A newly created task should automatically be added with:

```js
status: "TO_DO";
```

### Provided Form Structure

```jsx
<form>
  <div className="input-container">
    <input name="taskTitle" placeholder="Task title*" value="" />
  </div>

  <div className="input-container">
    <textarea name="taskDescription" placeholder="Task description*" />
  </div>

  <div>
    <input type="submit" value="Create task" />
  </div>
</form>
```

### Goal

A user should be able to:

1. Enter a task title.
2. Enter a task description.
3. Submit the form.
4. See the new task appear in the `TO_DO` column.

---

# Level 3 — Consuming an API

**Target time: 30 minutes**

### Skills tested

- Everything from Levels 1–2
- Asynchronous JavaScript
- REST APIs
- API responses
- Calling multiple API endpoints

### Requirement 1 — Get Tasks

The backend now provides the tasks through an API.

Example response:

```js
{
  data: [
    {
      title: "Task 1",
      description: "Detailed task 1 description",
      status: "IN_PROGRESS",
      assignedUser: "userId1",
    },
    {
      title: "Task 2",
      description: "Detailed task 2 description",
      status: "DONE",
    },
    {
      title: "Task 3",
      description: "Detailed task 3 description",
      status: "TO_DO",
      assignedUser: "userId2",
    },
  ];
}
```

### Requirement 2 — Get Assigned User

When a task contains an `assignedUser`, retrieve that user's information from a separate endpoint.

Example user response:

```js
{
  id: "userId1",
  firstName: "Andrew",
  lastName: "Quill"
}
```

### Goal

1. Fetch the tasks asynchronously.
2. Render them in their appropriate columns.
3. For tasks with an assigned user, retrieve that user's information.
4. Display the assigned user's information on the task card.

---

# Level 4 — Extending Design Functionality

**Target time: 20 minutes**

### Skills tested

- Everything from previous levels
- Extending an existing implementation
- Modifying your design without rebuilding the application

### Requirement

Allow users to move tasks between columns using:

- **Move Left**
- **Move Right**

Column order:

```text
TO_DO → IN_PROGRESS → DONE
```

### Move Right

Pressing **Move Right** should move a task to the column immediately to its right.

Example:

```text
TO_DO → IN_PROGRESS
IN_PROGRESS → DONE
```

Tasks already in `DONE` must **not** display a Move Right button.

### Move Left

Pressing **Move Left** should move a task to the column immediately to its left.

Example:

```text
DONE → IN_PROGRESS
IN_PROGRESS → TO_DO
```

Tasks already in `TO_DO` must **not** display a Move Left button.

### Provided Button Structure

```jsx
<div className="card__buttons">
  <button
    aria-label="button left"
    className="card__button card__button--left"
    type="button"
  />

  <button
    aria-label="button right"
    className="card__button card__button--right"
    type="button"
  />
</div>
```

### API Endpoints

#### Get all tasks

GET https://contentapi.codesignal.com/tasks

Example response:

````json
{
  "data": [
    {
      "title": "Task 1",
      "description": "Detailed task 1 description",
      "status": "IN_PROGRESS",
      "assignedUser": "userId1"
    },
    {
      "title": "Task 2",
      "description": "Detailed task 2 description",
      "status": "DONE"
    },
    {
      "title": "Task 3",
      "description": "Detailed task 3 description",
      "status": "TO_DO",
      "assignedUser": "userId2"
    }
  ]
}

GET https://contentapi.codesignal.com/users/{userId}

# Practice Timing

```text
Level 1: 15 minutes
Level 2: 25 minutes
Level 3: 30 minutes
Level 4: 20 minutes

Total: 90 minutes
````

## Practice Rule

Build on the same application:

```text
Level 1
↓
Level 2
↓
Level 3
↓
Level 4
```

Do not restart the application between levels.

import { statuses } from "./constant";
//Wasn't sure how to save this. So I renamed the file to .js

//Right now, I jsut need to get the tasks, and start my state management with teh tasks
// because the tasks are what drives actions , my mental model is that the stages/ status/columns
//are just buckets that doen't change and are use to retrieve or store tasks sorted into them
//The tasks are what needs to be passed from parent to child in the case of app.jsx and cardrendering component

//So, my justification for reducing the data to just return an array of tasks is because task is all i need since each task already have the
//category they belong to

//--->Reduce Data to and array of tasks -->
//---convert it to an array of 3 column objects with values tasks; [{to_do:[]}, {in_progress:[]}]

export const data = {
  todoItems: [
    {
      title: "Task 3",
      description: "Detailed task 3 description",
      status: "TO_DO",
      userId: "userId2",
    },
    {
      title: "Task 6",
      description: "Detailed task 6 description",
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

//Future API CALL
export const fetchTask = async () => {
  try {
    const response = await fetch("https://contentapi.codesignal.com/tasks");
    const data = await response.json();
    return data.map((task) => ({ ...task, id: crypto.randomUUID() }));
  } catch (e) {
    console.error(e);
  }
};

export const fetchUser = async (userId) => {
  try {
    const response = await fetch(
      `https://contentapi.codesignal.com/users/${userId}`,
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const tasks = Object.values(data)
  .flat()
  .map((task) => ({ ...task, id: crypto.randomUUID() }));

export const shapeNewTask = (newTask) => {
  const newTaskReshaped = {
    id: crypto.randomUUID(),
    title: newTask.taskTitle,
    description: newTask["taskDescription"],
    status: statuses[0],
  };
  return newTaskReshaped;
};

// Tasks will be used for data now & updated for Api Call result later

//I want task to be updated herer, so create a function that receieces task post submission or move

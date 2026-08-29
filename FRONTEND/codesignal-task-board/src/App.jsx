import { useEffect, useState } from "react";
import "./App.css";

import { statuses } from "./constant.js";
import { tasks, fetchTask, fetchUser } from "./taskApi.js";

import RenderColumn from "./rendercolumn.jsx";
import NewTaskForm from "./newtaskForm.jsx";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [appTasks, setAppTask] = useState(tasks);
  const [users, setUsers] = useState([{}]);

  const updateTaskstApiData = async () => {
    const data = await fetchTask();
    data?.data?.length > 0 ? setAppTask(data.data) : null;
  };

  // const retrievUser = async (userId) => {
  //   const data = await fetchUser(userId);
  //   //It's assumed there will always be a user, so I don't need to solve for fall back
  //   setUsers((prev) => [...prev, data]);
  // };

  //OR I ust just get all users and pass it to renderColum
  const getAllUsersAssignedToTask = () => {
    let users = [];
    appTasks.forEach(async (task) => {
      if (Object.hasOwn(task, "assignedUser")) {
        const data = await fetchUser(task.assignedUser);
        users.push(data);
      }
    });
    setUsers(users);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleFormSubmit = (newTask) => {
    //update app state here for tasks
    setAppTask((prev) => [...prev, newTask]);
  };

  useEffect(() => {
    updateTaskstApiData();
    getAllUsersAssignedToTask();
  }, []);

  return (
    <div className="board">
      <div className="board_header">
        <h2 className="board__title">Tasks</h2>
        <button
          aria-label="Create New Task"
          className="new_task_button"
          type="button"
          onClick={() => handleModalOpen()}
        >
          Add Task
        </button>
      </div>
      <hr />
      <div className="board__columns">
        {statuses.map((status, index) => (
          <RenderColumn
            status={status}
            key={`${status}${index}`}
            apptasks={appTasks}
            // getUser={retrievUser}
            users={users}
          />
        ))}
      </div>
      {modalOpen && (
        <div className="modal_overlay">
          <div className="modal_content">
            <h2>Enter your task detail below</h2>
            <NewTaskForm
              closeModal={handleModalClose}
              handleFormSubmission={handleFormSubmit}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

import { statuses } from "./constant.js";
import { tasks } from "./taskApi.js";

import RenderColumn from "./rendercolumn.jsx";
import NewTaskForm from "./newtaskForm.jsx";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [appTasks, setAppTask] = useState(tasks);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleFormSubmit = (newTask) => {
    //update app state here for tasks
    setAppTask((prev) => [...appTasks, newTask]);
  };

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
            tasks={appTasks}
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

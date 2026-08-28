import { useState } from "react";

import { addNewTask } from "./taskApi";

function NewTaskForm(formProp) {
  const { modalOpen, closeModal } = formProp;
  console.log(modalOpen);

  //   const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    taskTitle: "",
    taskDescription: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //possibly use useEffect here to handle form state
  //onSubmit, update status to "TO_DO" and pass the task into "addNewTask"

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSubmitted(true);
    addNewTask(formData);
  };

  return (
    <form className="new_task_form" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          name="taskTitle"
          placeholder="Task title*"
          value={formData.taskTitle}
          onChange={handleChange}
        />
      </div>

      <div className="input-container">
        <textarea
          name="taskDescription"
          placeholder="Task description*"
          value={formData.taskDescription}
          onChange={handleChange}
        />
      </div>

      <div>
        <input name="submitButton" type="submit" value="Create task" />
        <button className="close_form_button" onClick={() => closeModal()}>
          Close Form
        </button>
      </div>
    </form>
  );
}

export default NewTaskForm;

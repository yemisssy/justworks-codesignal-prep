import { useEffect, useState } from "react";
import { tasks } from "../../../../codesignal-task-board/src/taskApi";

const employees = [
  { id: 1, name: "Maya", department: "Engineering" },
  { id: 2, name: "Noah", department: "Design" },
  { id: 3, name: "Lena", department: "Engineering" },
];

const fetchEmployee = async (id) => {
  // Pretend this calls an API
  return employees.find((employee) => employee.id === Number(id));
};

function EmployeeDrill() {
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    employeeId: "",
    taskName: "",
    priority: "normal",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const employeeId = formData.employeeId.trim();
    const taskName = formData.taskName.trim();
    const priority = formData.priority.trim();

    if (!employeeId || !taskName || !priority) return;
    // const employee = await fetchEmployee(employeeId);

    const newTask = {
      employee: employee ?? employeeId,
      taskName: taskName,
      priority: priority,
    };
    setTasks((prev) => [...prev, newTask]);

    setFormData({
      employeeId: "",
      taskName: "",
      priority: "normal",
    });
  };

  const loadEmployee = async () => {
    try {
      const response = await fetch("/api/employees");
      const data = await response.json();
      return data.data; // Possibly do any mapping or modification or reshaping here
    } catch (e) {
      if (!response.ok) {
        throw new Error(`Response failed: ${response.status}`);
      }
      console.error(e);
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/tasks");
      if (!response.ok) {
        throw new Error(`Response failed: ${response.status}`);
      }
      const result = await response.json().data;
      const data = result.data;
      setTasks(data); //--> This assumes tasks was empty before, I don't think I need pevstate for saftey here
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    // loadEmployee();
    fetchTasks();
  }, []);

  return (
    <div>
      <div className="tasks_div">
        {tasks.map((task, index) => (
          <div className="task_card">
            <p>{task.employee}</p>
            <p>{task.taskName}</p>
            <p>{task.priority}</p>
          </div>
        ))}
      </div>
      <div className="single_employee_task">
        {employees
          .filter((employee) => employee.department === "Engineering")
          .map((tasks, index) => (
            <div className="engineering_employees">
              <p>{tasks.employee}</p>
              <p>{tasks.taskName}</p>
              <p>{tasks.priority}</p>
            </div>
          ))}
      </div>
      <div className="payroll">
        {tasks.find((task) => task.taskName === "Payroll")}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            name="employeeId"
            placeholder="Employee ID*"
            value={formData.employeeId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-container">
          <textarea
            name="taskName"
            placeholder="Task Name*"
            value={formData.taskName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <textarea
            name="priority"
            placeholder="Priority*"
            value={formData.priority}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <input name="submitButton" type="submit" value="Create task" />
        </div>
      </form>
    </div>
  );
}

export default EmployeeDrill;

import { useEffect, useState } from "react";

import { employeeData } from "./data";
import AddEmployee from "./addnewemployee";

import "./App.css";

const statuses = ["NEW_HIRE", "DOCUMENTS_PENDING", "READY_FOR_PAYROLL"];

function App() {
  const [employees, setEmployees] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  useEffect(() => {
    const allEmployees = Object.values(employeeData).flat();
    setEmployees(allEmployees);
  }, []);

  const addNewEmployee = (formData) => {
    const reshapedEmployee = {
      id: crypto.randomUUID(),
      name: formData.employeeName,
      role: formData.employeeRole,
      startDate: formData.startDate,
      status: statuses[0],
    };

    setEmployees((prev) => [...prev, reshapedEmployee]);
  };

  return (
    <div className="dashboard">
      <div className="dashboard_header">
        <h2 className="dashboard__title">Employee Onboarding</h2>
        <button className="add_new_employee_button" onClick={handleOpenModal}>
          Add Employee
        </button>
      </div>
      <hr />
      <div className="dashboard__columns">
        {statuses.map((status, index) => (
          <div className="column" key={index}>
            <h2 className="column__title">{status}</h2>

            <div className="column__cards">
              {employees
                .filter((employee) => employee.status === status)
                .map((employee) => (
                  <div className="employee-card" key={employee.id}>
                    <h3 className="employee-card__name">{employee["name"]}</h3>
                    <p className="employee-card__role">{employee["role"]}</p>
                    <p className="employee-card__start-date">
                      {employee["startDate"]}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      {openModal && (
        <div className="modal_background">
          <div className="modal_content">
            <h2> Enter Employees detail </h2>
            <AddEmployee
              closeModal={handleCloseModal}
              addEmployee={addNewEmployee}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

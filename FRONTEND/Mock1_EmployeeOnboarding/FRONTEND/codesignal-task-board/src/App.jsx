import { useEffect, useState } from "react";

import { employeeData } from "./data";

import "./App.css";

const statuses = ["NEW_HIRE", "DOCUMENTS_PENDING", "READY_FOR_PAYROLL"];

function App() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    const allEmployees = Object.values(employeeData).flat();
    setEmployee(allEmployees);
  }, []);

  return (
    <div className="dashboard">
      <h2 className="dashboard__title">Employee Onboarding</h2>

      <div className="dashboard__columns">
        <div className="column">
          {statuses.map((status, index) => (
            <h2 className="column__title" key={index}>
              {status}
            </h2>
          ))}
          <div className="column__cards">
            {employee.map((currentEmployee, index) => (
              <div className="employee-card">
                <h3 className="employee-card__name">{currentEmployee.name}</h3>
                <p className="employee-card__role">{currentEmployee.role}</p>
                <p className="employee-card__start-date">
                  {currentEmployee.startDate}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

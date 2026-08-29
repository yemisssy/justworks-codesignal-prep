import { useEffect, useState } from "react";

import { employeeData } from "./data";

import "./App.css";

const statuses = ["NEW_HIRE", "DOCUMENTS_PENDING", "READY_FOR_PAYROLL"];

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const allEmployees = Object.values(employeeData).flat();
    setEmployees(allEmployees);
  }, []);

  return (
    <div className="dashboard">
      <h2 className="dashboard__title">Employee Onboarding</h2>

      <div className="dashboard__columns">
        {statuses.map((status, index) => (
          <div className="column">
            <h2 className="column__title" key={index}>
              {status}
            </h2>

            <div className="column__cards">
              {employees
                .filter((employee) => employee.status === status)
                .map((employee) => (
                  <div className="employee-card">
                    <h3 className="employee-card__name">{employee["name"]}</h3>
                    <p className="employee-card__role">P{employee["role"]}</p>
                    <p className="employee-card__start-date">
                      {employee["startDate"]}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

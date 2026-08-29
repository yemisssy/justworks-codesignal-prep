import { useState } from "react";

function AddEmployee() {
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeRole: "",
    startDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      employeeName: "",
      employeeRole: "",
      startData: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(formData);
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          name="employeeName"
          placeholder="Employee name*"
          value={formData.employeeName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-container">
        <input
          name="employeeRole"
          placeholder="Role*"
          value={formData.employeeRole}
          onChange={handleChange}
          required
        />
      </div>

      <div className="input-container">
        <input
          name="startDate"
          type="date"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <input type="submit" value="Add employee" />
      </div>
    </form>
  );
}
export default AddEmployee;

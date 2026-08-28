import { useState } from "react";

import "./App.css";
import { data } from "./mockData.js";

function App() {
  // I'mm geting stuck on the syntax to map, but I know I want to map data into different columns
  // I looked up the syntax
  // Creating teh table was confusing

  //TO:DO => Create enums and use the enums to check what column header should be dynamically
  //Or constant object since I am using JS not TS
  const ColumnStatus = {
    todoItems: "TO DO",
    inProgressItems: "In Progress",
    doneItems: "Done",
  };

  console.log("key", Object.keys(data));
  console.log("entries", Object.entries(data));
  return (
    <div className="board">
      <h2 className="board__title">Tasks</h2>
      <div className="board__columns">
        {Object.entries(data).map((item, index) => (
          <div className="column" key={item[0]}>
            <h2 className="column__title">
              {item[0] in ColumnStatus ? ColumnStatus[item[0]] : item[0]}
            </h2>
            <div className="column__cards">
              {item[1].map((task, index) => (
                <div className="card" key={index}>
                  <h3 className="card__title">{task.title}</h3>
                  <p className="card__description">{task.description}</p>
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

import { useState } from "react";

import "./App.css";
import { data } from "./mockData.js";

function App() {
  const [count, setCount] = useState(0);
  // I'mm geting stuck on the syntax to map, but I know I want to map data into different columns
  // I looked up the syntax
  // Creating teh table was confusing
  console.log(Object.keys(data));
  return (
    <div className="board">
      <h2 className="board_title">Tasks</h2>
      <table>
        <thead>
          {Object.keys(data).map((key) => (
            <tr key={key}>
              <th>{key}</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {Object.entries(data).map((key, value) => (
            <tr key={key}>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

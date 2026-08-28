import { useEffect, useState } from "react";

import "./App.css";

import { statuses } from "./constant.js";
import { tasks } from "./taskApi.js";

import RenderColumn from "./CardRendering.jsx";

//Since The count of the columns can change even if the columns stages are permanent
//I need to keep a state of the stages/status , so I can manage changes for each time a stage changes
//The kind of state that only reflects what the data has, whether mock data or api response data
//The stage/column state shape is not dependent on one structure of data, it's
//really used as a bucket to hold the tasks that belong in each stage

//---TASKS HANDLING--->
//Do I need to keep a state of tasks since since I am either getting it directly from a
//const mock data or saving the response of an api ; Yes, I should use one state for statuses
//even if that might mean I am mutating the tasks state, if I am using the same state variable
//What actions trigger my API call? so, basically, how does my task data update?

//---MULTIPLE COMPOPENET -->
// I should probably put my form component and the card component in different places
//So I have handle state management cleanly

//---CARD COMPONENT -->
// The card component handles displaying cards and re-ordering
// Now, does my reordering trigger & api call? No, not according to requirement, it just does
// client side upadte/ data manipulation

//---FORM COMPONENT -->
//Does my form component trigger an api call/server action? no, on submit should
//probably just update form submission state(or advanced level, notification subscription)
// and then update the To status. I don't collect or generate User id for these submissions

function App() {
  //since my statuses are in fixed order & rendering my column on that
  //then I want an array that will be used to map tasks into cards based on the current status

  // useEffect(() => {
  //   statuses.forEach((status) => {
  //     tasks.filter((task) => task.status === status);
  //   });
  // });

  //CLAUDE QUESTIONS: COULD I HAVE USED USEEFFECT?

  return (
    <div className="board">
      <h2 className="board__title">Tasks</h2>
      <div className="board__columns">
        {statuses.map((status, index) => (
          <RenderColumn status={status} key={`${status}${index}`} />
        ))}
      </div>
    </div>
  );
}

export default App;

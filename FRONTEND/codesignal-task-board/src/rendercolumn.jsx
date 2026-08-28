import { tasks } from "./taskApi.js";

import "./App.css";

//This components recieves tasks
//This component displays the task based on their status, i.e it pulls from their status
//data structure to render, so it can either own or recieve the structure from parent component?
//SHOULD I SEPARATE THE STATUSES INTO 3 STATES? DOES THAT MAKE MANIPULATION EASIER & CODE CLEANER? I'LL TRY
//This component will render/display the button for left & right
//On click of the left & right button , this component determines and holds the logic to
//remove the task from one status bucket, temporarily save it - using a queue/stack/ array
// and then add it to next column or previous based on the direction received , so that function would receive
//two values, the task and teh direction
//This component should probably hold a status state for button click direction?

//How do I represent the the column order as a fixed order, I can use a config driven approach?
// but I don't know how to do that yet

//---MY GOAL-->
//Solve this with what I know, & improve/clean up later
//Complete each level & and the work on css after

//I am stuck because I need to create 3 coloumns and immeditaly display each columns tasks, I am
//trying to do this without memorizing the future api data structure. I can make te columns an array
//of objects , but how do I setStatus when I am splicing

function RenderColumn(colProps) {
  const { status } = colProps;

  return (
    <div className="column">
      <h2 className="column__title">{status}</h2>
      <div className="column__cards">
        {tasks
          .filter((task) => task.status === status)
          .map((card, index) => (
            <div className="card" key={index}>
              <h3 className="card__title">{card.title}</h3>
              <p className="card__description">{card.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RenderColumn;

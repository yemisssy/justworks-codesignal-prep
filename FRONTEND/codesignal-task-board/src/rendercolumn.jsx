import "./App.css";

function RenderColumn(colProps) {
  const { status, apptasks, users } = colProps;

  return (
    <div className="column">
      <h2 className="column__title">{status}</h2>
      <hr />
      <div className="column__cards">
        {apptasks
          .filter((task) => task.status === status)
          .map((currentTask, index) => (
            <div className="card" key={currentTask.id}>
              <h3 className="card__title">{currentTask.title}</h3>
              <p className="card__description">{currentTask.description}</p>
              {Object.hasOwn(currentTask, "assignedUser") &&
                users.filter(
                  (user) =>
                    user.id ===
                    currentTask["assignedUser"](
                      <div>
                        <p className="card__user_firstName">{user.id}</p>
                        <p className="card__user_firstName">{user.firstName}</p>
                        <p className="card__user_firstName">{user.lastName}</p>
                      </div>,
                    ),
                )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default RenderColumn;

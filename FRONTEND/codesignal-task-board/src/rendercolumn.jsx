import "./App.css";

function RenderColumn(colProps) {
  const { status, tasks } = colProps;

  return (
    <div className="column">
      <h2 className="column__title">{status}</h2>
      <div className="column__cards">
        {tasks
          .filter((task) => task.status === status)
          .map((card, index) => (
            <div className="card" key={`${index}-${status}${card.title}`}>
              <h3 className="card__title">{card.title}</h3>
              <p className="card__description">{card.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RenderColumn;

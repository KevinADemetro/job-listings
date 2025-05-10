import Filters from "./Filters";

const filters = [
  "Frontend",
  "Frontend",
  "Frontend",
  "Frontend",
  "Frontend",
  "Frontend",
  "Frontend",
];

function App() {
  return (
    <div className="App">
      <div className="filters">
        <Filters filters={filters} />
      </div>
    </div>
  );
}

export default App;

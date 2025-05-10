import Filters from "./Filters";

const filters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

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

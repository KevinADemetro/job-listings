import Filter from "./Filter";

const filtersContainerStyle = {
  width: "100%",
  borderRadius: "1vw",
  border: "none",
  boxShadow: "0 6px 10px -2px hsl(180, 29.60%, 64.90%)",
  backgroundColor: " hsl(180, 31%, 95%)",
  display: "flex",
  justifyContent: "space-between",
  padding: "1vh 2vw",
};

const filtersStyle = {
  display: "flex",
  gap: "1vh",
  flexWrap: "wrap",
};

const clearButtonStyle = {
  border: "none",
  color: "hsl(180, 29.60%, 64.90%)",
  cursor: "pointer",
  fontWeight: "bold",
};

export default function Filters({ filters = [] }) {
  return (
    <div style={filtersContainerStyle}>
      <div style={filtersStyle}>
        {filters.map((filter) => (
          <Filter filter={filter} />
        ))}
      </div>
      <button style={clearButtonStyle}>Clear</button>
    </div>
  );
}

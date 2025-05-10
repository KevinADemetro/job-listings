import Filter from "./Filter";

const filtersContainerStyle = {
  width: "100%",
  borderRadius: "1vw",
  border: "none",
  boxShadow: "0 6px 10px -2px hsl(180, 29.60%, 64.90%)",
  backgroundColor: " hsl(180, 31%, 95%)",
  display: "flex",
  justifyContent: "space-between",
  padding: "3vh 2vw",
};

const filtersStyle = {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  gap: "2%",
};

const clearButtonStyle = {
  border: "none",
  color: "hsl(180, 29.60%, 64.90%)",
  cursor: "pointer",
  fontWeight: "bold",
  backgroundColor: "transparent",
};

export default function Filters({
  filters = [],
  onClearFilters,
  onRemoveFilter,
}) {
  return (
    <div style={filtersContainerStyle}>
      <div style={filtersStyle}>
        {filters.map((filter) => (
          <Filter
            filter={filter}
            key={crypto.randomUUID()}
            onRemoveFilter={onRemoveFilter}
          />
        ))}
      </div>
      <button style={clearButtonStyle} onClick={onClearFilters}>
        Clear
      </button>
    </div>
  );
}

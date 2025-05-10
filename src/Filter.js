const removeFilterStyle = {
  color: "var(--neutral-100)",
  fontWeight: "bold",
  border: "none",
  backgroundColor: "var(--primary)",
  height: "100%",
  aspectRatio: "1",
  borderRadius: "1vh",
  cursor: "pointer",
};
const filterContainer = {
  color: "hsl(180, 29.60%, 64.90%)",
  fontWeight: "bold",
  backgroundColor: "var(--neutral-200)",
  boxShadow: "0 6px 10px -2px hsl(180, 29.60%, 64.90%)",
  display: "flex",
  borderRadius: "1vh",
};

const filterStyle = {
  padding: "1vh 2vh",
};

export default function Filter({ filter, onRemoveFilter }) {
  return (
    <span style={filterContainer}>
      <span style={filterStyle}>{filter}</span>
      <button style={removeFilterStyle} onClick={() => onRemoveFilter(filter)}>
        X
      </button>
    </span>
  );
}

import Job from "./Job";

const listStyle = {
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
};

export default function JobsList({ jobs = [], onSelectTag }) {
  return (
    <ul style={listStyle}>
      {jobs.map((job) => (
        <Job job={job} key={job.id} onSelectTag={onSelectTag} />
      ))}
    </ul>
  );
}

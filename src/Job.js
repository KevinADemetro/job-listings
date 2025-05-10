const jobStyle = {
  boxShadow: "0 6px 10px -2px hsl(180, 29.60%, 64.90%)",
  padding: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "var(--primary)",
  fontWeight: "bold",
};

const infosSectionStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
};
const badgeStyle = {
  padding: "0.1rem 0.5rem",
  color: "var(--neutral-100)",
  borderRadius: "2rem",
  fontSize: "13px",
};

const tagListStyle = {
  listStyle: "none",
  display: "flex",
  gap: ".2rem",
};

const tagStyle = {
  backgroundColor: "var(--neutral-200)",
  padding: "0.5rem",
  borderRadius: "0.5rem",
};

export default function Job({ job }) {
  const tags = [job.role, job.level, ...job.languages];
  return (
    <li style={jobStyle}>
      <section style={infosSectionStyle}>
        <img
          src={job.logo}
          alt={job.company}
          style={{ aspectRatio: 1, height: "100%" }}
        />
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h5 style={{ margin: "0 0.5rem 0 0" }}>{job.company}</h5>
            {job.new && (
              <span
                style={{
                  backgroundColor: "var(--primary)",
                  marginRight: "0.2rem",
                  ...badgeStyle,
                }}
              >
                NEW !
              </span>
            )}
            {job.featured && (
              <span
                style={{ backgroundColor: "var(--neutral-400)", ...badgeStyle }}
              >
                FEATURED
              </span>
            )}
          </div>
          <h4>{job.position}</h4>
          <p style={{ color: "var(--neutral-300)" }}>
            {job.postedAt} &bull; {job.contract} &bull; {job.location}
          </p>
        </div>
      </section>
      <ul style={tagListStyle}>
        {tags.map((tag) => (
          <li style={tagStyle}>{tag}</li>
        ))}
      </ul>
    </li>
  );
}

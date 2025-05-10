import { useEffect, useState } from "react";
import Filters from "./Filters";
import JobsList from "./JobsList";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(function () {
    async function fetchJobs() {
      const res = await fetch("http://localhost:3001/jobs");
      const data = await res.json();
      setJobs(data);
    }
    fetchJobs();
  }, []);

  useEffect(
    function () {
      if (filters.length === 0) {
        setFilteredJobs(jobs);
        return;
      }
      const result = jobs.filter((job) => {
        const tags = [job.role, job.level, ...job.languages];
        return filters.every((filter) => tags.includes(filter));
      });

      setFilteredJobs(result);
    },
    [filters, jobs]
  );

  function handleSelectFilter(tag) {
    if (!filters.includes(tag)) setFilters((filters) => [tag, ...filters]);
  }

  function handleClearFilters() {
    setFilters([]);
  }

  function handleRemoveFilter(removedFilter) {
    setFilters((filters) =>
      filters.filter((filter) => filter !== removedFilter)
    );
  }

  return (
    <div className="App">
      <div className="filters">
        <Filters
          filters={filters}
          onClearFilters={handleClearFilters}
          onRemoveFilter={handleRemoveFilter}
        />
      </div>
      <JobsList jobs={filteredJobs} onSelectTag={handleSelectFilter} />
    </div>
  );
}

export default App;

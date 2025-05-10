import { useEffect, useState } from "react";
import Filters from "./Filters";
import JobsList from "./JobsList";

const filters = [
  "Frontend",
  "Frontend",
  "Frontend",
  "Frontend",
  "Frontend",
  "Frontend",
  "Frontend",
];

const jobs = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(function () {
    async function fetchJobs() {
      const res = await fetch("http://localhost:3001/jobs");
      const data = await res.json();
      setJobs(data);
    }
    fetchJobs();
  }, []);

  return (
    <div className="App">
      <div className="filters">
        <Filters filters={filters} />
      </div>
      <JobsList jobs={jobs} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Cards() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch data from the API
  async function fetchData() {
    try {
      setLoading(true); // Start loading
      // Add timestamp to the URL to ensure fresh data is fetched every time
      const res = await fetch(`/api/jobs?timestamp=${new Date().getTime()}`);
      const data = await res.json();
      setJobs(data); // Set the fetched data to jobs
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  }

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []); // Empty array ensures this runs only once when the component mounts

  return (
    <>
      <div className="flex justify-center mb-4">
        <button
          onClick={fetchData} // Call fetchData on click
          className="px-6 py-2 text-white font-semibold rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 disabled:opacity-50"
          disabled={loading} // Disable button when loading
        >
          {loading ? "Refreshing..." : "Refresh"} {/* Change text when loading */}
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          {/* Tailwind spinner */}
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 place-items-center items-center justify-center md:grid-cols-2 gap-4">
          {jobs.length > 0 ? (
            jobs.map((job, i) => (
              <Card
                key={i}
                title={job.title}
                orgUrl={job.organization_url}
                location={job.locations_raw}
                url={job.url}
                org={job.organization}
              />
            ))
          ) : (
            <p>No jobs found</p>
          )}
        </div>
      )}
    </>
  );
}




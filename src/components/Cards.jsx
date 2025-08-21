import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card"
const api_token =  (await import.meta.env.PUBLIC_API_TOKEN);

export default function Cards(){
    const [jobs,setJobs] = useState([{}]);

<<<<<<< HEAD
useEffect(() => {
  async function fetchData() {
    try {
      const res = await fetch("/api/jobs");
      const data = await res.json();
      console.log(data);
      setJobs(data);
    } catch (err) {
      console.error("Failed to fetch jobs", err);
=======
useEffect(()=>{
    async function fetchData(){
    await fetch("https://api.apify.com/v2/actor-tasks/gXYtSOztqDkDEkbPV/runs/last/dataset/items?token="+api_token+"&format=json&status=SUCCEEDED")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setJobs(data);
  })
>>>>>>> 098783f (added env file)
    }
  }
  fetchData();
}, []);


    return <>
        <div class="grid grid-cols-1 place-items-center items-center justify-center md:grid-cols-2 gap-4">
        {
            jobs.map((job) =>(
                <Card title={job.title} orgUrl={job.organization_url} location={job.locations_raw} url={job.url} org={job.organization} />
            ))
        }
        </div>
    </>
}
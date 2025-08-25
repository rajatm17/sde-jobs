// src/pages/api/jobs.js
export async function GET() {
  apiToken = import.meta.env.API_TOKEN; // no PUBLIC_ prefix
  const apiUrl = `https://api.apify.com/v2/actor-tasks/s3dtSTZSZWFtAVLn5/runs/last/dataset/items?token=${apiToken}&format=json&status=SUCCEEDED`;
  const jobfeed = `gXYtSOztqDkDEkbPV`
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}

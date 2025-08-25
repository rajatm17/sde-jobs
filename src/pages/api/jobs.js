// src/pages/api/jobs.js
export async function GET() {
  // const apiToken = import.meta.env.API_TOKEN;
  const apiToken2 = import.meta.env.API_TOKEN2; // no PUBLIC_ prefix
  const apiUrl = `https://api.apify.com/v2/actor-tasks/Vh6MZ3EauonePlBg3/runs/last/dataset/items?token=${apiToken2}&format=json&status=SUCCEEDED`;
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

// src/pages/api/jobs.js
export async function GET() {
  const apiToken = import.meta.env.API_TOKEN; // no PUBLIC_ prefix
  const apiUrl = `https://api.apify.com/v2/actor-tasks/gXYtSOztqDkDEkbPV/runs/last/dataset/items?token=${apiToken}&format=json&status=SUCCEEDED`;

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

// src/pages/api/jobs.js
export async function GET() {
  const apiToken = import.meta.env.API_TOKEN2;
  const taskId = "Vh6MZ3EauonePlBg3";

  try {
    const res = await fetch(
      `https://api.apify.com/v2/actor-tasks/wrinkled_lizard~career-site-job-listing-api-task/runs/last/dataset/items?token=${apiToken}&format=json&status=SUCCEEDED`,
      { cache: "no-store" }
    );
    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
        "Pragma": "no-cache",
        "Expires": "0",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}


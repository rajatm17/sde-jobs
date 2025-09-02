// src/pages/api/jobs.js
export async function GET() {
  const apiToken = import.meta.env.API_TOKEN2;
  const taskId = "Vh6MZ3EauonePlBg3";

  try {
    const res = await fetch(
      `https://api.apify.com/v2/actor-runs?token=${apiToken}&desc=true`,
      { cache: "no-store" }
    );
    const data = await res.json();
    const dataSetId = data.data.items[0].defaultDatasetId
    console.log(dataSetId)

    const res_items = await fetch(
      `https://api.apify.com/v2/datasets/${dataSetId}/items`,
      { cache: "no-store" }
    );

    const items_data = await res_items.json();

    return new Response(JSON.stringify(items_data), {
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


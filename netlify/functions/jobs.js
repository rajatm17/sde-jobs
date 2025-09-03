export async function handler(event, context) {
  const apiToken = process.env.API_TOKEN2;
  const taskId = "Vh6MZ3EauonePlBg3";

  try {
    // 1. Get the latest SUCCEEDED run for your task
    const runsRes = await fetch(
      `https://api.apify.com/v2/actor-tasks/${taskId}/runs?token=${apiToken}&status=SUCCEEDED&limit=1&desc=1&nocache=${Date.now()}`,
      { cache: "no-store" }
    );
    const runsData = await runsRes.json();

    if (!runsData?.data?.items?.length) {
      return { statusCode: 404, body: JSON.stringify({ error: "No runs found" }) };
    }

    const datasetId = runsData.data.items[0].defaultDatasetId;

    // 2. Fetch dataset items
    const itemsRes = await fetch(
      `https://api.apify.com/v2/datasets/${datasetId}/items?token=${apiToken}&format=json&clean=1&desc=1&nocache=${Date.now()}`,
      { cache: "no-store" }
    );
    const itemsData = await itemsRes.json();

    // 3. Return dataset items
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
        "Pragma": "no-cache",
        "Expires": "0",
      },
      body: JSON.stringify(itemsData),
    };
  } catch (err) {
    console.error("Error in /api/jobs:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data" }),
    };
  }
}

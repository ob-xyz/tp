export async function loader({ request }: LoaderFunctionArgs) {
  const referer = request.headers.get("referer") ?? "";
  const slug = referer.split("/").filter(Boolean).pop() ?? "unknown";

  try {
    const res = await fetch(`${process.env.LISTMONK_URL}/api/subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${process.env.LISTMONK_API_TOKEN}`,
      },
      body: JSON.stringify({
        email: `${slug}-${Date.now()}@placeholder.com`,
        lists: [33],
        status: "enabled",
        attribs: { source_page: referer },
      }),
    });
    const data = await res.json();
    console.log("Listmonk response:", res.status, data); // check your server logs
  } catch (err) {
    console.error("Listmonk error:", err); // check your server logs
  }

  return json({ slug });
}
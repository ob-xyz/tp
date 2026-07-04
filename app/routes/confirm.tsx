// app/routes/confirm.tsx
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ request }: LoaderFunctionArgs) {
  const referer = request.headers.get("referer") ?? "";
  const slug = referer.split("/").filter(Boolean).pop() ?? "unknown";

  const listmonkUrl = process.env.LISTMONK_URL ?? "https://app.thepoast.com"; // fallback for now

  try {
    const res = await fetch(`${listmonkUrl}/api/subscribers`, {
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
    console.log("Listmonk response:", res.status, data);
  } catch (err) {
    console.error("Listmonk error:", err);
  }

  return json({ slug });
}

export default function Confirm() {
  const { slug } = useLoaderData<typeof loader>();
  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      <div style={{ fontSize: 48 }}>✓</div>
      <h2>Got it — we'll be in touch shortly</h2>
      <p>Thanks for your interest, {slug}.</p>
    </div>
  );
}
// app/routes/confirmed.tsx
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ request }: LoaderFunctionArgs) {
  const referer = request.headers.get("referer") ?? "";
  // e.g. "https://thepoast.com/railway"
  const slug = referer.split("/").filter(Boolean).pop() ?? "unknown";
  // slug = "railway"

  await fetch(process.env.NOTIFY_WEBHOOK_URL!, {
    method: "POST",
    body: JSON.stringify({ text: `🎯 Start Trial clicked — ${slug}` }),
  }).catch(() => {});

  return json({ slug });
}

export default function Confirmed() {
  const { slug } = useLoaderData<typeof loader>();
  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      <div style={{ fontSize: 48 }}>✓</div>
      <h2>Got it — we'll be in touch shortly</h2>
      <p>Thanks for your interest, {slug}.</p>
    </div>
  );
}
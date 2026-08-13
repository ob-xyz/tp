// app/routes/articles.$id.tsx
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
  const campaignId = params.id;
  const username = process.env.USERNAME;
  const token = process.env.TOKEN;
  const authHeader = `Basic ${Buffer.from(`${username}:${token}`).toString("base64")}`;

  // 1. Fetch target campaign
  const campaignRes = await fetch(
    `https://app.thepoast.com/api/campaigns/${campaignId}`,
    { headers: { Authorization: authHeader, Accept: "application/json" } }
  );

  if (!campaignRes.ok) {
    throw new Response("Article Not Found", { status: 404 });
  }

  const campaignData = await campaignRes.json();
  const campaign = campaignData?.data;

  if (!campaign) {
    throw new Response("Invalid Article Data", { status: 404 });
  }

  let fullHtml = campaign.body || "";

  // 2. Fetch template if template_id exists
  if (campaign.template_id) {
    const templateRes = await fetch(
      `https://app.thepoast.com/api/templates/${campaign.template_id}`,
      { headers: { Authorization: authHeader, Accept: "application/json" } }
    );

    if (templateRes.ok) {
      const templateData = await templateRes.json();
      const rawTemplate = templateData?.data?.body || "";
      if (rawTemplate) {
        fullHtml = rawTemplate.replace(
          /\{\{\s*template\s+"content"\s+\.\s*\}\}/g,
          campaign.body
        );
      }
    }
  }

  // 3. Clean Go template tags
  fullHtml = fullHtml.replace(/\{\{[\s\S]*?\}\}/g, "").trim();

  return json({ fullHtml, subject: campaign.subject });
}

export default function ArticleDetail() {
  const { fullHtml, subject } = useLoaderData<typeof loader>();

  return (
    <main style={{ width: "100%", height: "100vh", margin: 0, padding: 0 }}>
      <iframe
        title={subject || "Article"}
        srcDoc={fullHtml}
        style={{ width: "100%", height: "100%", border: "none", display: "block" }}
      />
    </main>
  );
}
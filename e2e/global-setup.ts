import { request } from "@playwright/test";

function getVercelBypassHeaders(): Record<string, string> | undefined {
  const bypass = process.env.VERCEL_AUTOMATION_BYPASS_SECRET?.trim();
  if (!bypass) {
    return undefined;
  }

  return {
    "x-vercel-protection-bypass": bypass,
    "x-vercel-set-bypass-cookie": "true",
  };
}

export default async function globalSetup() {
  const baseURL = process.env.PLAYWRIGHT_BASE_URL;
  if (!baseURL || baseURL.includes("localhost")) {
    return;
  }

  const context = await request.newContext({
    baseURL,
    extraHTTPHeaders: getVercelBypassHeaders(),
  });

  try {
    const response = await context.get("/");
    const status = response.status();

    if (status === 401 || status === 403) {
      const bypass = process.env.VERCEL_AUTOMATION_BYPASS_SECRET?.trim();

      if (!bypass) {
        throw new Error(
          [
            `Preview deployment ${baseURL} returned HTTP ${status} (Vercel Deployment Protection).`,
            "Add VERCEL_AUTOMATION_BYPASS_SECRET to GitHub repository secrets.",
            "Create the bypass secret in Vercel:",
            "Project Settings → Deployment Protection → Protection Bypass for Automation.",
          ].join(" "),
        );
      }

      throw new Error(
        [
          `Preview deployment ${baseURL} returned HTTP ${status} with bypass headers.`,
          "Verify VERCEL_AUTOMATION_BYPASS_SECRET matches the value configured in Vercel.",
        ].join(" "),
      );
    }

    if (status >= 400) {
      throw new Error(
        `Preview deployment ${baseURL} returned HTTP ${status} before tests could run.`,
      );
    }
  } finally {
    await context.dispose();
  }
}

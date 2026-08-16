import { siteConfig } from "@/data/siteConfig";

export default function sitemap() {
  const baseUrl = "https://gaganacabs.in";

  const routes = [
    "",
    "/about",
    "/services",
    "/pricing",
    "/packages",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://momatstudio.co.za";
  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/blog`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/careers`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/terms-of-service`, changeFrequency: "yearly", priority: 0.2 },
  ];
}

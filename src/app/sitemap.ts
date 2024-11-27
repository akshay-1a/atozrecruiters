import { MetaData } from "@/lib/constants";
import { Metadata as meta} from "next";
import { generateMetadata as getMetadata } from "@/lib/generate-metadata";


export async function generateMetadata(): Promise<meta> {
  return getMetadata({ slug: ["home", "sitemap"] });
}

export default async function sitemap() {
  const baseUrl = "https://www.atozrecruiters.com";

  // Helper function to create sitemap entries
  const createSitemapEntry = (path: string) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  });

  // Generate sitemap entries
  const sitemapEntries = [
    createSitemapEntry("/"),
    ...Object.values(MetaData.company).map((item) =>
      createSitemapEntry(`/${item.href}`)
    ),
    ...Object.values(MetaData.services).map((item) =>
      createSitemapEntry(`/services/${item.href}`)
    ),
    ...Object.values(MetaData.industry).map((item) =>
      createSitemapEntry(`/industry/${item.href}`)
    ),
    // ...navItems.company.map((item) => createSitemapEntry(item.href)),
    // ...navItems.services.map((item) => createSitemapEntry(item.href)),
    // ...navItems.industries.map((item) => createSitemapEntry(item.href)),
  ];

  return sitemapEntries;
}

import { MetaData, navItems } from "@/lib/constants"; // Adjust the import path as needed

export default async function sitemap() {
  const baseUrl = "https://www.yourwebsite.com"; // Replace with your actual domain

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
      createSitemapEntry(item.href)
    ),
    ...navItems.company.map((item) => createSitemapEntry(item.href)),
    ...navItems.services.map((item) => createSitemapEntry(item.href)),
    ...navItems.industries.map((item) => createSitemapEntry(item.href)),
  ];

  return sitemapEntries;
}

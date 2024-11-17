import { Metadata } from "next";
import { MetaData, MetaDataKey } from "./constants";

export async function GenerateMetadata(path: string): Promise<Metadata> {
  // Remove leading slash and convert to camelCase
  const key = path
    .slice(1)
    .replace(/-./g, (x) => x[1].toUpperCase()) as MetaDataKey;

  const metadata = MetaData[key] || MetaData.homepage;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
  };
}

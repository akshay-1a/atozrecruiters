import { Metadata } from "next";
import { MetaData } from "./constants";

type NestedMetaData = {
  title: string;
  description: string;
  keywords: string[];
};

function getNestedMetadata(
  obj: any,
  path: string[]
): NestedMetaData | undefined {
  return path.reduce((acc, key) => acc && acc[key], obj);
}

export function generateMetadata(params: { slug: string[] }): Metadata {
  // Filter out route groups (segments starting with parentheses)
  const path = params.slug
    ? params.slug.filter((segment) => !segment.startsWith("(")).join("/")
    : "";

  // Try to find the metadata for the exact path
  let metadata = getNestedMetadata(MetaData, path.split("/"));

  // If not found, try to find metadata for parent paths
  const pathSegments = path.split("/");
  while (!metadata && pathSegments.length > 0) {
    pathSegments.pop();
    metadata = getNestedMetadata(MetaData, pathSegments);
  }

  // If still not found, use the home page metadata
  if (!metadata) {
    metadata = MetaData.home.page;
  }

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
  };
}

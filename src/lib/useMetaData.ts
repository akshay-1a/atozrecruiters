import { usePathname } from "next/navigation";
import { MetaData, MetaDataKey } from "./constants";

export function useMetadata() {
  const pathname = usePathname();

  // Convert pathname to camelCase to match our metadata keys
  const key = pathname
    .slice(1)
    .split("/")
    .map((segment, index) =>
      index === 0 ? segment : segment.charAt(0).toUpperCase() + segment.slice(1)
    )
    .join("") as MetaDataKey;

  return MetaData[key] || MetaData.home.page;
}

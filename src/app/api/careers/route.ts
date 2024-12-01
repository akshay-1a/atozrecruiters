import { NextResponse } from "next/server";
import { JobListing } from "@/types";

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRByGyTAOQOUtPSIuI83cw5cJbkldt6Wrv5Ivu9EPnISrxvyc7rSSAyE8narHJZoBjaLgmeO4NYYHYy/pub?output=csv";

function parseCSVLine(line: string): string[] {
  const result = [];
  let cell = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    if (line[i] === '"') {
      inQuotes = !inQuotes;
    } else if (line[i] === "," && !inQuotes) {
      result.push(cell.trim());
      cell = "";
    } else {
      cell += line[i];
    }
  }

  result.push(cell.trim());
  return result;
}

async function fetchAndParseCSV(): Promise<JobListing[]> {
  const response = await fetch(CSV_URL, { cache: "no-store"});
  const csvText = await response.text();
  const rows = csvText.split("\n").map(parseCSVLine);
  const headers = rows[0];

  return rows.slice(1).map((row) => {
    const jobListing: JobListing = {
      jobTitle: row[headers.indexOf("Job Title")] || "",
      location: row[headers.indexOf("Location")] || "",
      salary: row[headers.indexOf("Salary")] || "",
      experience: row[headers.indexOf("Experience")] || "",
      qualification: row[headers.indexOf("Qualification")] || "",
      jdLink: row[headers.indexOf("JD Link")] || "",
      contactEmail: row[headers.indexOf("Contact Email")] || "",
      phone: row[headers.indexOf("Phone")] || "",
    };
    return jobListing;
  });
}

export async function GET() {
  try {
    const jobListings = await fetchAndParseCSV();
    return NextResponse.json(jobListings);
  } catch (error) {
    console.error("Error fetching job listings:", error);
    return NextResponse.json(
      { error: "Failed to fetch job listings" },
      { status: 500 }
    );
  }
}

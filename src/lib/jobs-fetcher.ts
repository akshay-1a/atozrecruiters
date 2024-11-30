// src/lib/jobs-fetcher.ts
import Papa from "papaparse";
import { JobListing } from "@/types";

export async function fetchJobListings(): Promise<JobListing[]> {
  const response = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRByGyTAOQOUtPSIuI83cw5cJbkldt6Wrv5Ivu9EPnISrxvyc7rSSAyE8narHJZoBjaLgmeO4NYYHYy/pub?gid=0&single=true&output=csv",
    { next: { revalidate: 3600 } } // Revalidate every hour
  );

  const csvText = await response.text();

  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      complete: (results) => {
        const jobs = results.data
          .map((job: any) => ({
            jobTitle: job["Job Title"] || "",
            location: job["Location"] || "",
            salary: job["Salary"] || "",
            experience: job["Experience"] || "",
            qualification: job["Qualification"] || "",
            keyResponsibilities: job["Key Responsibilities"] || "",
            contactEmail: job["Contact Email"] || "",
            phone: job["Phone"] || "",
          }))
          .filter((job: JobListing) => job.jobTitle); // Remove empty rows

        resolve(jobs);
      },
      error: (error: any) => reject(error),
    });
  });
}

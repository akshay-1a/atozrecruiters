// import { google } from "googleapis";
// import { NextResponse } from "next/server";

// const analyticsDataClient = google.analyticsdata("v1beta");

// const jwtClient = new google.auth.JWT(
//   process.env.GA_CLIENT_EMAIL,
//   undefined,
//   process.env.GA_PRIVATE_KEY,
//   ["https://www.googleapis.com/auth/analytics.readonly"]
// );

// export async function GET() {
//   try {
//     await jwtClient.authorize();

//     const [realtimeResponse, totalVisitorsResponse] = await Promise.all([
//       analyticsDataClient.properties.runRealtimeReport({
//         auth: jwtClient,
//         property: `properties/${process.env.GA_PROPERTY_ID}`,
//         requestBody: {
//           metrics: [{ name: "activeUsers" }],
//         },
//       }),
//       analyticsDataClient.properties.runReport({
//         auth: jwtClient,
//         property: `properties/${process.env.GA_PROPERTY_ID}`,
//         requestBody: {
//           dateRanges: [{ startDate: "2024-01-01", endDate: "today" }],
//           metrics: [{ name: "totalUsers" }],
//         },
//       }),
//     ]);

//     const activeUsers = parseInt(
//       realtimeResponse.data.rows?.[0]?.metricValues?.[0]?.value || "0",
//       10
//     );
//     const totalVisitors = parseInt(
//       totalVisitorsResponse.data.rows?.[0]?.metricValues?.[0]?.value || "0",
//       10
//     );

//     return NextResponse.json({ activeUsers, totalVisitors });
//   } catch (error) {
//     console.error("Error fetching visitor stats:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch visitor stats" },
//       { status: 500 }
//     );
//   }
// }

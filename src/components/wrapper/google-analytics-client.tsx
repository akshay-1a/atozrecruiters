import { google } from 'googleapis';

export class GoogleAnalyticsClient {
    private analytics: any;

    constructor() {
        this.initializeAnalytics();
    }

    private initializeAnalytics() {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GA_CLIENT_EMAIL,
                private_key: process.env.GA_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: ['https://www.googleapis.com/auth/analytics.readonly']
        });

        this.analytics = google.analyticsdata({ version: 'v1beta', auth });
    }

    async getAnalyticsData() {
        try {
            // Fetch total users
            const totalUsersResponse = await this.analytics.properties.runReport({
                property: `properties/${process.env.GA_PROPERTY_ID}`,
                requestBody: {
                    dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
                    metrics: [{ name: 'totalUsers' }]
                }
            });

            // Fetch real-time users
            const realTimeUsersResponse = await this.analytics.properties.runRealtimeReport({
                property: `properties/${process.env.GA_PROPERTY_ID}`,
                requestBody: {
                    metrics: [{ name: 'activeUsers' }]
                }
            });

            return {
                totalUsers: parseInt(totalUsersResponse.data.rows?.[0]?.metricValues?.[0]?.value || '0'),
                realTimeUsers: parseInt(realTimeUsersResponse.data.rows?.[0]?.metricValues?.[0]?.value || '0')
            };
        } catch (error) {
            console.error('Error fetching Google Analytics data:', error);
            throw error;
        }
    }
}
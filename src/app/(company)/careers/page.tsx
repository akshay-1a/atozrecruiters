// 'use client';
import { JobListing } from '@/types';
import CareersClient from './client';
import { Metadata } from 'next';
import { generateMetadata as getMetadata } from '@/lib/generate-metadata';


export async function generateMetadata(): Promise<Metadata> {
    return getMetadata({ slug: ['company', 'careers'] })
}

async function getJobListings(): Promise<JobListing[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/careers`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch job listings');
    return res.json();
}

export default async function CareersPage() {
    const initialJobListings = await getJobListings();
    // console.log("page.tsx",initialJobListings);
    return <CareersClient initialJobListings={initialJobListings} />;
}

'use client'

import { useState } from 'react';
import { JobListing } from '@/types';
import JobListings from '@/components/careers/job-listings';
import { SearchAndFilter } from '@/components/careers/search-filter';
import { H1, H3, P } from '@/components/animations/animated-tags';
import Link from 'next/link';
import { Fade } from '@/components/animations/clip';

interface CareersClientProps {
    initialJobListings: JobListing[];
}

export default function CareersClient({ initialJobListings }: CareersClientProps) {
    const [filteredJobs, setFilteredJobs] = useState<JobListing[]>(initialJobListings);

    return (
        <div className="min-h-screen w-full bg-slate-100 pt-16 p-6 md:p-28 md:pb-8 text-wrap">
            <H1 className="text-4xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-cyan-700 to-slate-900 pb-2 text-center">
                Career Opportunities
            </H1>
            <H3 className=' text-xl md:text-4xl tracking-wide font-semibold mx-auto w-full text-cyan-900 pb-4'>
                Shape Your Future, Empower Businesses
            </H3>
            <P className='md:max-w-5xl mx-auto pb-10 text-lg md:text-2xl text-center'>
                At AToZ Recruiters LLP, we partner with top organizations across diverse industries to connect ambitious professionals with their dream roles. Browse through the latest job openings, explore the perfect match for your skills, and take the next step in your career journey today.
            </P>
            <SearchAndFilter jobs={initialJobListings} onFilter={setFilteredJobs} />
            <JobListings jobs={filteredJobs} />

            <H3 className='pb-2 pt-16 text-cyan-900 md:text-5xl font-bold'>Partner With Us</H3>
            <P className='max-w- 5xl mx-auto md:text-2xl text-pretty '>
                Are you an organization looking to hire exceptional talent? Partner with AToZ Recruiters LLP to post your job openings on this page and access a vast pool of qualified candidates. Contact us at <Link href="mailto:proposal@atozrecruiters.com" className='text-blue-500'>proposal@atozrecruiters.com</Link> to get started.
            </P>

            <Fade  className='text-slate-600 text-sm md:text-lg tracking-wider uppercase md:text-center pt-20 font-thin '>
                Step into your next opportunity with AToZ Recruiters LLP!
            </Fade>
        </div>
    );
}


'use client';

import React from 'react';
import { IndustryData } from '@/lib/industries';
import NotFound from '@/app/not-found';
import Header from '@/components/industry/header';
import Overview from '@/components/industry/overview';
import Services from '@/components/industry/services';
import FAQ from '@/components/industry/faq';
import CallToAction from '@/components/industry/call-to-action';
import Stats from '@/components/industry/stats';

interface ClientProps {
    data: IndustryData | undefined;
}

export default function Client({ data }: ClientProps) {
    if (!data || data === undefined) {
        return <NotFound />;
    }

    return (
        <div className="relative container mx-auto bg-gradient-to-b from-cyan-50 to-white text-pretty">
            <Header data={data.header} />
            <Overview data={data.overview} />
            {data.stats && <Stats data={data.stats} />}
            <Services data={data.services} />
            <CallToAction data={data.callToAction} />
            <FAQ data={data.faqs} />
        </div>
    );
}


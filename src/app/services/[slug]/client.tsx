'use client';
// (services)/[slug]/client.tsx
import React from 'react'
import { ServiceData } from '@/types'
import NotFound from '@/app/not-found'
import Hero from '@/components/services/hero'
import FAQ from '@/components/services/faq'
import KeyBenefits from '@/components/services/key-benefits'
import Overview from '@/components/services/overview'
import Process from '@/components/services/process'
import RelatedServices from '@/components/services/related'
import Testimonials from '@/components/services/testimonials'
import WhyChooseUs from '@/components/services/why-choose-us'
import { Related } from '@/lib/services';

interface ClientProps {
    data: ServiceData | undefined
}

export default function Client({ data }: ClientProps) {
    if (!data || data === undefined) {
        return (
            <NotFound />
        )
    }

    return (
        <div className="relative container mx-auto pt-28 bg-gradient-to-b from-blue-50 to-white text-pretty">
            {/* <Hero hero={data.hero}/> */}
            <Overview data={data.overview} />
            <Hero data={data.hero} />
            <KeyBenefits data={data.keyBenefits} />
            <Process data={data.process} />
            <WhyChooseUs data={data.whyChooseUs} />
            <Testimonials data={data.testimonials} />
            <RelatedServices data={Related}/>
            <FAQ data={data.faq} />
        </div>
    )
}
import { CompanyShowcase } from '@/components/homepage/company-showcase'
import Count from '@/components/homepage/count'
import Faq from '@/components/homepage/faq'
import Hero from '@/components/homepage/hero-section'
import Intro from '@/components/homepage/intro'
import Services from '@/components/homepage/services'
import React from 'react'

export default function Client() {
    return (
        <div className='min-h-screen w-full overflow-hidden bg-cyan-50 '>
            <Hero />
            <Count />
            <Intro />
            <CompanyShowcase/>
            <Services />
            <Faq/>
        </div>
    )
}

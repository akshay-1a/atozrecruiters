import Count from '@/components/homepage/count'
import Faq from '@/components/homepage/faq'
import Hero from '@/components/homepage/hero-section'
import Intro from '@/components/homepage/intro'
import Services from '@/components/homepage/services'
import React from 'react'

export default function client() {
    return (
        <main className='min-h-screen w-full bg-cyan-50 '>
            <Hero />
            <Count />
            <Intro />
            <Services />
            <Faq/>
        </main>
    )
}

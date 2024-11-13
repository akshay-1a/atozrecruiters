import Count from '@/components/homepage/count'
import Hero from '@/components/homepage/hero-section'
import Intro from '@/components/homepage/intro'
import Services from '@/components/homepage/services'
import React from 'react'

export default function client() {
    return (
        <main className='min-h-screen w-full bg-gradient-to-b from-cyan-100 to-white'>
            <Hero />
            <Count />
            <Intro />
            <Services />
        </main>
    )
}

'use client';

import React from 'react'
import { CompanyData } from '@/types';
import NotFound from '@/app/not-found';
import { CTASection } from '@/components/about/CTASection';
import { ImpactSection } from '@/components/about/ImpactSection';
import { MissionSection } from '@/components/about/MissionSection';
import { StorySection } from '@/components/about/StorySection';
import { StrengthsSection } from '@/components/about/StrengthsSection';
import { TeamSection } from '@/components/about/TeamSection';
import { ValuesSection } from '@/components/about/ValuesSection';
import { HeroSection } from '@/components/about/HeroSection';
// import { aboutData } from '@/lib/about';

interface CompanyProps {
  data : CompanyData | undefined
}

export default function Client({ data }: CompanyProps) {
  if (!data || data === undefined) {
    return (
      <NotFound />
    )
  }
  return (
    <main className={`min-h-screen w-full py-0 flex flex-col justify-center items-center overflow-hidden`}>
      
      <HeroSection data={data.hero} />
      <StorySection data={data.story} />
      <MissionSection data={data.mission} />
      <ValuesSection data={data.values} />
      <StrengthsSection data={data.uniqueStrengths} />
      {/* <TeamSection data={data.team} /> */}
      <ImpactSection data={data.impact} />
      <CTASection data={data.cta} />
    </main>
  )
}

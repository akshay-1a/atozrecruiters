import React from 'react'
import { Metadata } from 'next'
import { MetaData } from '@/lib/constants'
import Client from './client'
import { notFound } from 'next/navigation'
import { Industries } from '@/lib/industries'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const {slug} = await props.params;
  // Find the service metadata based on the URL
  const IndustryMetadata = Object.values(MetaData.industry).find(
    industry => industry.href === `${slug}`
  )

  if (!IndustryMetadata) {
    return {
      title: "Not Found | A to Z Recruiters LLP",
      description:
        "Your trusted partner in recruitment and talent acquisition, shaping futures and empowering businesses. We don't just fill positions; we shape futures.",
      keywords: [
        "Recruitment Services",
        "HR Consulting",
        "Talent Acquisition",
        "Staffing Solutions",
      ],    
    }
  }

  return {
    title: IndustryMetadata.title,
    description: IndustryMetadata.description,
    keywords: IndustryMetadata.keywords,
  }
}

export async function generateStaticParams() {
  return Object.values(Industries).map((industry) => ({
    slug: industry.href.replace('/', ''),
  }))
}

// Make the Page component async
export default async function Page(props: Props) {
  const params = await props.params;
  // Since we're in an async component, we can safely access params
  const InsustryData = Object.values(Industries).find(
    industry => industry.href === `/${params.slug}`
  )

  if (!InsustryData) {
    // Instead of console.log, use notFound() to show the 404 page
    notFound()
  }

  return <Client data={InsustryData} />
}
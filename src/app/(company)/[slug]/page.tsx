import React from 'react'
import { Metadata } from 'next'
import { Company } from '@/lib/company'
import { MetaData } from '@/lib/constants'
import Client from './client'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  // Find the service metadata based on the URL
  console.log("data.slug: ", slug)
  const companyMetadata = Object.values(MetaData.company).find(
    company => company.href === `${slug}`

  )

  if (!companyMetadata) {
    return {
      title: "Not Found | A to Z Recruitment and Staffing Firm",
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
    title: companyMetadata.title,
    description: companyMetadata.description,
    keywords: companyMetadata.keywords,
  }
}

// export async function generateStaticParams() {
//   return Object.values(Company).map((company) => ({
//     slug: company.slug.replace('/', ''),
//   }))
// }

// Make the Page component async
export default async function Page(props: Props) {
  const params = await props.params;
  console.log("slug: ", params)

  // Since we're in an async component, we can safely access params
  const aboutData = Object.values(Company).find(
    company => company.slug === `${params.slug}`
  )

  if (!aboutData) {
    // Instead of console.log, use notFound() to show the 404 page
    notFound()
  }

  return <Client data={aboutData} />
}
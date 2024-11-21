import React from 'react'
import { Metadata } from 'next'
import { Services } from '@/lib/services'
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
  const serviceMetadata = Object.values(MetaData.services).find(
    service => service.href === `/${slug}`
  )

  if (!serviceMetadata) {
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
    title: serviceMetadata.title,
    description: serviceMetadata.description,
    keywords: serviceMetadata.keywords,
  }
}

export async function generateStaticParams() {
  return Object.values(Services).map((service) => ({
    slug: service.href.replace('/', ''),
  }))
}

// Make the Page component async
export default async function Page(props: Props) {
  const params = await props.params;
  // Since we're in an async component, we can safely access params
  const serviceData = Object.values(Services).find(
    service => service.href === `/${params.slug}`
  )

  if (!serviceData) {
    // Instead of console.log, use notFound() to show the 404 page
    notFound()
  }

  return <Client data={serviceData} />
}
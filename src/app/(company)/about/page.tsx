import React from 'react'
import { About } from '@/lib/company'
import { Metadata } from 'next'
import Client from './client'
import { generateMetadata as getMetadata } from '@/lib/generate-metadata';


export async function generateMetadata(): Promise<Metadata> {
  return getMetadata({ slug: ['company', 'about'] })
}

// Make the Page component async
export default async function Page() {
  return <Client data={About} />
}
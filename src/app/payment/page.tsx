import React from 'react'
import Client from './client'
import { Metadata } from 'next';
import { generateMetadata as getMetadata } from '@/lib/generate-metadata';


export async function generateMetadata(): Promise<Metadata> {
  return getMetadata({ slug: ['company', 'payment'] })
}


export default function page() {
  return <Client/>
}

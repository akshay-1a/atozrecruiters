import React from 'react'
import ContactPage from './client'
import { contactData } from '@/lib/constants'
import { Metadata } from 'next';
import { generateMetadata as getMetadata } from '@/lib/generate-metadata';


export async function generateMetadata(): Promise<Metadata> {
    return getMetadata({ slug: ['company', 'contact'] })
}

export default function page() {
    return <ContactPage contactData={contactData()} />
}

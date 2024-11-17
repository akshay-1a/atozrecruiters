import React from 'react'
import ContactPage from './client'
import { contactData } from '@/lib/constants'
import { Metadata } from 'next';
import { GenerateMetadata } from '@/lib/generate-metadata';


export async function generateMetadata(): Promise<Metadata> {
    return GenerateMetadata('/contact');
}

export default function page() {
    return <ContactPage contactData={contactData()} />
}

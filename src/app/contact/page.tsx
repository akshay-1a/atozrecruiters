import React from 'react'
import ContactPage from './client'
import { contactData } from '@/lib/constants'

export default function page() {
    return <ContactPage contactData={contactData()} />
}

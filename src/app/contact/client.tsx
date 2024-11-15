'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import { ContactDetails, Map } from '@/components/contact/side-components'
import { FormComponent } from '@/components/contact/form-component'

interface ContactPageProps {
    contactData: {
        context: { mainHeading: string; paragraph: string };
        tabs: { label: string; formKey: string }[];
        forms: {
            [key: string]: {
                innerHeading: string;
                purpose: string;
                fields: { name: string; label: string; type: string; required: boolean }[];
                imageUrl: string;
                imgCaption: string;
                imagePosition: string;
            };
        };

        contactInfo: {
            heading: string;
            details: { label: string; value: string }[];
        };
        mapEmbed: {
            heading: string;
            embedUrl: string;
        };
    };
}

export default function ContactPage({ contactData }: ContactPageProps) {
    const [activeTab, setActiveTab] = useState('candidate')

    const handleSubmit = (formKey: string, formData: Record<string, string>) => {
        console.log(`Form submitted for ${formKey}:`, formData)
        // Add your form submission logic here
    }

    return (
        <div className="container mx-auto p-20 pt-24">
            {/* Breadcrumb */}
            <nav className="flex mb-8 text-sm text-gray-500" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <a href="/" className="hover:text-gray-700">Home</a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <ChevronRight className="w-4 h-4 mx-1" />
                            <span className="ml-1 text-gray-700" aria-current="page">Contact</span>
                        </div>
                    </li>
                </ol>
            </nav>

            {/* Context Section */}
            <section className="mb-12 text-center pt-10">
                <h1 className="text-7xl text-slate-800 font-extrabold mb-4">{contactData.context.mainHeading}</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    {contactData.context.paragraph}
                </p>
            </section>

            {/* Tab Buttons and Forms */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
                <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-5">
                    {contactData.tabs.map((tab) => (
                        <TabsTrigger key={tab.formKey} value={tab.formKey}>
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {contactData.tabs.map((tab) => (
                    <TabsContent key={tab.formKey} value={tab.formKey}>
                        <FormComponent
                            imgPos={contactData.forms[tab.formKey].imagePosition}
                            imgCap={contactData.forms[tab.formKey].imgCaption}
                            imgUrl={contactData.forms[tab.formKey].imageUrl}
                            formData={contactData.forms[tab.formKey]}
                            onSubmit={(formData) => handleSubmit(tab.formKey, formData)}
                        />
                    </TabsContent>
                ))}
            </Tabs>

            {/* Image Section */}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}>
                <ContactDetails data={contactData.contactInfo} />
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Let's Connect</h2>
                    <p className="text-lg text-gray-600">
                        Whether you're a talented professional looking for your next career move or an organization seeking
                        exceptional talent, we're here to bridge the gap. Our team is dedicated to creating meaningful
                        connections that drive success for both candidates and clients.
                    </p>
                    <Button size="lg">Schedule a Consultation</Button>
                </div>
            </div>
            {/* Contact Information and Map */}
            <Map />
        </div>
    )
}


// <Candidate />
// <Client />
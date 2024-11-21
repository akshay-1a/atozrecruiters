'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import { ContactDetails, Map } from '@/components/contact/side-components'
import { FormComponent } from '@/components/contact/form-component'
import { redirect } from 'next/navigation'

interface ContactPageProps {
    contactData: {
        context: { Heading: string; subHeading: string; paragraph: string };
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
            desc: string;
            details: { label: string; value: string }[];
            heading2: string;
            para: string;
            actionBtn: string;
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
        <div className="container mx-auto p-4 md:p-20 pt-20 bg-cyan-50 w-full overflow-hidden text-pretty">
            {/* Breadcrumb */}
            <nav className="flex mt-8 pl-5 md:pl-0 md:mt-0 text-sm text-slate-500" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <a href="/" className="hover:text-slate-700">Home</a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <ChevronRight className="w-4 h-4 mx-1" />
                            <span className="ml-1 text-slate-700" aria-current="page">Contact</span>
                        </div>
                    </li>
                </ol>
            </nav>

            {/* Context Section */}
            <section className="mb-12 text-center pt-10 px-3 md:px-28 space-y-4 md:space-y-0">
                <h1 className="text-4xl md:text-7xl text-slate-900 font-bold pl-1">{contactData.context.Heading}</h1>
                <h1 className="text-2xl text-slate-600 font-extrabold md:pb-10">{contactData.context.subHeading}</h1>
                <p className="text-xl text-slate-600 mx-auto">
                    {contactData.context.paragraph}
                </p>
            </section>

            {/* Tab Buttons and Forms */}
            <Tabs id="forms" value={activeTab} onValueChange={setActiveTab} className="mb-12">
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
                        formtype={tab.formKey}
                            imgPos={contactData.forms[tab.formKey].imagePosition}
                            imgCap={contactData.forms[tab.formKey].imgCaption}
                            imgUrl={contactData.forms[tab.formKey].imageUrl}
                            formData={contactData.forms[tab.formKey]}
                            onSubmit={(formData) => handleSubmit(tab.formKey, formData)}
                        />
                    </TabsContent>
                ))}
            </Tabs>

            {/* Contact Details Section */}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}>
                <ContactDetails {...contactData.contactInfo} />
                <div className="space-y-1">
                    <h2 className="text-3xl font-bold">Let's Connect</h2>
                    <p className="text-lg text-gray-600 pb-5">
                        {contactData.contactInfo.para}
                    </p>
                    <Button onClick={()=> {redirect("/contact#forms")}} size="lg">
                        {contactData.contactInfo.actionBtn}
                    </Button>
                </div>
            </div>
            {/* Map */}
            <Map />
        </div>
    )
}

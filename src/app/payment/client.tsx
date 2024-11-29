'use client'

import { useState } from 'react'
import { PaymentForm } from "@/components/payment/form"
import { paymentPageData } from "@/lib/payment"
import { motion } from "framer-motion"
import { CreditCard, DollarSign, Smartphone, Mail, FileCheck, Send } from 'lucide-react'
import React from 'react'

export default function PaymentPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (formData: FormData) => {
        setIsSubmitting(true)
        try {
            const response = await fetch('/api/payment', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Form submission failed');
            }
        } finally {
            setIsSubmitting(false)
        }
    };

    const stepsIcons = [CreditCard, DollarSign, Smartphone, FileCheck, Mail, Send]

    return (
        <div className="container mx-auto py-20 px-5 md:p-28 bg-gradient-to-b from-slate-50 to-white min-h-screen">
            <motion.h1
                className=" text-4xl md:text-5xl font-black pb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-800 via-cyan-700 to-slate-800"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {paymentPageData.heading}
            </motion.h1>
            <motion.p
                className="text-xl pb-6 text-center text-slate-700 max-w-5xl mx-auto"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {paymentPageData.introduction}
            </motion.p>
            <PaymentForm
                formFields={paymentPageData.formFields}
                services={paymentPageData.services}
                qrCodeImage={paymentPageData.image}
                onSubmit={handleSubmit}
            />
            <motion.div
                className="mt-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <h2 className="text-3xl md:text-4xl font-black mb-8 text-center text-slate-700">How to Make a Payment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {paymentPageData.paymentSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                            <div className="flex items-center mb-4">
                                {stepsIcons[index] && React.createElement(stepsIcons[index], { className: "text-slate-500 mr-3", size: 24 })}
                                <h3 className="text-xl font-semibold text-slate-700">{step.title}</h3>
                            </div>
                            <p className="text-slate-600">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}


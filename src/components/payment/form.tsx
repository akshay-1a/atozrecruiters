'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PaymentFormField, PaymentService } from "@/lib/payment"

interface PaymentFormProps {
    formFields: PaymentFormField[]
    services: PaymentService[]
    qrCodeImage: string
    onSubmit: (formData: FormData) => Promise<void>
}

export function PaymentForm({ formFields, services, qrCodeImage, onSubmit }: PaymentFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)
    const [selectedService, setSelectedService] = useState<PaymentService | null>(null)
    const [isFlipping, setIsFlipping] = useState(false)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsSubmitting(true)
        setError(null)

        const formElement = event.currentTarget
        const formData = new FormData(formElement)

        // Add the selected service name to the form data
        if (selectedService) {
            formData.append('serviceName', selectedService.name)
            formData.append('serviceAmount', selectedService.amount.toString())
        }

        try {
            await onSubmit(formData)
            setIsFlipping(true)
            setTimeout(() => {
                setSuccess(true)
                setIsFlipping(false)
            }, 1000)
        } catch (error) {
            console.error('Error submitting form:', error)
            setError('An error occurred while submitting the form. Please try again.')
        } finally {
            setIsSubmitting(false)
            formElement.reset() // Reset form after successful submission

        }
    }

    const handleServiceChange = (serviceId: string) => {
        const service = services.find(s => s.id === serviceId) || null
        setSelectedService(service)
    }

    useEffect(() => {
        if (selectedService) {
            const amountInput = document.getElementById('amount') as HTMLInputElement
            if (amountInput) {
                amountInput.value = `₹${selectedService.amount}`
            }
        }
    }, [selectedService])

    return (
        <Card className="w-full h-full max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-cyan-50 shadow-lg">
            <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-3/5 h-full p-6 flex flex-col justify-between" >
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-slate-700">Payment Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 h-full">
                                {formFields.map((field) => (
                                    <div key={field.name} className={`space-y-2 `}>
                                        <Label htmlFor={field.name} className="text-sm font-medium text-gray-700">{field.label}</Label>
                                        {field.type === "select" ? (
                                            <Select name={field.name} onValueChange={handleServiceChange}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a service" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {services.map((service) => (
                                                        <SelectItem key={service.id} value={service.id}>
                                                            {service.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        ) : field.name === 'amount' ? (
                                            <Input
                                                id={field.name}
                                                name={field.name}
                                                type="text"
                                                required={field.required}
                                                placeholder={field.placeholder}
                                                disabled
                                                className="text-slate-950 opacity-100 bg-opacity-100"
                                            />
                                        ) : field.type === "file" ? (
                                            <Input
                                                id={field.name}
                                                name={field.name}
                                                type="file"
                                                required={field.required}
                                                accept="image/*"
                                                className="file:h-full p-0 file:text-sm file:font-semibold file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100"
                                            />
                                        ) : (
                                            <Input
                                                id={field.name}
                                                name={field.name}
                                                type={field.type}
                                                required={field.required}
                                                placeholder={field.placeholder}
                                                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-cyan-500"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                            {selectedService && (
                                <div className="text-lg font-medium text-cyan-700 mt-4">
                                    Total amount for
                                    <span className="font-bold">
                                        {" " + selectedService.name}
                                    </span> is
                                    <span className="font-bold">
                                        {" ₹" + selectedService.amount}
                                    </span>
                                    <p className="text-sm text-gray-600 mt-1">Please pay and submit the form with required details.</p>
                                </div>
                            )}
                            <Button
                                type="submit"
                                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Processing...' : 'Submit Payment'}
                            </Button>
                        </form>
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                    </CardContent>
                </div>
                <div className="md:w-2/5 p-6 bg-cyan-100 relative overflow-hidden rounded-r-lg w-full">
                    <AnimatePresence>
                        {isSubmitting && !isFlipping && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex items-center justify-center bg-cyan-100 bg-opacity-80"
                            >
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-cyan-600 rounded-full animate-bounce"></div>
                                    <div className="w-3 h-3 bg-cyan-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                    <div className="w-3 h-3 bg-cyan-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                </div>
                            </motion.div>
                        )}
                        {!isSubmitting && !success && (
                            <motion.div
                                initial={{ opacity: 1, rotateY: 0 }}
                                exit={{ opacity: 0, rotateY: 180 }}
                                transition={{ duration: 0.5 }}
                                className="h-full flex flex-col justify-center"
                            >
                                <h3 className="text-lg font-semibold mb-4 text-cyan-800">Scan QR Code to Pay</h3>
                                <Image
                                    src={qrCodeImage}
                                    alt="Payment QR Code"
                                    width={200}
                                    height={600}
                                    className="mx-auto rounded-lg shadow-md object-contain w-full"
                                />
                            </motion.div>
                        )}
                        {success && (
                            <motion.div
                                initial={{ opacity: 0, rotateY: 180 }}
                                animate={{ opacity: 1, rotateY: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex flex-col items-center justify-center bg-cyan-100 rounded-lg"
                            >
                                <CheckCircle className="text-cyan-500 mb-4" size={80} />
                                <p className="text-2xl font-bold text-cyan-700">Payment Successful!</p>
                                <p className="text-lg text-cyan-600 mt-2">Thank you for your payment!</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </Card>
    )
}

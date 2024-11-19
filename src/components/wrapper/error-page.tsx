'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { AlertCircle, ArrowLeft, Home } from 'lucide-react'

interface ErrorPageProps {
    error?: Error & { digest?: string }
    reset?: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
    const router = useRouter()
    const isNotFound = !error || error.message.toLowerCase().includes('not found')

    useEffect(() => {
        // Log the error to an error reporting service if it exists
        if (error) {
            console.error('Error:', error)
        }
    }, [error])

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden"
            >
                <div className="p-6">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                        <AlertCircle className="w-8 h-8 text-red-600" />
                    </motion.div>
                    <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
                        {isNotFound ? "Page Not Found" : "Oops! Something went wrong"}
                    </h1>
                    <p className="text-gray-600 text-center mb-6">
                        {isNotFound
                            ? "The page you're looking for doesn't exist or has been moved."
                            : error?.message || "An unexpected error occurred. Please try again later."}
                    </p>
                    <div className="flex flex-col space-y-3">
                        {!isNotFound && reset && (
                            <Button onClick={reset} variant="outline" className="w-full">
                                Try Again
                            </Button>
                        )}
                        <Button onClick={() => router.back()} variant="outline" className="w-full">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
                        </Button>
                        <Button onClick={() => router.push('/')} className="w-full">
                            <Home className="mr-2 h-4 w-4" /> Go to Homepage
                        </Button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
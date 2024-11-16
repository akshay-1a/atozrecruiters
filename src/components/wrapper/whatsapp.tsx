'use client'

import { useState, useEffect } from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'
import { motion, AnimatePresence } from 'framer-motion'
import { contacts } from '@/lib/constants'

export default function Whatsapp() {
    const [isVisible, setIsVisible] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 4000) // 4 seconds delay
        return () => clearTimeout(timer)
    }, [])

    const handleWhatsAppClick = (number: string) => {
        number = number.replace(/\s+/g, '');
        window.open(`https://wa.me/${number}`, '_blank')
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="fixed z-50 bottom-4 right-10 md:right-4 "
                >
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="bg-green-500 text-white rounded-full p-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition-transform hover:scale-110"
                        aria-label="Open WhatsApp contacts"
                    >
                        <IoLogoWhatsapp className="h-8 w-8" />
                    </button>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-64"
                            >
                                <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                                <ul className="space-y-2">
                                    {contacts.map((contact, index) => (
                                        <li key={index}>
                                            <button
                                                onClick={() => handleWhatsAppClick(contact.number)}
                                                className="w-full text-left px-3 py-2 rounded-md hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors"
                                            >
                                                <span className="font-medium">{contact.name}</span>
                                                <br />
                                                <span className="text-sm text-gray-600">{contact.number}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
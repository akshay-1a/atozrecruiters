'use client';
import Image from 'next/image';
import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import {} from 'react-icons';
import Navbar from './navbar';

export default function Wrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <div className=''>
        <Navbar/>
        {children}
    </div>
  )
}


export function Nabar(){
    return (
        <nav className=''>
            {/* logo */}
            <div>
                <Image src="logo.jpg" alt='' height={200} width={200} className='h-16 aspect-auto'/>
            </div>
            <div>

            </div>
        </nav>
    )
}


export function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">TalentMatters</h3>
                        <p>Connecting talent with opportunity</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-blue-400">Home</Link></li>
                            <li><Link href="#" className="hover:text-blue-400">About</Link></li>
                            <li><Link href="#" className="hover:text-blue-400">Services</Link></li>
                            <li><Link href="#" className="hover:text-blue-400">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <p>123 Business Street</p>
                        <p>City, State 12345</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: info@talentmatters.com</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <Link href="#" className="hover:text-blue-400"><Facebook /></Link>
                            <Link href="#" className="hover:text-blue-400"><Twitter /></Link>
                            <Link href="#" className="hover:text-blue-400"><Linkedin /></Link>
                            <Link href="#" className="hover:text-blue-400"><Instagram /></Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p>&copy; {new Date().getFullYear()} TalentMatters. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
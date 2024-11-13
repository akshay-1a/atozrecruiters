'use client';
import Image from 'next/image';
import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { } from 'react-icons';
import Navbar from './navbar';
// import Footer from './footer';

export default function Wrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='text-slate-950'>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-12">
            <div className="container mx-auto px-4">
                <div className="flex justify-around items-start gap-8">
                    <div>
                        <h3 className="text-3xl font-bold uppercase mb-4">
                            A To Z
                            Recruiters
                        </h3>
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
                        <p>Job Seeker: resume@atozrecruiters.com</p>
                        <p>Company: proposal@atozrecruiters.com</p>
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
                <div className="mt-8 py-4 border-t border-gray-700 text-center">
                    <p>&copy; {new Date().getFullYear()} A To Z Recruiters. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
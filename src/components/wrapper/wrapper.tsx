'use client';

import React from 'react'
import Link from 'next/link'
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import Navbar from './navbar';
import Whatsapp from './whatsapp';
import { Footer as f } from '@/lib/constants';


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
            <Whatsapp />
        </div>
    )
}


export function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-12 text-base capitalize">
            <div className="container mx-auto px-14">
                <div className="flex flex-col md:flex-row md:justify-around md:items-start gap-8">
                    <div >
                        <h3 className="text-3xl font-extrabold uppercase mb-4">
                            {f.company}
                        </h3>
                        <p className='text-lg max-w-md '>
                            {f.tagline}
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {f.quick.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.url} className="hover:text-blue-400">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <p>{f.address}</p>
                        <p>{f.address1}</p>
                        <p>Phone:{f.phone}</p>
                        <p>Job Seeker: {f.job}</p>
                        <p>Company: {f.proposal}</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="grid grid-cols-2 gap-6">
                            {f.links.map((link, index) => {
                                const Icon = link.icon
                                return (
                                    <Link key={index} href={link.url} passHref>
                                        <div className={`flex justify-center items-center rounded-xl bg-slate-500 hover:bg-white text-white
                                            ${link.color === 'pink' ? 'hover:text-pink-500' : 'hover:text-blue-500'}`}>
                                            <Icon className={`p-2 h-12 w-12 overflow-visible rounded-xl hover:scale-125 transition-all ease-in-out duration-1000`} />
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="mt-8 py-4 gap-4 border-t border-gray-700 text-center flex flex-col md:flex-row justify-center md:px-14">
                    <p className='text-base'>
                        &copy; {new Date().getFullYear()} {f.rights}
                    </p>
                    <p className='text-sm  md:text-base hidden'>
                        {f.developer}{" "}
                        <Link href={f.link.url}>
                            {f.link.label}
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}
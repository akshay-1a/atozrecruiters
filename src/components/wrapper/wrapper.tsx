'use client';

import React from 'react'
import Link from 'next/link'
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import Navbar from './navbar';
import Whatsapp from './whatsapp';
import { Footer as f } from '@/lib/constants';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';


export default function Wrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='text-slate-950'>
            <PageTransition>
                <Navbar />
                {children}
                <Footer />
                <Whatsapp />
            </PageTransition>
        </div>
    )
}



const transitionVariants = {
    initial: {
        x: '100%',
        y: '0%',
        height: '100%',
    },
    animate: {
        x: '100%',
        y: '0%',
        height: '0%',
    },
    exit: {
        x: ['0%', '100%'],
        y: ['100%', '0%'],
        height: ['0%', '100%'],
    }
};

export function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    return (
        <>
            <AnimatePresence>
                <div key={pathname}>
                    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-cyan-100'
                        variants={transitionVariants}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        transition={{ delay: 0.1, duration: 1, ease: 'easeInOut' }}
                    >
                    </motion.div>
                    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-cyan-500'
                        variants={transitionVariants}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
                    >
                    </motion.div>
                    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-cyan-700'
                        variants={transitionVariants}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        transition={{ delay: 0.9, duration: 1, ease: 'easeInOut' }}
                    >

                    </motion.div>
                </div>
            </AnimatePresence>
            {children}
        </>
    )
}


export function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-12 text-base capitalize">
            <div className="container mx-auto px-14">
                <div className="flex flex-col md:flex-row md:justify-around md:items-start gap-8">
                    <div >
                        <h3 className="text-xl font-extrabold uppercase mb-4">
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
                                            ${link.color === 'pink' ? 'hover:text-pink-500' : 'hover:text-blue-500'}
                                            hover:scale-125 transition-all ease-in-out duration-500`}>
                                            <Icon className={`p-2 h-12 w-12 overflow-visible rounded-xl `} />
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
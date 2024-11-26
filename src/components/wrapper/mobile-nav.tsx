'use client'

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { navItems } from "@/lib/constants"

export default function MobileNav() {
    const [isOpen, setIsOpen] = React.useState(false)

    const menuVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.2,
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    }

    return (
        <div className="block md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <button className="p-2 hover:bg-sky-800 rounded-lg transition-colors">
                        <Menu className="h-6 w-6 text-white" />
                    </button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[280px] p-0">
                    <SheetHeader className="p-6 border-b bg-cyan-100">
                        <SheetTitle className="text-lg font-bold text-sky-800 uppercase">
                            <span className="font-extrabold font-serif text-5xl">A To Z</span>
                            <br/>
                            <span className="font-extrabold tracking-[3.2px] font-serif text-xl">Recruiters</span>
                            
                        </SheetTitle>
                    </SheetHeader>

                    <motion.nav
                        className="p-4"
                        initial="hidden"
                        animate="visible"
                        variants={menuVariants}
                    >
                        <Accordion type="single" collapsible className="space-y-2">
                            {/* <AccordionItem value="company" className="border-none">
                                <AccordionTrigger className="py-3 px-4 text-sm font-medium hover:bg-sky-50 rounded-lg">
                                    Company
                                </AccordionTrigger>
                                <AccordionContent className="pt-1 pb-3">
                                    <motion.div className="flex flex-col space-y-1" variants={menuVariants}>
                                        {navItems.company.map((item) => (
                                            <motion.div key={item.title} variants={itemVariants}>
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block px-8 py-2 text-sm text-gray-600 hover:text-sky-600 hover:bg-sky-50 rounded-md transition-colors"
                                                >
                                                    {item.title}
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </AccordionContent>
                            </AccordionItem> */}

                            <AccordionItem value="services" className="border-none">
                                <AccordionTrigger className="py-3 px-4 text-sm font-medium hover:bg-sky-50 rounded-lg">
                                    Services
                                </AccordionTrigger>
                                <AccordionContent className="pt-1 pb-3">
                                    <motion.div className="flex flex-col space-y-1" variants={menuVariants}>
                                        {navItems.services.map((item) => (
                                            <motion.div key={item.title} variants={itemVariants}>
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block px-8 py-2 text-sm text-gray-600 hover:text-sky-600 hover:bg-sky-50 rounded-md transition-colors"
                                                >
                                                    {item.title}
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="industries" className="border-none">
                                <AccordionTrigger className="py-3 px-4 text-sm font-medium hover:bg-sky-50 rounded-lg">
                                    Industries
                                </AccordionTrigger>
                                <AccordionContent className="pt-1 pb-3">
                                    <motion.div className="flex flex-col space-y-1" variants={menuVariants}>
                                        {navItems.industries.map((item) => (
                                            <motion.div key={item.title} variants={itemVariants}>
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block px-8 py-2 text-sm text-gray-600 hover:text-sky-600 hover:bg-sky-50 rounded-md transition-colors"
                                                >
                                                    {item.title}
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <motion.div
                            variants={itemVariants}
                            className="mt-4 px- 4"
                        >
                            <Link
                                href="/about"
                                onClick={() => setIsOpen(false)}
                                className="block py-3 px-4 text-sm font-medium text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                            >
                                About
                            </Link>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="mt-4 px- 4"
                        >
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block py-3 px-4 text-sm font-medium text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                            >
                                Contact
                            </Link>
                        </motion.div>
                    </motion.nav>
                </SheetContent>
            </Sheet>
        </div>
    );
}
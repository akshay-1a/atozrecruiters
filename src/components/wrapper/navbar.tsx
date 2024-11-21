'use client'

import * as React from "react"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { navItems } from "@/lib/constants"
import Image from "next/image"
import MobileNav from "./mobile-nav"

export default function Navbar() {
    return (
        <header className="border-b bg-[#0171A3]">
            <div className="container mx-auto px-8 md:px-16 py-5">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2 z-50">
                        <Image
                            src="/logo.jpg"
                            alt="A To Z Recruiters"
                            width={200} height={200}
                            priority={true}
                            placeholder="empty"
                            className="w-32 md:w-48 absolute top-2 border overflow-hidden"
                        />
                    </Link>

                    <NavigationMenu className=" hidden md:block">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="">
                                    Company
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[340px] md:grid- cols-2">
                                        {navItems.company.map((item) => (
                                            <ListItem
                                                key={item.title}
                                                title={item.title}
                                                url={item.url}
                                                href={item.href}
                                            >
                                                {item.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                                        {navItems.services.map((item) => (
                                            <ListItem
                                                key={item.title}
                                                title={item.title} 
                                                url={item.url}
                                                href={item.href}
                                            >
                                                {item.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[340px] md:grid- cols-2">
                                        {navItems.industries.map((item) => (
                                            <ListItem
                                                key={item.title}
                                                title={item.title}
                                                url={item.url}
                                                href={item.href}
                                            >
                                                {item.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/contact" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Contact
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <MobileNav/>
                </div>
            </div>
        </header>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & {
        title: string
        url: string
        children?: React.ReactNode
    }
>(({ className, title, url, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "flex items-center gap-3 select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-sky-200",
                        className
                    )}
                    {...props}
                >
                    <Image
                        src={`/nav/${url}`}
                        alt={title}
                        width={400}
                        height={400}
                        className="object-cover aspect-square h-16 w-16 rounded-md border border-black" />
                    <div className="flex flex-col gap-1">
                        <div className="text-sm font-bold leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {children}
                        </p>
                    </div>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
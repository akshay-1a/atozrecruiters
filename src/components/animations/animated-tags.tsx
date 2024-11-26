import React from 'react'
import { Fade } from './clip'

export function H1({ children, className = "" }: Readonly<{
    children?: React.ReactNode
    className?: string
}>) {
    return (
        <Fade>
            <h1 className={`text-3xl sm:text-4xl md:text-6xl font-sans max-w-7xl font-extrabold mx-auto ${className}`}>
                {children}
            </h1>
        </Fade>
    )
}

export function P({ children, className = "" }: Readonly<{
    children?: React.ReactNode
    className?: string
}>) {
    return (
        <Fade distance={50}>
            <p className={`${className}`}>
                {children}
            </p>
        </Fade>
    )
}


export function H2({ children, className = "" }: Readonly<{
    children?: React.ReactNode
    className?: string
}>) {
    return (
        <Fade distance={50}>
            <h2 className={`text-3xl sm:text-4xl md:text-6xl font-sans font-extrabold  ${className}`}>
                {children}
            </h2>
        </Fade>
    )
}

export function H3({ children, className = "" }: Readonly<{
    children?: React.ReactNode
    className?: string
}>) {
    return (
        <Fade>
            <h3 className={`text-3xl sm:text-4xl md:text-6xl font-sans max-w-7xl font-extrabold  ${className}`}>
                {children}
            </h3>
        </Fade>
    )
}

export function H4({ children, className = "" }: Readonly<{
    children?: React.ReactNode
    className?: string
}>) {
    return (
        <Fade>
            <h4 className={`text-3xl sm:text-4xl md:text-6xl font-sans max-w-7xl font-extrabold mx-auto  ${className}`}>
                {children}
            </h4>
        </Fade>
    )
}

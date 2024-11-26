'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Code2, Globe, Database } from 'lucide-react'

export function WelcomeModal() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        // Check if user has seen the modal before
        const hasSeenModal = localStorage.getItem('hasSeenWelcomeModal')
        if (!hasSeenModal) {
            setIsOpen(true)
            localStorage.setItem('hasSeenWelcomeModal', 'true')
        }
    }, [])

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Welcome to Our New Services!</DialogTitle>
                    <DialogDescription className="text-lg">
                        Introducing IT Solutions by A to Z Recruiters
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Globe className="h-5 w-5 text-primary" />
                            <span className="text-sm">Website Development</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Code2 className="h-5 w-5 text-primary" />
                            <span className="text-sm">Software Development</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Database className="h-5 w-5 text-primary" />
                            <span className="text-sm">Custom IT Solutions</span>
                        </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        We're expanding our services to provide comprehensive IT solutions. From web development to custom software, we're here to help your business grow.
                    </p>
                </div>
                <div className="flex justify-end">
                    <Button onClick={() => setIsOpen(false)}>
                        Got it, thanks!
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}


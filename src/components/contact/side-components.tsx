'use client'

import { TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Mail, Phone, MapPin } from 'lucide-react'

export function Candidate() {
    return (
        <div>
            <TabsContent value="candidate">
                <Card>
                    <div className="flex gap-5 overflow-hidden">
                        <div className="flex-grow">
                            <CardHeader>
                                <CardTitle>Candidate Application</CardTitle>
                                <CardDescription>Submit your details to explore new job opportunities.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="fullName">Full Name</Label>
                                        <Input id="fullName" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="fathersName">Father's Name</Label>
                                        <Input id="fathersName" placeholder="John Doe Sr." />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="totalExperience">Total Experience</Label>
                                        <Input id="totalExperience" placeholder="5 years" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="currentJobRole">Current Job Role</Label>
                                        <Input id="currentJobRole" placeholder="Software Engineer" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="contact">Contact</Label>
                                        <Input id="contact" placeholder="+1 234 567 8900" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email ID</Label>
                                        <Input id="email" type="email" placeholder="john@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="location">Location</Label>
                                        <Input id="location" placeholder="New York, NY" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="resume">Resume Upload</Label>
                                        <Input id="resume" type="file" accept=".pdf,.doc,.docx" />
                                    </div>
                                </div>
                                <Button className="w-full">Submit Application</Button>
                            </CardContent>
                        </div>
                        <SideImg />
                    </div>
                </Card>
            </TabsContent>
        </div>
    )
}



export function Client() {
    return (
        <div className="">
            <TabsContent value="client">
                <Card>
                    <div className="flex gap-5 overflow-hidden">
                        <SideImg />
                        <div className="flex-grow">
                            <CardHeader>
                                <CardTitle>Business Proposal Application</CardTitle>
                                <CardDescription>Tell us about your organization and hiring needs.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="clientFullName">Full Name</Label>
                                        <Input id="clientFullName" placeholder="Jane Smith" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="designation">Designation</Label>
                                        <Input id="designation" placeholder="HR Manager" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="organizationName">Organization Name</Label>
                                        <Input id="organizationName" placeholder="Acme Inc." />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="employeeStrength">Employee Strength</Label>
                                        <Input id="employeeStrength" placeholder="500+" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="clientLocation">Location</Label>
                                        <Input id="clientLocation" placeholder="San Francisco, CA" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="website">Website</Label>
                                        <Input id="website" placeholder="https://www.example.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="requirements">Requirements</Label>
                                    <Textarea id="requirements" placeholder="Tell us about your hiring needs..." />
                                </div>
                                <Button className="w-full">Submit Inquiry</Button>
                            </CardContent>
                        </div>
                    </div>
                </Card>
            </TabsContent>
        </div>
    )
}


export function SideImg() {
    return (
        <Image src='/contact/bg.jpg' alt="" width={1000} height={1000} className="w-[50%] object-cover object-center aspect-auto rounded-lg m-2" />
    )
}

export function ContactDetails({data}: any) {
    return (
        <Card className={`overflow-hidden`}>
            <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Get in touch with us directly.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <span>{data.details.value}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <span>resumes@example.com</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-gray-500" />
                    <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <span>123 Business Ave, Suite 100, San Francisco, CA 94107</span>
                </div>
            </CardContent>
        </Card>
    )
}



export function Map() {
    return (
        <div className="my-12">
            <Card className="h-[400px] overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0673431840716!2d-122.41941708468212!3d37.77492997975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter+HQ!5e0!3m2!1sen!2sus!4v1565726104009!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                ></iframe>
            </Card>
        </div>
    )
}

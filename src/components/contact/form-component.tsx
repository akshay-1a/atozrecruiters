import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"


interface FormField {
    name: string
    label: string
    type: string
    required: boolean
}

interface FormComponentProps {
    imgCap: string
    imgUrl: string
    imgPos: string
    formData: {
        innerHeading: string
        purpose: string
        fields: FormField[]
    }
    onSubmit: (formData: Record<string, string>) => void
}

export function FormComponent({ imgCap, imgUrl, imgPos, formData, onSubmit }: FormComponentProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsSubmitting(true)
        setError(null)
        setSuccess(false)

        const formElement = event.currentTarget
        const formData = new FormData(formElement)
        const data: Record<string, string> = {}
        formData.forEach((value, key) => {
            data[key] = value.toString()
        })
        // onSubmit(data)
        try {
            // Determine form type from the inner heading
            const formType = data.currentRole ? 'candidate' : 'client'

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    formType,
                    ...data
                }),
            })

            if (!response.ok) {
                throw new Error('Form submission failed')
            }

            setSuccess(true)
            formElement.reset() // Reset form after successful submission
            onSubmit(data)

        } catch (error) {
            console.error('Error submitting form:', error)
            setError('An error occurred while submitting the form. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Card>
            <FormImage position={imgPos} imgCap={imgCap} imgUrl={imgUrl}>
                <CardHeader>
                    <CardTitle>{formData.innerHeading}</CardTitle>
                    <CardDescription>{formData.purpose}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {success && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                            Form submitted successfully! We'll get back to you soon.
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {formData.fields.map((field) => (
                                <div key={field.name} className={`space-y-2 ${field.type === "textarea" ? "md:col-span-2" : ""}`} >
                                    <Label htmlFor={field.name}>{field.label}</Label>
                                    {field.type === "textarea" ? (
                                        <Textarea id={field.name} name={field.name} required={field.required} />
                                    ) : (
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            type={field.type}
                                            required={field.required}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </Button>
                    </form>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </CardContent>
            </FormImage>
        </Card>
    )
}



export function FormImage({
    imgCap,
    imgUrl,
    position,
    children,
}: Readonly<{
    imgCap: string;
    imgUrl: string;
    position: string;
    children: React.ReactNode;
}>) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`flex gap-5 ${position === 'right' ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className="flex-1">{children}</div>
            <div className="flex-1 relative m-4 overflow-hidden rounded-lg hidden md:block">
                <div
                    className=""
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div
                        className={`absolute inset-0 z-20 flex bg-black/60 items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100 ' : 'opacity-0'
                            }`}
                    >
                        <p className="text-white font-extrabold text-3xl p-24 text-center">{imgCap}</p>
                    </div>
                    <div className="aspect-w-4 aspect-h-3">
                        <Image
                            src={imgUrl}
                            alt={imgCap}
                            fill
                            className={`rounded-lg transition-transform duration-300 object-cover
                                ${position === "left" ? 'object-center' : 'object-bottom'} ${isHovered ? 'scale-125' : 'scale-100'
                                }`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}